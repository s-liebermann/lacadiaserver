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
		abilities: {0: "Overgrow", H: "Dragon's Maw"},
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
		baseStats: {hp: 70, atk: 100, def: 65, spa: 120, spd: 70, spe: 110},
		abilities: {0: "Blaze", H: "Merciless"},
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
		abilities: {0: "Torrent", H: "Stamina"},
		heightm: 0.3,
		weightkg: 5,
		color: "Blue",
		eggGroups: ["Field", "Water"],
	},
	grubblo: {
		num: 2009,
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
		num: 2010,
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
		num: 2011,
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
	// goose1: {
	// 	// num: 2012,
	// 	// name: "Grubblo",
	// 	// types: ["Bug", "Normal"],
	// 	// genderRatio: {M: 0.5, F: 0.50},
	// 	// baseStats: {hp: 40, atk: 30, def: 30, spa: 20, spd: 40, spe: 30},
	// 	// abilities: {0: "Shield Dust", H: "Prankster"},
	// 	// heightm: 0.3,
	// 	// weightkg: 5,
	// 	// color: "White",
	// 	// evos: ["Tentrilo"],
	// 	// eggGroups: ["Bug"],
	// },
	// goose2: {
	// 	// num: 2013,
	// 	// name: "Grubblo",
	// 	// types: ["Bug", "Normal"],
	// 	// genderRatio: {M: 0.5, F: 0.50},
	// 	// baseStats: {hp: 40, atk: 30, def: 30, spa: 20, spd: 40, spe: 30},
	// 	// abilities: {0: "Shield Dust", H: "Prankster"},
	// 	// heightm: 0.3,
	// 	// weightkg: 5,
	// 	// color: "White",
	// 	// evos: ["Tentrilo"],
	// 	// eggGroups: ["Bug"],
	// },
	// goose3: {
	// 	// num: 2014,
	// 	// name: "Grubblo",
	// 	// types: ["Bug", "Normal"],
	// 	// genderRatio: {M: 0.5, F: 0.50},
	// 	// baseStats: {hp: 40, atk: 30, def: 30, spa: 20, spd: 40, spe: 30},
	// 	// abilities: {0: "Shield Dust", H: "Prankster"},
	// 	// heightm: 0.3,
	// 	// weightkg: 5,
	// 	// color: "White",
	// 	// evos: ["Tentrilo"],
	// 	// eggGroups: ["Bug"],
	// },
	marazcal: {
		num: 2015,
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
		num: 2016,
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
	// tremorworm: {
	// 	// num: 2017,
	// 	// name: "Iguavadon",
	// 	// types: ["Grass", "Fire"],
	// 	// genderRatio: {M: 0.5, F: 0.50},
	// 	// baseStats: {hp: 66, atk: 57, def: 49, spa: 116, spd: 99, spe: 106},
	// 	// abilities: {0: "Quick Feet", 1: "Solar Power", H: "Leaf Guard"},
	// 	// heightm: 0.3,
	// 	// weightkg: 5,
	// 	// color: "Green",
	// 	// eggGroups: ["Grass"],
	// },
	tortarmasolar: {
		num: 2018,
		name: "Tortarma-Solar",
		baseForme: "Solar",
		types: ["Fire"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 73, atk: 68, def: 111, spa: 95, spd: 85, spe: 38},
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
		num: 2018,
		name: "Tortarma-Polar",
		baseSpecies: "Tortarma-Solar",
		forme: "Polar",
		types: ["Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 73, atk: 68, def: 111, spa: 95, spd: 85, spe: 38},
		abilities: {0: "Ice Body", H: "Shell Armor"},
		heightm: 1.3,
		weightkg: 68,
		color: "Blue",
		eggGroups: ["Field"],
		changesFrom: "Tortarma-Solar",
		evos: ["Tortality"],
	},
	tortality: {
		num: 2019,
		name: "Tortality",
		types: ["Fire", "Ice"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 90, atk: 75, def: 121, spa: 137, spd: 92, spe: 45},
		abilities: {0: "Quick Feet", H: "Shell Armor"},
		heightm: 0.3,
		weightkg: 5,
		color: "Red",
		eggGroups: ["Field"],
	},
	larvos: {
		num: 2034,
		name: "Larvos",
		types: ["Bug"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 35, atk: 54, def: 73, spa: 61, spd: 47, spe: 30},
		abilities: {0: "Apocalyptic Leech", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Injiron"],
		eggGroups: ["Bug"],
	},
	injiron: {
		num: 2035,
		name: "Injiron",
		types: ["Bug"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 55, atk: 110, def: 48, spa: 85, spd: 47, spe: 105},
		abilities: {0: "Apocalyptic Leech", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		evos: ["Stratoclysm"],
		eggGroups: ["Bug"],
	},
	stratoclysm: {
		num: 2036,
		name: "Stratoclysm",
		types: ["Bug", "Dragon"],
		genderRatio: {M: 0.5, F: 0.50},
		baseStats: {hp: 74, atk: 137, def: 68, spa: 107, spd: 68, spe: 146},
		abilities: {0: "Apocalyptic Leech", H: "Tinted Lens"},
		heightm: 0.3,
		weightkg: 5,
		color: "White",
		eggGroups: ["Bug"],
	},
	idagon: {
		num: 2037,
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
		num: 2038,
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
		num: 2039,
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
};
