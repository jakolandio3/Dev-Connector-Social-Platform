import { ActionType } from '@/actions/types';

import { UnknownAction } from 'redux';

export interface alerts {
	id: number;
	msg: string;
	alertType: string;
}

const initialState: alerts[] = [];

export default function alert(state = initialState, action: UnknownAction) {
	const { type, payload } = action;
	switch (type) {
		case ActionType.SET_ALERT:
			return [...state, payload];
		case ActionType.REMOVE_ALERT:
			return state.filter((alert) => alert.id !== payload);
		default:
			return state;
	}
}
