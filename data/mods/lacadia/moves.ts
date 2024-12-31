export const Moves: {[k: string]: ModdedMoveData} = {
	beanbarrage: {
		num: 2000,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Bean Barrage",
		shortDesc: "Attacks and sets leech seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit(target, source) {
			if (target.hasType('Grass')) return null;
			target.addVolatile('leechseed', source);
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Seed Bomb", target);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	crushingcleave: {
		num: 2001,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Crushing Cleave",
		shortDesc: "Hits twice, lowers defense and special defense",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, slicing: 1},
		multihit: 2,
		secondaries: [
			{
				chance: 100,
				boosts: {
					def: -1,
				},
			}, {
				chance: 100,
				boosts: {
					spd: -1,
				},
			},
		],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Stone Axe", target);
		},
		// onSourceModifySecondaries(secondaries, target, source, move) {
		// 	if (move.hit < 2) {
		// 		return secondaries.filter(effect =>  === 'flinch');
		// 	}
		// },
		target: "normal",
		type: "Ground",
		
		contestType: "Clever",
	},
	venomspear: {
		num: 2002,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Venom Spear",
		shortDesc: "Applies Toxic effect to Opponent",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Poison Tail", target);
		},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	egocrush: {
		num: 2003,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Ego Crush",
		shortDesc: "Super effective against Psychic Types",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Psychic') return 1;
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Shattered Psyche", target);
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	freezingtempo: {
		num: 2004,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Freezing Tempo",
		shortDesc: "Increases Sp. Atk and Speed by 1 stage. Next move is guaranteed to hit.",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1, metronome: 1},
		self: {
			boosts: {
			spa: 1,
			spe: 1,
		},
	    },
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Lock-On', '[of] ' + target);
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Dance", target);
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	icyharpoon: {
		num: 2005,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Icy Harpoon",
		shortDesc: "Has a 30% chance of badly poisoning the target",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Glacial Lance", target);
		},
		secondary: {
			chance: 30,
			status: 'tox',
		},
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	agaveshot: {
		num: 2006,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Agave Shot",
		shortDesc: "Increases Sp. Atk by 3 Stages but decreases Acc by 1 stage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 3,
					accuracy: -1
				},
			},
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Matcha Gotcha", target);
		},
		target: "normal",
		type: "Grass",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cool",
	},
	finalact: {
		num: 2007,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Final Act",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -1, spa: -1}, target, source);
			if (!success && !target.hasAbility('mirrorarmor')) {
				delete move.selfSwitch;
			}
		},
		volatileStatus: 'encore',
		condition: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || target.volatiles['dynamax']) return false;

				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = target.moves.indexOf(move.id);
				if (move.isZ || move.flags['failencore'] || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return false;
				}
				this.effectState.move = move.id;
				this.add('-start', target, 'Encore');
				if (!this.queue.willMove(target)) {
					this.effectState.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectState.move) return this.effectState.move;
			},
			onResidualOrder: 16,
			onResidual(target) {
				if (!target.moves.includes(this.effectState.move) ||
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	zestspray: {
		num: 2008,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.hasitem('oranberry') || pokemon.hasitem('sitrusberry')) {
				this.debug("BP doubled for berry");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		onModifyMove(move, pokemon){
			if (pokemon.hasitem('oranberry') || pokemon.hasitem('sitrusberry')) {
				this.debug("Stat change doubled for berry");
				move.secondaries.push({
					chance: 100,
					boosts: {
						spd: -2,
					},
				});
			}
		},
		category: "Special",
		name: "Zest Spray",
		shortDesc: "Has a 100% chance to lower the target's Sp. Def by 1 stage. If user is holding an Oran or Sitrus berry, berry is consumed and power is doubled.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spd: -1
				},
			},
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Spicy Extract", target);
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},

};
