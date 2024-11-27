import axios, { HttpStatusCode } from 'axios';
import { setAlert } from './alert';
import { ActionType } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@/reducers';
import { UnknownAction } from 'redux';
import { DATABASE } from './auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface ProfileFormData {
	company?: string;
	website?: string;
	location?: string;
	status: string;
	skills: string;
	githubusername?: string;
	bio?: string;
	twitter?: string;
	facebook?: string;
	linkedin?: string;
	youtube?: string;
	instagram?: string;
}

const {
	GET_PROFILE,
	PROFILE_ERROR,
	UPDATE_PROFILE,
	CLEAR_PROFILE,
	DELETE_ACCOUNT,
	GET_PROFILES,
	GET_REPOS,
	LOADING_DATA,
	LOADED_DATA,
} = ActionType;

//get current users profile
export const getCurrentProfile =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			dispatch({ type: LOADING_DATA });
			const res = await axios.get(`${DATABASE}/profile/me`);
			dispatch({ type: GET_PROFILE, payload: res.data });
			dispatch({ type: LOADED_DATA });
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//Get All Profiles
export const getProfiles =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		dispatch({ type: CLEAR_PROFILE });
		try {
			dispatch({ type: LOADING_DATA });
			const res = await axios.get(`${DATABASE}/profile`);
			dispatch({ type: GET_PROFILES, payload: res.data });
			dispatch({ type: LOADED_DATA });
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//Get Profile by ID
export const getProfileById =
	(userId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		dispatch({ type: CLEAR_PROFILE });
		try {
			dispatch({ type: LOADING_DATA });
			const res = await axios.get(`${DATABASE}/profile/user/${userId}`);
			dispatch({ type: GET_PROFILE, payload: res.data });
			dispatch({ type: LOADED_DATA });
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
//Get GitHubRepos
export const getGithubRepos =
	(username: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.get(`${DATABASE}/profile/github/${username}`);
			dispatch({ type: GET_REPOS, payload: res.data });
		} catch (error: any) {
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//create or update profile
export const createProfile =
	(
		formData: ProfileFormData,
		redirectFunction: AppRouterInstance,
		edit: boolean = false
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const data = JSON.stringify(formData);
			const res = await axios.post(`${DATABASE}/profile`, data, config);

			dispatch({ type: GET_PROFILE, payload: res.data });
			dispatch(
				setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
			);
			if (!edit) {
				return redirectFunction.push(`/dashboard`);
			}
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//Add Experience
export const addExperience =
	(
		formData: any,
		redirectFunction: AppRouterInstance
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const data = JSON.stringify(formData);
			const res = await axios.put(
				`${DATABASE}/profile/experience`,
				data,
				config
			);

			dispatch({ type: UPDATE_PROFILE, payload: res.data });
			dispatch(setAlert('Experience Added', 'success'));

			return redirectFunction.push(`/dashboard`);
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
//Add Edu
export const addEducation =
	(
		formData: any,
		redirectFunction: AppRouterInstance
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const data = JSON.stringify(formData);
			const res = await axios.put(
				`${DATABASE}/profile/education`,
				data,
				config
			);

			dispatch({ type: UPDATE_PROFILE, payload: res.data });
			dispatch(setAlert('Education Added', 'success'));

			return redirectFunction.push(`/dashboard`);
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//Delete experience
export const deleteExperience =
	(id: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.delete(`${DATABASE}/profile/experience/${id}`);
			dispatch({ type: UPDATE_PROFILE, payload: res.data });
			dispatch(setAlert('Experience Removed', 'success'));
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
//Delete Education
export const deleteEducation =
	(id: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.delete(`${DATABASE}/profile/education/${id}`);
			dispatch({ type: UPDATE_PROFILE, payload: res.data });
			dispatch(setAlert('Education Removed', 'success'));
		} catch (error: any) {
			const errorArr = error?.response?.data?.errors;
			if (errorArr) {
				errorArr.forEach((error: any) =>
					dispatch(setAlert(error.msg, 'danger'))
				);
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};

//DELETE ACCOUNT & PROFILE
export const deleteAccount =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		if (
			window.confirm(
				'Are you sure you wish to Delete your Account? This cannot be undone!'
			)
		) {
			try {
				await axios.delete(`${DATABASE}/profile`);
				dispatch({ type: CLEAR_PROFILE });
				dispatch({ type: DELETE_ACCOUNT });
				dispatch(
					setAlert('Your account has been successfully deleted', 'success')
				);
			} catch (error: any) {
				const errorArr = error?.response?.data?.errors;
				if (errorArr) {
					errorArr.forEach((error: any) =>
						dispatch(setAlert(error.msg, 'danger'))
					);
				}
				dispatch({
					type: PROFILE_ERROR,
					payload: {
						msg: error?.response?.statusText,
						status: error?.response?.status,
					},
				});
			}
		}
	};
