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
		target: "normal",
		type: "Ground",
		
		contestType: "Clever",
	},
	venomspear: {
		num: 2002,
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
};
