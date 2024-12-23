export const Abilities: {[k: string]: ModdedAbilityData} = {
	apocalypticleech: {
        name: "Apocalyptic Leech",

        shortDesc: "The user heals 25% of the damage it deals with direct attacks",
        num: 2000,
	},
   onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 4, pokemon);
			}
		},
}