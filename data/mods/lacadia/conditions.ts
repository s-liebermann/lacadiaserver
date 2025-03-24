export const Conditions: {[k: string]: ConditionData} = {
	healreplacementhalf: {
		// this is a slot condition
		name: 'healreplacementhalf',
		onStart(target, source, sourceEffect) {
			this.effectState.sourceEffect = sourceEffect;
			this.add('-activate', source, 'healreplacementhalf');
		},
		onSwitchInPriority: 1,
		onSwitchIn(target) {
			if (!target.fainted) {
				target.heal(target.maxhp / 4);
				this.add('-heal', target, target.getHealth, '[from] move: ' + this.effectState.sourceEffect);
				target.side.removeSlotCondition(target, 'healreplacementhalf');
			}
		},
	},
};
