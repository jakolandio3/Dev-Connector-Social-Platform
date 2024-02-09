import { ActionType } from '@/actions/types';
import { UnknownAction } from 'redux';
const {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
} = ActionType;

interface comment {
	avatar: string;
	date: string;
	name: string;
	text: string;
	user: string;
	_id: string;
}

interface like {
	user: string;
	id: string;
}

export interface postState {
	avatar: string;
	comments: comment[];
	date: string;
	likes: like[];
	name: string;
	text: string;
	user: string;
	__v: number;
	_id: string;
}

interface postsArrState {
	posts: postState[];
	post: postState | null;
	loading: boolean;
	error: { [key: string]: string };
}

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
};

export default function post(
	state: postsArrState = initialState,
	action: UnknownAction
) {
	const { type, payload } = action;

	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case GET_POST:
			return {
				...state,
				post: payload,
				loading: false,
			};
		case ADD_POST:
			return {
				...state,
				posts: [payload, ...state.posts],
				loading: false,
			};
		case POST_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case UPDATE_LIKES:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === (payload as { id: string; likes: like[] }).id
						? {
								...post,
								likes: (payload as { id: string; likes: like[] }).likes,
						  }
						: post
				),
				loading: false,
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== payload),
				loading: false,
			};
		case ADD_COMMENT:
			return {
				...state,
				post: { ...state.post, comments: payload },
				loading: false,
			};
		case REMOVE_COMMENT:
			return {
				...state,
				post: {
					...state.post,
					comments: state.post?.comments.filter(
						(comment) => comment._id !== payload
					),

					loading: false,
				},
				loading: false,
			};

		default:
			return {
				...state,
			};
	}
}
