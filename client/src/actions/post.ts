import axios from 'axios';
import { ActionType } from '@/actions/types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@/reducers';
import { UnknownAction } from 'redux';
import { setAlert } from './alert';
import { DATABASE } from './auth';
const {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
	LOADED_DATA,
	LOADING_DATA,
} = ActionType;

// Get posts
export const getPosts =
	(): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.get(`${DATABASE}/posts`);

			dispatch({
				type: GET_POSTS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Get post
export const getPost =
	(postId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		dispatch({ type: LOADING_DATA });
		try {
			const res = await axios.get(`${DATABASE}/posts/${postId}`);

			dispatch({
				type: GET_POST,
				payload: res.data,
			});
			dispatch({ type: LOADED_DATA });
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Add like
export const addLike =
	(postId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.put(`${DATABASE}/posts/like/${postId}`);

			dispatch({
				type: UPDATE_LIKES,
				payload: { id: postId, likes: res.data },
			});
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Add like
export const removeLike =
	(postId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.put(`${DATABASE}/posts/unlike/${postId}`);

			dispatch({
				type: UPDATE_LIKES,
				payload: { id: postId, likes: res.data },
			});
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Delete Post
export const deletePost =
	(postId: string): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.delete(`${DATABASE}/posts/${postId}`);

			dispatch({
				type: DELETE_POST,
				payload: postId,
			});

			dispatch(setAlert('Post Removed', 'success'));
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Add Post
export const addPost =
	(formData: any): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(`${DATABASE}/posts`, formData, config);

			dispatch({
				type: ADD_POST,
				payload: res.data,
			});

			dispatch(setAlert('Post Created', 'success'));
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Add Comment
export const addComment =
	(
		formData: any,
		postId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(
				`${DATABASE}/posts/comment/${postId}`,
				formData,
				config
			);

			dispatch({
				type: ADD_COMMENT,
				payload: res.data,
			});

			dispatch(setAlert('Comment Added', 'success'));
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
// Delete Comment
export const deleteComment =
	(
		commentId: string,
		postId: string
	): ThunkAction<void, RootState, unknown, UnknownAction> =>
	async (dispatch) => {
		try {
			const res = await axios.delete(
				`${DATABASE}/posts/comment/${postId}/${commentId}`
			);

			dispatch({
				type: REMOVE_COMMENT,
				payload: commentId,
			});

			dispatch(setAlert('Comment Deleted', 'success'));
		} catch (error: any) {
			dispatch({
				type: POST_ERROR,
				payload: {
					msg: error?.response?.statusText,
					status: error?.response?.status,
				},
			});
		}
	};
