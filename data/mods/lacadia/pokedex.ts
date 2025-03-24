export const Pokedex: {[speciesid: string]: SpeciesData} = {
	//Lacadia pokemon
	springbun: {
		num: 2000,
		name: "Springbun",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 35, def: 40, spa: 65, spd: 50, spe: 70},
		abilities: {0: "Overgrow", H: "Cute Charm"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Snapbun"],
		eggGroups: ["Field", "Grass"],
	},
	snapbun: {
		num: 2001,
		name: "Snapbun",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 50, def: 60, spa: 85, spd: 80, spe: 55},
		abilities: {0: "Overgrow", H: "Cute Charm"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Faestalk"],
		eggGroups: ["Field", "Grass"],
	},
	faestalk: {
		num: 2002,
		name: "Faestalk",
		types: ["Grass", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 120, atk: 70, def: 80, spa: 110, spd: 110, spe: 40},
		abilities: {0: "Overgrow", 1: 'Verdant Hunger', H: "Dragon's Maw"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Field", "Grass"],
	},
	basilly: { 
		num: 2003,
		name: "Basilly",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 60, def: 40, spa: 60, spd: 40, spe: 65},
		abilities: {0: "Blaze", H: "Merciless"},
		heightm: 0.3,
		weightkg: 5,
		color: "Red",
		evos: ["Knaviper"],
		eggGroups: ["Field"],
	},
	knaviper: { 
		num: 2004,
		name: "Knaviper",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 70, def: 45, spa: 90, spd: 50, spe: 100},
		abilities: {0: "Blaze", H: "Merciless"},
		heightm: 0.3,
		weightkg: 5,
		color: "Red",
		evos: ["Verkillion"],
		eggGroups: ["Field"],
	},
	verkillion: { 
		num: 2005,
		name: "Verkillion",
		types: ["Fire", "Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 120, def: 65, spa: 100, spd: 70, spe: 110},
		abilities: {0: "Blaze", 1: 'Noble Bearing', H: "Merciless"},
		heightm: 0.3,
		weightkg: 5,
		color: "Red",
		eggGroups: ["Field"],
	},
	purrluxe: {
		num: 2006,
		name: "Purrluxe",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 55, def: 60, spa: 45, spd: 50, spe: 40},
		abilities: {0: "Torrent", H: "Stamina"},
		heightm: 0.3,
		weightkg: 5,
		color: "Blue",
		evos: ["Lyonite"],
		eggGroups: ["Field", "Water"],
	},
	lyonite: {
		num: 2007,
		name: "Lyonite",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 85, def: 80, spa: 50, spd: 65, spe: 60},
		abilities: {0: "Torrent", H: "Stamina"},
		heightm: 0.3,
		weightkg: 5,
		color: "Blue",
		evos: ["Enkidros"],
		eggGroups: ["Field", "Water"],
	},
	enkidros: {
		num: 2008,
		name: "Enkidros",
		types: ["Water", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 125, def: 100, spa: 55, spd: 95, spe: 80},
		abilities: {0: "Torrent", 1: 'Ruthless', H: "Stamina"},
		heightm: 0.3,
		weightkg: 5,
		color: "Blue",
		eggGroups: ["Field", "Water"],
	},
	//claybug1, claybug2
	chickery: {
		num: 2011,
		name: "Chickery",
		types: ["Normal", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 49, atk: 56, def: 47, spa: 36, spd: 25, spe: 40},
		abilities: {0: "Big Pecks", 1: "Infiltrator", H: "Stakeout"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Chickanery"],
		eggGroups: ["Flying"],
	},
	chickanery: {
		num: 2012,
		name: "Chickanery",
		types: ["Dark", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 65, atk: 85, def: 59, spa: 46, spd: 46, spe: 87},
		abilities: {0: "Poison Touch", 1: "Infiltrator", H: "Stakeout"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Goosassin"],
		eggGroups: ["Flying"],
	},
	goosassin: {
		num: 2013,
		name: "Goosassin",
		types: ["Dark", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 79, atk: 119, def: 74, spa: 65, spd: 60, spe: 102},
		abilities: {0: "Poison Touch", 1: "Infiltrator", H: "Stakeout"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Flying"],
	},
	decaffin: {
		num: 2014,
		name: "Decaffin",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 41, atk: 47, def: 70, spa: 76, spd: 35, spe: 60},
		abilities: {0: "Water Absorb", H: "Defeatist"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["espressurge"],
		eggGroups: ["Bug"],
	},
	espressurge: {
		num: 2015,
		name: "Espressurge",
		types: ["Grass", "Electric"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 68, atk: 76, def: 85, spa: 117, spd: 56, spe: 113},
		abilities: {0: "Water Absorb", H: "Caffeine Rush"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Bug"],
	},
	grubblo: {
		num: 2016,
		name: "Grubblo",
		types: ["Bug", "Normal"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 40, atk: 30, def: 30, spa: 20, spd: 40, spe: 30},
		abilities: {0: "Shield Dust", 1: "Prankster", H: "Soundproof"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Tentrilo"],
		eggGroups: ["Bug"],
	},
	tentrilo: {
		num: 2017,
		name: "Tentrilo",
		types: ["Bug", "Normal"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 70, atk: 45, def: 75, spa: 45, spd: 90, spe: 35},
		abilities: {0: "Shield Dust", 1: "Prankster", H: "Soundproof"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Rocadocio"],
		eggGroups: ["Bug"],
	},
	rocadocio: {
		num: 2018,
		name: "Rocadocio",
		types: ["Bug", "Normal"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 85, atk: 87, def: 54, spa: 50, spd: 64, spe: 94},
		abilities: {0: "Shield Dust", 1: "Prankster", H: "Soundproof"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Bug"],
	},
	marazcal: {
		num: 2019,
		name: "Marazcal",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 48, atk: 37, def: 37, spa: 57, spd: 43, spe: 73},
		abilities: {0: "Quick Feet", 1: "Solar Power", H: "Leaf Guard"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Iguavadon"],
		eggGroups: ["Grass"],
	},
	iguavadon: {
		num: 2020,
		name: "Iguavadon",
		types: ["Grass", "Fire"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 66, atk: 57, def: 49, spa: 116, spd: 99, spe: 106},
		abilities: {0: "Quick Feet", 1: "Solar Power", H: "Leaf Guard"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	furnawurm: {
		num: 2021,
		name: "Furnawurm",
		types: ["Ground", "Dragon"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 68, atk: 139, def: 87, spa: 54, spd: 92, spe: 60},
		abilities: {0: "Momentum", 1: "Strong Jaw", H: "Sand Rush"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	tortarmasolar: {
		num: 2022,
		name: "Tortarma-Solar",
		baseForme: "Solar",
		types: ["Fire"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 73, atk: 68, def: 111, spa: 95, spd: 85, spe: 20},
		abilities: {0: "Magma Armor", H: "Shell Armor"},
		heightm: 1.5,
		weightkg: 68,
		color: "Brown",
		eggGroups: ["Field"],
		otherFormes: ["Tortarma-Polar"],
		formeOrder: ["Tortarma-Solar", "Tortarma-Polar"],
		evos: ["Tortality"],
	},
	tortarmapolar: {
		num: 2022,
		name: "Tortarma-Polar",
		baseSpecies: "Tortarma-Solar",
		forme: "Polar",
		types: ["Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 73, atk: 68, def: 111, spa: 95, spd: 85, spe: 20},
		abilities: {0: "Ice Body", H: "Shell Armor"},
		heightm: 1.3,
		weightkg: 68,
		color: "Blue",
		eggGroups: ["Field"],
		changesFrom: "Tortarma-Solar",
		evos: ["Tortality"],
	},
	tortality: {
		num: 2023,
		name: "Tortality",
		types: ["Fire", "Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 90, atk: 75, def: 121, spa: 137, spd: 92, spe: 25},
		abilities: {0: "Polarity", H: "Shell Armor"},
		heightm: 0.3,
		weightkg: 5,
		color: "Red",
		eggGroups: ["Field"],
	},
	mochu: {
		num: 2024,
		name: "Mochu",
		types: ["Ice", "Electric"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 47, atk: 54, def: 32, spa: 68, spd: 38, spe: 86},
		abilities: {0: "Adaptability", H: "Volt Absorb"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Snochu"],
		eggGroups: ["Grass"],
	},
	snochu: {
		num: 2025,
		name: "Snochu",
		types: ["Ice", "Electric"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 64, atk: 72, def: 55, spa: 105, spd: 59, spe: 124},
		abilities: {0: "Adaptability", H: "Volt Absorb"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	lileef: {
		num: 2026,
		name: "Lileef",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23},
		abilities: {0: "Suction Cups", H: "Harvest"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Citradily"],
		eggGroups: ["Grass"],
	},
	citradily: {
		num: 2027,
		name: "Citradily",
		types: ["Grass"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43},
		abilities: {0: "Suction Cups", H: "Harvest"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	krabuto: {
		num: 2028,
		name: "Krabuto",
		types: ["Water", "Steel"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55},
		abilities: {0: "Swift Swim", H: "Sharpness"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Krabutops"],
		eggGroups: ["Grass"],
	},
	krabutops: {
		num: 2029,
		name: "Krabutops",
		types: ["Water", "Steel"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80},
		abilities: {0: "Swift Swim", H: "Sharpness"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	balite: {
		num: 2030,
		name: "Balite",
		types: ["Flying", "Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 62, atk: 43, def: 66, spa: 59, spd: 78, spe: 79},
		abilities: {0: "Ancient Guard", H: "Snow Warning"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Baleet"],
		eggGroups: ["Grass"],
	},
	baleet: {
		num: 2031,
		name: "Baleet",
		types: ["Flying", "Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 74, atk: 72, def: 90, spa: 89, spd: 87, spe: 108},
		abilities: {0: "Ancient Guard", H: "Snow Warning"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	cryocone: {
		num: 2032,
		name: "Cryocone",
		types: ["Ice", "Poison"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 68, atk: 70, def: 106, spa: 50, spd: 96, spe: 19},
		abilities: {0: "Shell Armor", 1: "Water Absorb", H: "Poison Touch"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Cryoconda"],
		eggGroups: ["Grass"],
	},
	cryoconda: {
		num: 2033,
		name: "Cryoconda",
		types: ["Ice", "Poison"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 102, atk: 106, def: 136, spa: 63, spd: 122, spe: 25},
		abilities: {0: "Shell Armor", 1: "Water Absorb", H: "Poison Touch"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	selkie: {
		num: 2041,
		name: "Selkie",
		types: ["Water", "Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 101, atk: 65, def: 85, spa: 103, spd: 138, spe: 68},
		abilities: {0: "Thick Fat", 1: "Hydration", H: "Ice Body"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	shuckler: {
      num: 2043,
		name: "Shuckler",
		types: ["Bug", "Steel"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 35, atk: 50, def: 250, spa: 10, spd: 250, spe: 5},
		abilities: {0: "Sturdy", 1: "Gluttony", H: "Contrary"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	smeltmor: {
		num: 2044,
		name: "Smeltmor",
		types: ["Fire", "Steel"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 97, atk: 101, def: 107, spa: 135, spd: 81, spe: 39},
		abilities: {0: "Meltdown", 1: "Flash Fire", H: "White Smoke"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	pyrant: {
		num: 2045,
		name: "Pyrant",
		types: ["Bug", "Fire"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 83, atk: 135, def: 76, spa: 60, spd: 76, spe: 130},
		abilities: {0: "Metallic Appetite", 1: "Hustle", H: "Truant"},
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	idagon: {
		num: 2046,
		name: "Idagon",
		types: ["Fighting", "Psychic"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 81, def: 60, spa: 24, spd: 34, spe: 23},
		abilities: {0: "Hustle", H: "Scrappy"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Libradon"],
		eggGroups: ["Monster"],
	},
	libradon: {
		num: 2047,
		name: "Libradon",
		types: ["Fighting", "Psychic"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 93, atk: 80, def: 67, spa: 99, spd: 79, spe: 32},
		abilities: {0: "Neuroforce", H: "Scrappy"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Suprion"],
		eggGroups: ["Monster"],
	},
	suprion: {
		num: 2048,
		name: "Suprion",
		types: ["Fighting", "Psychic"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 136, atk: 82, def: 97, spa: 134, spd: 116, spe: 35},
		abilities: {0: "Neuroforce", H: "Scrappy"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Monster"],
	},
	larvos: {
		num: 2049,
		name: "Larvos",
		types: ["Bug"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 35, atk: 54, def: 73, spa: 61, spd: 47, spe: 30},
		abilities: {0: "Parasitoid", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Syrinsect"],
		eggGroups: ["Bug"],
	},
	syrinsect: {
		num: 2050,
		name: "Syrinsect",
		types: ["Bug"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 55, atk: 110, def: 48, spa: 85, spd: 47, spe: 105},
		abilities: {0: "Parasitoid", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Stratoclysm"],
		eggGroups: ["Bug"],
	},
	stratoclysm: {
		num: 2051,
		name: "Stratoclysm",
		types: ["Bug", "Dragon"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 74, atk: 137, def: 68, spa: 107, spd: 68, spe: 146},
		abilities: {0: "Parasitoid", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Bug"],
	},
	possolo: {
		num: 2052,
		name: "Possolo",
		types: ["Normal"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 64, atk: 59, def: 57, spa: 34, spd: 37, spe: 20},
		abilities: {0: "Schrödinger", H: "Run Away"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Oposse"],
		eggGroups: ["Bug"],
	},
	oposse: {
		num: 2053,
		name: "Oposse",
		types: ["Normal", "Ghost"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 83, atk: 108, def: 61, spa: 58, spd: 57, spe: 46},
		abilities: {0: "Schrodinger", H: "Run Away"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Bug"],
	},
	nokoi: {
		num: 2054,
		name: "Nokoi",
		types: ["Water"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 51, atk: 60, def: 41, spa: 35, spd: 62, spe: 63},
		abilities: {0: "Swift Swim", H: "Own Tempo"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Yakoyza"],
		eggGroups: ["Water"],
	},
	yakoyzaink: {
		num: 2055,
		name: "Yakoyza-Ink",
		baseForme: "Ink",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 119, def: 78, spa: 72, spd: 85, spe: 98},
		abilities: {0: "Swift Swim", H: "Reckless"},
		heightm: 1.5,
		weightkg: 68,
		color: "White",
		eggGroups: ["Water"],
		otherFormes: ["Yakoyza-Oni", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
		formeOrder: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
	},
	yakoyzaoni: {
		num: 2055,
		name: "Yakoyza-Oni",
		baseForme: "Ink",
		types: ["Water", "Fire"],
		forme: "Oni",
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 119, def: 78, spa: 72, spd: 85, spe: 98},
		abilities: {0: "Swift Swim", H: "Reckless"},
		heightm: 1.5,
		weightkg: 68,
		color: "White",
		eggGroups: ["Water"],
		otherFormes: ["Yakoyza-Ink", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
		formeOrder: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
	},
	yakoyzaryujin: {
		num: 2055,
		name: "Yakoyza-Ryujin",
		baseForme: "Ink",
		types: ["Water", "Dragon"],
		forme: "Ryujin",
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 119, def: 78, spa: 72, spd: 85, spe: 98},
		abilities: {0: "Swift Swim", H: "Reckless"},
		heightm: 1.5,
		weightkg: 68,
		color: "White",
		eggGroups: ["Water"],
		otherFormes: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Tiger"],
		formeOrder: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
	},
	yakoyzatiger: {
		num: 2055,
		name: "Yakoyza-Tiger",
		baseForme: "Ink",
		types: ["Water", "Fighting"],
		forme: "Tiger",
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 119, def: 78, spa: 72, spd: 85, spe: 98},
		abilities: {0: "Swift Swim", H: "Reckless"},
		heightm: 1.5,
		weightkg: 68,
		color: "White",
		eggGroups: ["Water"],
		otherFormes: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Ryujin"],
		formeOrder: ["Yakoyza-Ink", "Yakoyza-Oni", "Yakoyza-Ryujin", "Yakoyza-Tiger"],
	},
	ornidrone: {
		num: 2056,
		name: "Nokoi",
		types: ["Steel", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 44, atk: 76, def: 71, spa: 41, spd: 48, spe: 60},
		abilities: {0: "Surveillance", H: "Keen Eye"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Velostrike"],
		eggGroups: ["Water"],
	},
	velostrike: {
		num: 2057,
		name: "Velostrike",
		types: ["Steel", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 51, atk: 110, def: 96, spa: 60, spd: 76, spe: 83},
		abilities: {0: "Surveillance", H: "Keen Eye"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Gunraptor"],
		eggGroups: ["Water"],
	},
	gunraptor: {
		num: 2058,
		name: "Gunraptor",
		types: ["Steel", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 63, atk: 123, def: 105, spa: 71, spd: 89, spe: 99},
		abilities: {0: "Surveillance", H: "Keen Eye"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Water"],
	},
	tirakitsu: {
		num: 2059,
		name: "Tirakitsu",
		types: ["Fairy", "Normal"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 49, atk: 60, def: 55, spa: 36, spd: 63, spe: 78},
		abilities: {0: "Sweet Veil", 1: "Ripen", H: "Fluffy"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Asterbat"],
		eggGroups: ["Water"],
	},
	asterbat: {
		num: 2060,
		name: "Asterbat",
		types: ["Fairy", "Flying"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 56, atk: 83, def: 68, spa: 66, spd: 84, spe: 123},
		abilities: {0: "Sweet Veil", 1: "Ripen", H: "Fluffy"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Water"],
	},
	murkitty: {
		num: 2061,
		name: "Murkitty",
		types: ["Dark"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 69, atk: 77, def: 36, spa: 20, spd: 36, spe: 62},
		abilities: {0: "Truant", H: "Unnerve"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Tammalkin"],
		eggGroups: ["Water"],
	},
	tammalkin: {
		num: 2061,
		name: "Tammalkin",
		types: ["Dark", "Fighting"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 78, atk: 111, def: 42, spa: 35, spd: 42, spe: 95},
		abilities: {0: "Hunter's Instincts", H: "Unnerve"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Velyger"],
		eggGroups: ["Water"],
	},
	velyger: {
		num: 2062,
		name: "Velyger",
		types: ["Dark", "Fighting"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 89, atk: 145, def: 56, spa: 59, spd: 56, spe: 115},
		abilities: {0: "Hunter's Instincts", H: "Unnerve"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Water"],
	},
};
