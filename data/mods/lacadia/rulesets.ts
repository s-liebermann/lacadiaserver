export const Rulesets: {[k: string]: ModdedFormatData} = {
	jollymod: {
		effectType: 'ValidatorRule',
		name: 'lacadia',
		desc: "lacadia",
		onBegin() {
			this.add('rule', 'lacadia');
		},
	},
};