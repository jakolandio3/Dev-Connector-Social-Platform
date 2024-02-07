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

const { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } = ActionType;

//get current users profile
export const getCurrentProfile =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.get(`${DATABASE}/api/profile/me`);
			dispatch({ type: GET_PROFILE, payload: res.data });
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
			const res = await axios.post(`${DATABASE}/api/profile`, data, config);

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
				`${DATABASE}/api/profile/experience`,
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
				`${DATABASE}/api/profile/education`,
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
