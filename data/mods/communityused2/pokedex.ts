export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	lytlegai: {
		num: -1000,
		name: "Lytlegai",
		types: ["Steel", "Fairy"],
		baseStats: { hp: 60, atk: 115, def: 75, spa: 60, spd: 85, spe: 85 },
		abilities: { 0: "Just A Little Guy" },
		weightkg: 30,
	},
	calderlauga: {
		num: -1001,
		name: "Calderlauga",
		types: ["Fire", "Bug"],
		baseStats: { hp: 100, atk: 45, def: 95, spa: 80, spd: 115, spe: 50 },
		abilities: { 0: "Compound Eyes", 1: "Water Absorb", H: "Geothermal" },
		weightkg: 150,
	},
	furumo: {
		num: -1002,
		name: "Furumo",
		types: ["Ice", "Fairy"],
		baseStats: { hp: 85, atk: 105, def: 60, spa: 109, spd: 60, spe: 111 },
		abilities: { 0: "Water Veil", 1: "Pixilate", H: "Refrigerate" },
		weightkg: 36,
	},
	snipythic: {
		num: -1003,
		name: "Snipythic",
		types: ["Ghost", "Flying"],
		baseStats: { hp: 100, atk: 160, def: 90, spa: 95, spd: 90, spe: 180 },
		abilities: { 0: "Phase In" },
		weightkg: 40,
	},
	hulvine: {
		num: -1004,
		name: "Hulvine",
		types: ["Ghost", "Fire"],
		baseStats: { hp: 105, atk: 60, def: 80, spa: 105, spd: 65, spe: 30 },
		abilities: { 0: "Flame Body", 1: "Insomnia", H: "Grass Pelt" },
		weightkg: 12.2,
	},
	ballaboar: {
		num: -1005,
		name: "Ballaboar",
		types: ["Normal", "Fairy"],
		baseStats: { hp: 105, atk: 50, def: 80, spa: 115, spd: 80, spe: 69 },
		abilities: { 0: "Immunity", 1: "Thick Fat", H: "Vital Spirit" },
		weightkg: 124.8,
	},
	naglrir: {
		num: -1006,
		name: "Naglrir",
		types: ["Water", "Dark"],
		baseStats: { hp: 142, atk: 89, def: 94, spa: 45, spd: 94, spe: 36 },
		abilities: { 0: "Prankster", 1: "Perish Body", H: "Tough Claws" },
		weightkg: 300,
		otherFormes: ["Naglrir-Mega"],
	},
	naglrirmega: {
		num: -1006,
		name: "Naglrir-Mega",
		baseSpecies: "Naglrir",
		forme: "Mega",
		types: ["Water", "Dark"],
		baseStats: { hp: 142, atk: 124, def: 74, spa: 85, spd: 74, spe: 101 },
		abilities: { 0: "Ragnarok" },
		weightkg: 500,
		requiredItem: "Naglrite",
	},
	pacrabsite: {
		num: -1007,
		name: "Pacrabsite",
		types: ["Psychic", "Water"],
		baseStats: { hp: 90, atk: 40, def: 90, spa: 90, spd: 110, spe: 40 },
		abilities: { 0: "Mind Warp", H: "Shell Armor" },
		weightkg: 12.5,
	},
	muerekrot: {
		num: -1008,
		name: "Muerekrot",
		types: ["Ghost", "Normal"],
		baseStats: { hp: 79, atk: 105, def: 87, spa: 71, spd: 87, spe: 96 },
		abilities: { 0: "Pressure", 1: "Perish Body", H: "Dancer" },
		weightkg: 87.1,
	},
	lumigald: {
		num: -1009,
		name: "Lumigald",
		types: ["Ice", "Rock"],
		baseStats: { hp: 80, atk: 110, def: 85, spa: 60, spd: 60, spe: 115 },
		abilities: { 0: "Mountaineer" },
		weightkg: 74,
	},
	hafgvindr: {
		num: -1010,
		name: "Hafgvindr",
		types: ["Water"],
		baseStats: { hp: 165, atk: 108, def: 85, spa: 60, spd: 79, spe: 38 },
		abilities: { 0: "Water Veil", 1: "Marvel Scale", H: "Wind Eater" },
		weightkg: 999.9,
	},
	balirachnid: {
		num: -1011,
		name: "Balirachnid",
		types: ["Bug", "Steel"],
		baseStats: { hp: 85, atk: 70, def: 94, spa: 120, spd: 66, spe: 45 },
		abilities: { 0: "Sniper", H: "Merciless" },
		weightkg: 36,
	},
	kuongakrabbi: {
		num: -1012,
		name: "Kuongakrabbi",
		types: ["Water", "Rock"],
		baseStats: { hp: 70, atk: 135, def: 115, spa: 75, spd: 70, spe: 42 },
		abilities: { 0: "Tough Claws", 1: "Sheer Force", H: "Sturdy" },
		weightkg: 70,
	},
	wyrmdelse: {
		num: -1013,
		name: "Wyrmdelse",
		types: ["Dragon", "Poison"],
		baseStats: { hp: 80, atk: 115, def: 100, spa: 95, spd: 75, spe: 85 },
		abilities: { 0: "Ouroboros", H: "Run Away"},
		weightkg: 829,
	},
	drakkrab: {
		num: -1014,
		name: "Drakkrab",
		types: ["Rock", "Fighting"],
		baseStats: { hp: 55, atk: 109, def: 132, spa: 34, spd: 91, spe: 84 },
		abilities: { 0: "Patience", 1: "Mimicry", H: "Defiant" },
		weightkg: 20,
	},
	skdaver: {
		num: -1015,
		name: "Skdaver",
		types: ["Electric", "Ghost"],
		baseStats: { hp: 70, atk: 40, def: 50, spa: 99, spd: 85, spe: 91 },
		abilities: { 0: "Volt Absorb", 1: "Fur Coat", H: "Battery" },
		weightkg: 4.8,
	},
	solfreyr: {
		num: -1016,
		name: "Solfreyr",
		types: ["Grass", "Psychic"],
		baseStats: { hp: 110, atk: 40, def: 65, spa: 130, spd: 80, spe: 40 },
		abilities: { 0: "Solar Power", 1: "Flash Fire", H: "Chlorophyll" },
		weightkg: 63.5,
		prevo: "Sunflora",
	},
	noirpeck: {
		num: -1017,
		name: "Noirpeck",
		types: ["Flying", "Psychic"],
		baseStats: { hp: 60, atk: 95, def: 75, spa: 41, spd: 116, spe: 101 },
		abilities: { 0: "Tinted Lens", H: "Poison Point" },
		weightkg: 27,
	},
	miauskog: {
		num: -1018,
		name: "Miauskog",
		types: ["Fairy", "Fire"],
		baseStats: { hp: 110, atk: 48, def: 104, spa: 91, spd: 115, spe: 32 },
		abilities: { 0: "Illuminate", H: "Flame Body" },
		weightkg: 8.1,
	},
	beartunnd: {
		num: -1019,
		name: "Beartunnd",
		types: ["Ice"],
		baseStats: { hp: 125, atk: 135, def: 102, spa: 46, spd: 92, spe: 50 },
		abilities: { 0: "Snow Cloak", 1: "Overconfidence", H: "Ice Body" },
		weightkg: 300,
		prevo: "Beartic",
	},
	fawntifulmega: {
		num: -1020,
		name: "Fawntiful-Mega",
		baseSpecies: "Fawntiful",
		forme: "Mega",
		types: ["Fairy", "Flying"],
		baseStats: { hp: 86, atk: 129, def: 88, spa: 84, spd: 110, spe: 125 },
		abilities: { 0: "Long Reach" },
		weightkg: 59.7,
		requiredItem: "Fawntifite",
	},
	azumarillnodean: {
		num: -1021,
		name: "Azumarill-Nodean",
		types: ["Water", "Fire"],
		baseStats: { hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 60 },
		abilities: { 0: "Thick Fat", 1: "Sauna Power", H: "Neutralizing Gas" },
		weightkg: 28.5,
	},
	alcespen: {
		num: -1022,
		name: "Alcespen",
		types: ["Normal", "Grass"],
		baseStats: { hp: 100, atk: 122, def: 94, spa: 60, spd: 104, spe: 50 },
		abilities: { 0: "Intimidate", 1: "Leaf Guard", H: "Grassy Surge" },
		weightkg: 575,
	},
	neightmare: {
		num: -1023,
		name: "Neightmare",
		types: ["Ground", "Ghost"],
		baseStats: { hp: 100, atk: 90, def: 90, spa: 55, spd: 130, spe: 50 },
		abilities: { 0: "Cursed Body" },
		weightkg: 999,
	},
	pinnsten: {
		num: -1024,
		name: "Pinnsten",
		types: ["rock", "ice"],
		baseStats: { hp: 91, atk: 100, def: 97, spa: 60, spd: 93, spe: 79 },
		abilities: { 0: "Speed Boost", H: "Technician" },
		weightkg: 24,
	},
	raccatoskr: {
		num: -1025,
		name: "Raccatoskr",
		types: ["Fairy", "Dragon"],
		baseStats: { hp: 56, atk: 56, def: 137, spa: 95, spd: 127, spe: 56 },
		abilities: { 0: "Run Away", 1: "Technician", H: "Wandering Spirit" },
		weightkg: 4.4,
	},
	alcremienodean: {
		num: -1026,
		name: "Alcremie-Nodean",
		types: ["Fairy", "Poison"],
		baseStats: { hp: 75, atk: 40, def: 95, spa: 110, spd: 111, spe: 64 },
		abilities: { 0: "Liquid Ooze", H: "Regenerator" },
		weightkg: 0.6,
		prevo: "Milcery",
	},
	charcold: {
		num: -1027,
		name: "Charcold",
		types: ["Water", "Fire"],
		baseStats: { hp: 85, atk: 105, def: 100, spa: 50, spd: 115, spe: 55 },
		abilities: { 0: "Thick Fat", 1: "Thermal Exchange", H: "Flame Body" },
		weightkg: 54.4311,
	},
	thermovult: {
		num: -1028,
		name: "Thermovult",
		types: ["Electric", "Fire"],
		baseStats: { hp: 91, atk: 108, def: 103, spa: 66, spd: 111, spe: 55 },
		abilities: { 0: "Thick Fat", 1: "Static", H: "Generator" },
		prevo: "Sparkkit",
		weightkg: 15.7,
	},
	fawntiful: {
		num: -1020,
		name: "Fawntiful",
		types: ["Fairy", "Flying"],
		baseStats: { hp: 86, atk: 119, def: 63, spa: 59, spd: 90, spe: 105 },
		abilities: { 0: "Dazzling", 1: "Natural Cure", H: "Envious" },
		weightkg: 32.8,
		prevo: "Ugling",
		otherFormes: ["Fawntiful-Mega"],
	},
	vepsno: {
		num: -1029,
		name: "Vepsno",
		types: ["Ground", "Ice"],
		baseStats: { hp: 97, atk: 93, def: 83, spa: 97, spd: 103, spe: 62 },
		abilities: { 0: "Frost Cloak", 1: "Heatproof", H: "Slush Rush" },
		weightkg: 23.1,
		prevo: "Snugbug",
	},
	vintriol: {
		num: -1030,
		name: "Vintriol",
		types: ["Poison", "Bug"],
		baseStats: { hp: 112, atk: 128, def: 50, spa: 148, spd: 40, spe: 64 },
		abilities: { 0: "Swarm  ", 1: "Shield Dust", H: "Flash Fire" },
		weightkg: 242.5,
		prevo: "Vintree",
	},
	polipid: {
		num: -1031,
		name: "Polipid",
		types: ["Psychic", "Bug"],
		baseStats: { hp: 70, atk: 40, def: 90, spa: 90, spd: 75, spe: 128 },
		abilities: { 0: "Thick Fat", 1: "Hydration", H: "Poison Heal" },
		weightkg: 0.3,
		prevo: "Copepond",
		otherFormes: ["Polipid-Mega"],
	},
	molusket: {
		num: -1032,
		name: "Molusket",
		types: ["Steel", "Fighting"],
		baseStats: { hp: 70, atk: 75, def: 90, spa: 130, spd: 50, spe: 80 },
		abilities: { 0: "Shell Armor", 1: "Pressure", H: "Mold Breaker" },
		weightkg: 80,
		prevo: "Shrimpow",
	},
	swilein: {
		num: -1033,
		name: "Swilein",
		types: ["Ground", "Ice"],
		baseStats: { hp: 110, atk: 100, def: 75, spa: 90, spd: 115, spe: 35 },
		abilities: { 0: "Snow Warning", 1: "Sand Stream", H: "Thick Fat" },
		prevo: "Gullet",
		weightkg: 270,
	},
	strigpyre: {
		num: -1034,
		name: "Strigpyre",
		types: ["Fire", "Water"],
		baseStats: { hp: 91, atk: 105, def: 78, spa: 70, spd: 70, spe: 101 },
		abilities: { 0: "Blazing Glory", H: "Long Reach" },
		weightkg: 56,
		prevo: "Chickle",
	},
	freelpen: {
		num: -1035,
		name: "Freelpen",
		types: ["Grass", "Flying"],
		baseStats: { hp: 90, atk: 125, def: 90, spa: 60, spd: 70, spe: 103 },
		abilities: { 0: "Early Bird", 1: "Grassy Surge", H: "Dream Runner" },
		weightkg: 25,
		prevo: "Amareem",
	},
	arbjorn: {
		num: -1036,
		name: "Arbjorn",
		types: ["Grass", "Ground"],
		baseStats: { hp: 100, atk: 115, def: 100, spa: 80, spd: 80, spe: 60 },
		abilities: { 0: "Overgrow", H: "Thick Fat" },
		prevo: "Puerbear",
		weightkg: 290,
	},
	neifhemming: {
		num: -1037,
		name: "Neifhemming",
		types: ["Water", "Ice"],
		baseStats: { hp: 80, atk: 65, def: 65, spa: 110, spd: 110, spe: 105 },
		abilities: { 0: "Torrent", H: "Sturdy" },
		weightkg: 103.8,
	},
	lindelidae: {
		num: -1038,
		name: "Lindelidae",
		types: ["Bug", "Dragon"],
		baseStats: { hp: 80, atk: 120, def: 105, spa: 80, spd: 85, spe: 130 },
		abilities: { 0: "Strong Jaw", 1: "Compound Eyes", H: "Marvel Scale" },
		weightkg: 95,
		prevo: "Dragylis",
	},
	hurstyrhund: {
		num: -1039,
		name: "Hurstyrhund ",
		types: ["Fire", "Dark"],
		baseStats: { hp: 114, atk: 126, def: 90, spa: 90, spd: 56, spe: 59 },
		abilities: { 0: "Blaze", H: "Supreme Overlord" },
		weightkg: 166,
	},
	bicunnin: {
		num: -1040,
		name: "Bicunnin",
		types: ["Flying", "Dark"],
		baseStats: { hp: 94, atk: 97, def: 75, spa: 82, spd: 75, spe: 112 },
		abilities: { 0: "Pickpocket", 1: "Intimidate", H: "Opportunist" },
		weightkg: 61.8,
		prevo: "Dissecrow",
	},
	bjorniorite: {
		num: -1041,
		name: "Bjorniorite",
		types: ["Rock", "Grass"],
		baseStats: { hp: 100, atk: 70, def: 70, spa: 120, spd: 100, spe: 30 },
		abilities: { 0: "Sturdy", 1: "Brittle Crystals", H: "Rough Skin" },
		weightkg: 580,
		otherFormes: ["Bjorniorite-Mega"],
		prevo: "Bjorgnite",
	},
	bjornioritemega: {
		num: -1041,
		name: "Bjorniorite-Mega",
		baseSpecies: "Bjorniorite",
		forme: "Mega",
		types: ["Rock", "Fairy"],
		baseStats: { hp: 100, atk: 100, def: 110, spa: 140, spd: 120, spe: 20 },
		abilities: { 0: "Pixilate" },
		weightkg: 850,
		requiredItem: "Bjornioritite",
	},
	pthormign: {
		num: -1042,
		name: "Pthormign",
		types: ["Fighting", "Electric"],
		baseStats: { hp: 95, atk: 110, def: 89, spa: 60, spd: 74, spe: 97 },
		abilities: { 0: "Steadfast", 1: "Hustle", H: "Reckless" },
		prevo: "Healogi",
		weightkg: 40,
	},
	gravalley: {
		num: -1043,
		name: "Gravalley",
		types: ["Grass", "Poison"],
		baseStats: { hp: 80, atk: 70, def: 60, spa: 115, spd: 125, spe: 70 },
		abilities: { 0: "Natural Cure", 1: "Corrosion", H: "Rooted" },
		weightkg: 52.2,
		prevo: "Toxivalla",
	},
	dracolition: {
		num: -1044,
		name: "Dracolition",
		types: ["Fighting", "Steel"],
		baseStats: { hp: 102, atk: 128, def: 90, spa: 60, spd: 85, spe: 40 },
		abilities: { 0: "Wrecking Ball", 1: "Intimidate", H: "Dragon's Maw" },
		prevo: "Destructagon",
		weightkg: 2,
	},
	fryce: {
		num: -1045,
		name: "Fryce",
		types: ["Water", "Fire"],
		baseStats: { hp: 45, atk: 55, def: 50, spa: 25, spd: 80, spe: 60 },
		abilities: { 0: "Thick Fat", 1: "Dry Skin", H: "Flame Body" },
		weightkg: 30,
	},
	puerbear: {
		num: -1046,
		name: "Puerbear",
		types: ["Grass"],
		baseStats: { hp: 75, atk: 90, def: 70, spa: 55, spd: 65, spe: 50 },
		abilities: { 0: "Overgrow", H: "Honey Gather" },
		prevo: "Cubzu",
		evoLevel: 36,
		evos: ["Arbjorn"],
		weightkg: 51,
	},
	cubzu: {
		num: -1047,
		name: "Cubzu",
		types: ["Grass"],
		baseStats: { hp: 55, atk: 60, def: 60, spa: 45, spd: 50, spe: 40 },
		abilities: { 0: "Overgrow", H: "Honey Gather" },
		evoLevel: 16,
		evos: ["Puerbear"],
		weightkg: 9,
	},
	sparkkit: {
		num: -1048,
		name: "Sparkkit",
		types: ["Electric"],
		baseStats: { hp: 54, atk: 65, def: 62, spa: 37, spd: 53, spe: 61 },
		abilities: { 0: "Fur Coat", 1: "Static", H: "Battery" },
		evoLevel: 22,
		evos: ["Thermovult"],
		weightkg: 2.2,
	},
	ugling: {
		num: -1049,
		name: "Ugling",
		types: ["Fairy"],
		baseStats: { hp: 56, atk: 50, def: 49, spa: 25, spd: 20, spe: 70 },
		abilities: { 0: "Run Away", 1: "Rattled", H: "Cute Charm" },
		weightkg: 5.6,
		evoType: "levelFriendship",
		evos: ["Fawntiful"],
	},
	dragylis: {
		num: -1050,
		name: "Dragylis",
		types: ["Bug", "Dragon"],
		baseStats: { hp: 80, atk: 65, def: 125, spa: 25, spd: 95, spe: 30 },
		abilities: { 0: "Wonder Skin", 1: "Shed Skin", H: "Marvel Scale" },
		weightkg: 105,
		evoLevel: 57,
		evos: ["Lindelidae"],
	},
	gryrm: {
		num: -1051,
		name: "Gryrm",
		types: ["Bug", "Dragon"],
		baseStats: { hp: 70, atk: 65, def: 55, spa: 25, spd: 35, spe: 30 },
		abilities: { 0: "Strong Jaw", 1: "Shield Dust", H: "Run Away" },
		weightkg: 100,
		evoLevel: 20,
		evos: ["Dragylis"],
	},
	snugbug: {
		num: -1052,
		name: "Snugbug",
		types: ["Ground", "Ice"],
		baseStats: { hp: 43, atk: 47, def: 33, spa: 57, spd: 54, spe: 22 },
		abilities: { 0: "Immunity", 1: "Fluffy", H: "Truant" },
		weightkg: 2.2,
		evoLevel: 21,
		evos: ["Vepsno"],
	},
	bjorgnite: {
		num: -1053,
		name: "Bjorgnite",
		types: ["Rock", "Grass"],
		baseStats: { hp: 80, atk: 95, def: 90, spa: 30, spd: 85, spe: 40 },
		abilities: { 0: "Sturdy", 1: "Rocky Payload", H: "Rough Skin" },
		weightkg: 185,
		evoType: "trade",
		evos: ["Bjorniorite"],
	},
	bjorgneiss: {
		num: -1054,
		name: "Bjorgneiss",
		types: ["Rock"],
		baseStats: { hp: 35, atk: 55, def: 20, spa: 45, spd: 50, spe: 80 },
		abilities: { 0: "Innards Out", 1: "Illuminate", H: "Rough Skin" },
		weightkg: 65,
		evoLevel: 36,
		evos: ["Bjorgnite"],
	},
	healogi: {
		num: -1055,
		name: "Healogi",
		types: ["Fighting", "Fire"],
		baseStats: { hp: 65, atk: 75, def: 60, spa: 45, spd: 55, spe: 70 },
		abilities: { 0: "Steadfast", 1: "Hustle", H: "Reckless" },
		prevo: "Grousy",
		evoLevel: 65,
		evos: ["Pthormign"],
		weightkg: 35,
	},
	grousy: {
		num: -1056,
		name: "Grousy",
		types: ["Fighting"],
		baseStats: { hp: 60, atk: 70, def: 55, spa: 40, spd: 45, spe: 65 },
		abilities: { 0: "Steadfast", 1: "Hustle", H: "Reckless" },
		evoLevel: 6,
		evos: ["Healogi"],
		weightkg: 30,
	},
	wilticease: {
		num: -1057,
		name: "Wilticease",
		types: ["Grass", "Ghost"],
		baseStats: { hp: 35, atk: 40, def: 25, spa: 65, spd: 70, spe: 45 },
		abilities: { 0: "Natural Cure", 1: "Cursed Body", H: "Rattled" },
		weightkg: 0.1,
		evoLevel: 24,
		evos: ["Toxivalla"],
	},
	toxivalla: {
		num: -1058,
		name: "Toxivalla",
		types: ["Grass", "Poison"],
		baseStats: { hp: 60, atk: 65, def: 35, spa: 90, spd: 95, spe: 55 },
		abilities: { 0: "Natural Cure", 1: "Corrosion", H: "Rooted" },
		weightkg: 15.9,
		evoLevel: 37,
		evos: ["Gravalley"],
	},
	copepond: {
		num: -1059,
		name: "Copepond",
		types: ["Bug"],
		baseStats: { hp: 30, atk: 15, def: 40, spa: 35, spd: 40, spe: 65 },
		abilities: { 0: "Water Absorb", 1: "Hydration", H: "Swift Swim" },
		evos: ["Polipid"],
		evoLevel: 10,
		weightkg: 0.2,
	},
	crovert: {
		num: -1060,
		name: "Crovert",
		types: ["Flying"],
		baseStats: { hp: 30, atk: 45, def: 30, spa: 25, spd: 45, spe: 65 },
		abilities: { 0: "Pickpocket", 1: "Forewarn", H: "Prankster" },
		weightkg: 4.7,
		evoLevel: 18,
		evos: ["Dissecrow"],
	},
	dissecrow: {
		num: -1061,
		name: "Dissecrow",
		types: ["Flying", "Dark"],
		baseStats: { hp: 55, atk: 70, def: 47, spa: 53, spd: 73, spe: 77 },
		abilities: { 0: "Pickpocket", 1: "Forewarn", H: "Opportunist" },
		weightkg: 33.2,
		prevo: "Crovert",
		evoLevel: 37,
		evos: ["Bicunnin"],
	},
	shrimpow: {
		num: -1062,
		name: "Shrimpow",
		types: ["Steel", "Fighting"],
		baseStats: { hp: 60, atk: 60, def: 70, spa: 95, spd: 30, spe: 65 },
		abilities: { 0: "Shell Armor", 1: "Pressure", H: "Mold Breaker" },
		weightkg: 5,
		evoLevel: 39,
		evos: ["Molusket"],
	},
	destructagon: {
		num: -1063,
		name: "Destructagon",
		types: ["Fighting", "Steel"],
		baseStats: { hp: 90, atk: 100, def: 80, spa: 50, spd: 75, spe: 30 },
		abilities: { 0: "Heavy Metal", 1: "Intimidate", H: "Dragon's Maw" },
		prevo: "Demopprentice",
		evoLevel: 42,
		evos: ["Dracolition"],
		weightkg: 1100,
	},
	demopprentice: {
		num: -1064,
		name: "Demopprentice",
		types: ["Fighting", "Steel"],
		baseStats: { hp: 60, atk: 80, def: 50, spa: 25, spd: 30, spe: 20 },
		abilities: { 0: "Light Metal", 1: "Hustle", H: "Dragon's Maw" },
		evoLevel: 32,
		evos: ["Destructagon"],
		weightkg: 600,
	},
	gullet: {
		num: -1065,
		name: "Gullet",
		types: ["Ground", "Ice"],
		baseStats: { hp: 70, atk: 30, def: 60, spa: 30, spd: 90, spe: 50 },
		abilities: { 0: "Snow Warning", 1: "Sand Stream", H: "Thick Fat" },
		evoLevel: 28,
		evos: ["Swilein"],
		weightkg: 60,
	},
	vintree: {
		num: -1066,
		name: "Vintree",
		types: ["Poison", "Bug"],
		baseStats: { hp: 57, atk: 61, def: 32, spa: 81, spd: 22, spe: 36 },
		abilities: { 0: "Swarm", 1: "Shield Dust", H: "Flash Fire" },
		weightkg: 0.9,
		evoLevel: 43,
		evos: ["Vintriol"],
	},
	chickle: {
		num: -1067,
		name: "Chickle",
		types: ["Fire"],
		baseStats: { hp: 68, atk: 78, def: 54, spa: 40, spd: 46, spe: 71 },
		abilities: { 0: "Hustle", H: "Long Reach" },
		weightkg: 12,
		evoLevel: 24,
		evos: ["Strigpyre"],
	},
	amareem: {
		num: -1068,
		name: "Amareem",
		types: ["Grass", "Flying"],
		baseStats: { hp: 60, atk: 70, def: 50, spa: 60, spd: 50, spe: 85 },
		abilities: { 0: "Early Bird", H: "Dream Runner" },
		weightkg: 1.2,
		evoType: "useItem",
		evoItem: "Leaf Stone",
		evos: ["Freelpen"],
	},
	polipidmega: {
		num: -1031,
		name: "Polipid-Mega",
		baseSpecies: "Polipid",
		forme: "Mega",
		types: ["Psychic", "Ghost"],
		baseStats: { hp: 70, atk: 99, def: 140, spa: 120, spd: 102, spe: 62 },
		abilities: { 0: "Analytic" },
		weightkg: 60.5,
		requiredItem: "Polipidite",
	}, 
	beartic: {
		inherit: true,
		evos: ["Beartunnd"],
		evoType: "useItem",
		evoItem: "Ice Stone",
	},
	cubchoo: {
		inherit: true,
	},
	milcery: {
		inherit: true,
		evos: ["Alcremie-Nodean"],
	},
	sunkern: {
		inherit: true,
	},
	sunflora: {
		inherit: true,
		evos: ["Solfreyr"],
		evoType: "trade",
	},
};
