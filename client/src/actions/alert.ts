import { alerts } from '@/reducers/alert';
import { ActionType } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@/reducers';
import { UnknownAction } from 'redux';
import { v4 as uuid } from 'uuid';
const { SET_ALERT, REMOVE_ALERT } = ActionType;

export const setAlert =
	(
		msg: string,
		alertType: string,
		timeout: number = 5000
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		const id = uuid();

		dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });

		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
	};
