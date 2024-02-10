import axios from 'axios';
import { ActionType } from '@/actions/types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@/reducers';
import { UnknownAction } from 'redux';
import { setAlert } from './alert';
import setAuthToken from '@/utils/setAuthToken';

const {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_PROFILE,
} = ActionType;
export const DATABASE = `http://localhost:5000`;
export interface UserFields {
	name: string;
	email: string;
	password: string;
}

//Load Uswer
export const loadUser =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		if (typeof window !== 'undefined' && window.localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get(`/api/auth`);
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

//register user
export const register =
	({
		name,
		email,
		password,
	}: UserFields): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({ name, email, password });
		try {
			const res = await axios.post(`/api/users`, body, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			dispatch(loadUser());
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({ type: REGISTER_FAIL });
		}
	};

//Login user
export const login =
	(
		email: string,
		password: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({ email, password });
		try {
			const res = await axios.post(`/api/auth`, body, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			dispatch(loadUser());
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({ type: LOGIN_FAIL });
		}
	};
//LOGOUT
export const logout =
	(): ThunkAction<void, RootState, unknown, UnknownAction> => (dispatch) => {
		dispatch({ type: CLEAR_PROFILE });
		dispatch({ type: LOGOUT });
	};
