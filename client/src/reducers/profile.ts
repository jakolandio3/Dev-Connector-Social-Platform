import { ActionType } from '@/actions/types';
import { UnknownAction } from 'redux';
const {
	GET_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	UPDATE_PROFILE,
	GET_PROFILES,
	GET_REPOS,
} = ActionType;

interface ProfileState {
	profile: null | {};
	profiles: [] | {}[];
	repos: [] | {}[];
	loading: boolean;
	error: {};
}

const initialSate: ProfileState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	error: {},
};

export default function profile(state = initialSate, action: UnknownAction) {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
		case UPDATE_PROFILE:
		case GET_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			};
		case GET_PROFILES:
			return {
				...state,
				profiles: payload,
				loading: false,
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case CLEAR_PROFILE:
			return { ...state, profile: null, repos: [], loading: false };
		case GET_REPOS:
			return {
				...state,
				repos: payload,
				loading: false,
			};
	}
}
