export const Abilities: {[k: string]: ModdedAbilityData} = {
	apocalypticleech: {
        name: "Apocalyptic Leech",
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
		shortDesc: "Immune to Dark type moves, raises Sp. Atk by 1 stage if hit",
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
	unyieldingdrive: {
		name: "Unyielding Drive",
		shortDesc: "Skips charge and recharge turns for moves",
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
	stoic: {
		name: "Stoic",
		shortDesc: "Immune to attack drops, burns, and flinches",
		num: 2004,
		onTryBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			if (boost[1]! < 0) {
				delete boost[1];
				showMsg = true;
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: Stoic", "[of] " + target);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Stoic');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Stoic');
			}
			return false;
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		flags: {isHyper: 1},
	},
	grippingpresence: {
		name: 'Gripping Presence',
		shortDesc: 'Immune to pivot moves and blocks switch effect',
		num: 2005,
		flags: {isHyper: 1},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.selfSwitch) {
				this.add('-immune', target, '[from] ability: Gripping Presence');
				return null;
			}
		},
	},
	unforgiving: {
		name: 'Unforgiving',
		shortDesc: 'All Pokemon are given the Heal Block effect when user is switched in',
		num: 2006,
		flags: {isHyper: 1},
		onPreStart(pokemon)
		{
			for (const target of this.getAllActive()) {
				target.addVolatile('healblock', this.effectState.target);
			}
		}
	},
	draconicgrowth: {
		name: 'Draconic Growth',
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
	noblepresentation: {
		name: 'Noble Presentation',
		shortDesc: 'Raises Defense, Sp. Defense, and Speed when a status condition is successfully inflicted',
		num: 2008,
		onSourceSetStatus(status, target, source, effect)
		{
			if (['psn', 'brn', 'frz', 'par', 'tox', 'slp'].includes(status.id)) {
				this.boost({def: 1, spd: 1, spe: 1}, source, source, this.effect);
			}
		}
	},
	vengefuldrive: {
		name: 'Vengeful Drive',
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
	}


}