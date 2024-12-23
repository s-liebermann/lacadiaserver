export const Abilities: {[k: string]: ModdedAbilityData} = {
	apocalypticleech: {
        name: "Apocalyptic Leech",
        shortDesc: "The user heals 25% of the damage it deals with direct attacks",
        num: 2000,
	},
    onSourceDamagingHit(damage, target, source, move) {   
        this.heal(damage, source, 'drain');
    },
}