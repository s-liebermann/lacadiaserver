export const Moves: {[k: string]: ModdedMoveData} = {
	beanbarrage: {
		num: 2000,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Bean Barrage",
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
};
