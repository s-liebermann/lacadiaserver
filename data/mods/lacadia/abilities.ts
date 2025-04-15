export const Abilities: {[k: string]: ModdedAbilityData} = {
	parasitoid: {
        name: "Parasitoid",
        shortDesc: "The user heals 25% of the damage it deals with direct attacks",
        num: 2000,
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (!move.drain) {
			move.drain = [1, 4];
			}
		}
	},
	ancientguard: {
		name: "Ancient Guard",
		shortDesc: "Rock type moves are not very effective against the user. Immune to Stealth Rock.",
		num: 2001,
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Ancient Guard weaken');
				return this.chainModify(0.125);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(spa, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Ancient Guard weaken');
				return this.chainModify(0.125);
			}
		},
		flags: {breakable: 1},
	},
	pollyanna: {
		name: "Pollyanna",
		shortDesc: "(Hyper) Immune to Dark type moves, raises Sp. Atk by 1 stage if hit",
		num: 2002,
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Pollyanna');
				}
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (source === this.effectState.target || !target.isAlly(source)) return;
			if (move.type === 'Dark') {
				this.boost({spa: 1}, this.effectState.target);
			}
		},
		flags: {isHyper: 1},
	},
	overload: {
		name: "Overload",
		shortDesc: "(Hyper) Skips charge and recharge turns for moves",
		num: 2003,
		onChargeMove(pokemon, target, move) {
			return false;
		},
		onModifyMove(move) {
			delete move.flags['charge', 'recharge'];
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
			}
		},
		flags: {isHyper: 1},
	},
	stoicism: {
		name: "Stoicism",
		shortDesc: "(Hyper) Immune to attack drops, burns, and flinches",
		num: 2004,
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			if (boost[1]! < 0) {
				delete boost[1];
				showMsg = true;
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: Stoicism", "[of] " + target);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Stoicism');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Stoicism');
			}
			return false;
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		flags: {isHyper: 1},
	},
	lockdown: {
		name: 'Lockdown',
		shortDesc: '(Hyper) Immune to pivot moves and blocks switch effect',
		num: 2005,
		flags: {isHyper: 1},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.selfSwitch) {
				this.add('-immune', target, '[from] ability: Lockdown');
				return null;
			}
		},
	},
	withering: {
		name: 'Withering',
		shortDesc: '(Hyper) All Pokemon are given the Heal Block effect when user is switched in',
		num: 2006,
		flags: {isHyper: 1},
		onPreStart(pokemon)
		{
			for (const target of this.getAllActive()) {
				target.addVolatile('healblock', this.effectState.target);
			}
		}
	},
	verdanthunger: {
		name: 'Verdant Hunger',
		shortDesc: 'Power of draining moves, leech seed are doubled',
		num: 2007,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.drain) {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.drain) {
				return this.chainModify(2);
			}
		},
		onSourceDamage(damage, target, source, effect)
		{
			if (effect.id == 'leechseed') {
				damage = damage * 2;
			}
		}
		// onResidual(target, source, effect) {
		// 	if (effect.id == 'leechseed') {
		// 		this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Water', 'Steel']) ? 4 : 8));
		// 	}
		// }
	},
	noblebearing: {
		name: 'Noble Bearing',
		shortDesc: 'Raises Defense, Sp. Defense, and Speed when a status condition is successfully inflicted',
		num: 2008,
		onSourceSetStatus(status, target, source, effect)
		{
			if (['psn', 'brn', 'frz', 'par', 'tox', 'slp'].includes(status.id)) {
				this.boost({def: 1, spd: 1, spe: 1}, source, source, this.effect);
			}
		}   
	},
	ruthless: {
		name: 'Ruthless',
		shortDesc: 'Users attacks always result in critical hits when target has lowered stats',
		num: 2009,
		onModifyCritRatio(critRatio, source, target) {
			let i: BoostID;
			for (i in target.boosts) {
				if (target.boosts[i]! < 0) {
					return 5
				}
			}
		},
	},
	backstabber: {
		name: 'Backstabber',
		shortDesc: 'If target switches out, hits them with readied attack before switch occurs',
		num: 2010,
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('pursuit');
		},
		condition: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Pursuit start');
				let alreadyAdded = false;
				pokemon.removeVolatile('destinybond');
				for (const source of this.effectState.sources) {
					if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Pursuit');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst || source.canTerastallize || source.canHyper) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source) {
								if (action.choice === 'megaEvo') {
									this.actions.runMegaEvo(source);
								} else if (action.choice === 'terastallize') {
									// Also a "forme" change that happens before moves, though only possible in NatDex
									this.actions.terastallize(source);
								} else {
									continue;
								}
								this.queue.list.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
				}
			},
		},
	},
	polarity: {
		name: "Polarity",
		shortDesc: "Fire moves are boosted by 20% in Snow, Ice moves are boosted by 20% in Sun.",
		num: 2011,
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('sun')) {
				if (move.type === 'Ice') {
					return this.chainModify([4916, 4096]);
				}
			}
			if (this.field.isWeather('snow')) {
				if (move.type === 'fire') {
					return this.chainModify([4916, 4096]);
				}
			}
		},
	},
	caffeinerush: {
		name: "Caffeine Rush",
		shortDesc: "+6 Speed and restores 25% of HP when reaching 1/2 or less of max HP. Once per battle.",
		num: 2012,
		onAfterMoveSecondary(target, source, move) {
			if (target.caffeinated) return;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit && !move.smartTarget ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				target.caffeinated = true;
				this.boost({spe: 6}, target, target);
				this.heal(target.baseMaxhp / 4);
			}
		},
	},
	schrodinger: {
		name: "Schrodinger",
		shortDesc: "This Pokemon's Normal-type moves become Ghost type, and this Pokemon's Ghost-type moves become Normal type",
		num: 2013,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Ghost';
				move.typeChangerBoosted = this.effect;
			}
			else {
				if (move.type === 'Ghost' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
					move.type = 'Normal';
				}
			}
		},
	},
	surveillance: {
		name: "Surveillance",
		shortDesc: "On switch-in or on enemy switch, reveals the opposing Pokemon's Speed stat",
		num: 2014,
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Surveillance', pokemon.name, '[of] ' + pokemon.spe);
		},
	},
	meltdown: {
		name: "Meltdown",
		shortDesc: "Getting hit by a Fire-type move allows the user to use Eruption immediately after",
		num: 2015,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire') {
				const newMove = this.dex.getActiveMove('eruption');
				this.actions.useMove(newMove, target, source);
			}
		},
	},
	metallicappetite: {
		name: "Metallic Appetite",
		shortDesc: "Boosts damage of moves by 30% when a Steel-type Pokemon is on the field",
		num: 2016,
		onBasePower(basePower, attacker, defender, move) {
			for (const allyActive of attacker.allies()) {
				if (allyActive.type === 'Steel') {
					return this.chainModify(1.3);
				}
			}
			for (const target of attacker.adjacentFoes()) {
				if (target.type === 'Steel') {
					return this.chainModify(1.3);
				}
			}
		},
	},
	momentum: {
		name: "Momentum",
		shortDesc: "Move power is boosted 20% for each time it is used consecutively",
		num: 2017,
		onStart(pokemon) {
			pokemon.addVolatile('metronome');
			this.effectState.lastMove = '';
			this.effectState.numConsecutive = 0;
		},
		onTryMovePriority: -2,
			onTryMove(pokemon, target, move) {
				if (move.callsMove) return;
				if (this.effectState.lastMove === move.id && pokemon.moveLastTurnResult) {
					this.effectState.numConsecutive++;
				} else if (pokemon.volatiles['twoturnmove']) {
					if (this.effectState.lastMove !== move.id) {
						this.effectState.numConsecutive = 1;
					} else {
						this.effectState.numConsecutive++;
					}
				} else {
					this.effectState.numConsecutive = 0;
				}
				this.effectState.lastMove = move.id;
			},
			onModifyDamage(damage, source, target, move) {
				const dmgMod = [4096, 4915, 5734, 6553, 7372, 8192];
				const numConsecutive = this.effectState.numConsecutive > 5 ? 5 : this.effectState.numConsecutive;
				this.debug(`Current Metronome boost: ${dmgMod[numConsecutive]}/4096`);
				return this.chainModify([dmgMod[numConsecutive], 4096]);
			},
	},
	huntersinstincts: {
		name: "Hunter's Insticts",
		shortDesc: "On switch-in or on enemy switch, reveals whether the opponent can be knocked out in one hit",
		num: 2018,
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Hunters Insticts', pokemon.name, '[of] ' + pokemon.spe);
		},
	},
	abrasive: {
		name: "Abrasive",
		shortDesc: "(Hyper) On switch-in, deal damage equal to 12.5% of the enemy's max HP",
		num: 2019,
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			if (!this.effectState.switchingIn) return;
			// copies across in doubles/triples
			// (also copies across in multibattle and diagonally in free-for-all,
			// but side.foe already takes care of those)
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				this.damage(target.baseMaxhp / 8, target, pokemon);
			}
			this.effectState.switchingIn = false;
		},
		flags: {isHyper: 1},
	},
	luckystar: {
		name: "Lucky Star",
		shortDesc: "(Hyper) Doubles chance of secondary effects on target, halves chance on user",
		num: 2020,
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		onDamagingHit(damage, target, source, move) {
			if (move.secondaries) {
				this.debug('halving secondary chances');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 0.5;
				}
			}
		},
		flags: {isHyper: 1},
	},
	aspecttwist: {
		name: "Aspect Twist",
		shortDesc: "(Hyper) Physical moves use Sp. Atk, Special moves use Atk.",
		num: 2020,
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.category === 'Special') {
				move.category = 'Physical'
			}
			else if (move.category === 'Physical') {
				move.category = 'Special'
			}
			
		},
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Special') {
				move.category = 'Physical'
			}
			else if (move.category === 'Physical') {
				move.category = 'Special'
			}
		},
		flags: {isHyper: 1},
	},
	flightless: {
		name: "Flightless",
		shortDesc: "Boosts damage of Flying-type moves by 50%",
		num: 2021,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Flightless boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Flightless boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
	},
	brainjack: {
		name: "Brain Jack",
		shortDesc: "Damaging Psychic Moves have a 50% chance to inflict infatuation, confusion, torment, disable, or encore",
		num: 2022,
		onSourceDamagingHit(damage, target, source, move) {
			if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
			if (move.type === 'Psychic') 
			{
				if (this.randomChance(1, 2)) {
				const result = this.random(5);
				if (result === 0) {
					target.addVolatile('attract', this.effectState.target);
				} else if (result === 1) {
					target.addVolatile('confusion', this.effectState.target);
				} else if (result === 2) {
					target.addVolatile('torment', this.effectState.target);
				} else if (result === 3) {
					target.addVolatile('disable', this.effectState.target);
				} else {
					target.addVolatile('encore', this.effectState.target);
				}
			}
		}
		},
		flags: {},
	}


}