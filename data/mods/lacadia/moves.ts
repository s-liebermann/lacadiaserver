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
		target: "normal",
		type: "Ground",
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Mighty Cleave", target);
		},
		
		contestType: "Clever",
	}
};
