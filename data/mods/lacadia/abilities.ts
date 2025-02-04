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
	// backstabber: {
	// 	name: 'Backstabber',
	// 	shortDesc: 'If target switches out, hits them with readied attack before switch occurs',
	// 	num: 2010,
	// 	onTryHit(target, pokemon) {
	// 		target.side.removeSideCondition('pursuit');
	// 	},
	// 	condition: {
	// 		duration: 1,
	// 		onBeforeSwitchOut(pokemon) {
	// 			this.debug('Pursuit start');
	// 			let alreadyAdded = false;
	// 			pokemon.removeVolatile('destinybond');
	// 			for (const source of this.effectState.sources) {
	// 				if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp) continue;
	// 				if (!alreadyAdded) {
	// 					this.add('-activate', pokemon, 'move: Pursuit');
	// 					alreadyAdded = true;
	// 				}
	// 				// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
	// 				// If it is, then Mega Evolve before moving.
	// 				if (source.canMegaEvo || source.canUltraBurst || source.canTerastallize || source.canHyper) {
	// 					for (const [actionIndex, action] of this.queue.entries()) {
	// 						if (action.pokemon === source) {
	// 							if (action.choice === 'megaEvo') {
	// 								this.actions.runMegaEvo(source);
	// 							} else if (action.choice === 'terastallize') {
	// 								// Also a "forme" change that happens before moves, though only possible in NatDex
	// 								this.actions.terastallize(source);
	// 							} else {
	// 								continue;
	// 							}
	// 							this.queue.list.splice(actionIndex, 1);
	// 							break;
	// 						}
	// 					}
	// 				}
	// 				this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
	// 			}
	// 		},
	// 	},
	// },
	balancesurge: {
		name: "Balance Surge",
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
		shortDesc: "The Pokemon's Speed is raised by 6 stages and restores 25% of its HP when it reaches 1/2 or less of its max HP. Once per battle.",
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
	}
	


}