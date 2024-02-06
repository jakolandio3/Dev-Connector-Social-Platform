import { ActionType } from '@/actions/types';
import { UnknownAction } from 'redux';

const {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} = ActionType;

interface AuthState {
	token: string | null;
	isAuthenticated: boolean | null;
	loading: boolean;
	user: any;
}

interface UnknownActionWithPayloadToken extends UnknownAction {
	payload: { token: string };
}

const initialState: AuthState = {
	token:
		typeof window !== 'undefined' && window.localStorage
			? localStorage?.getItem('token')
			: null,
	isAuthenticated: null,
	loading: true,
	user: null,
};

export default function auth(
	state: AuthState = initialState,
	action: UnknownActionWithPayloadToken
) {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			window.localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case LOGOUT:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}
