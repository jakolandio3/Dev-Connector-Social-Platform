'use client';
//create a new store for redux

import { Tuple, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
if (typeof window !== 'undefined' && window.localStorage.token) {
	setAuthToken(localStorage.token);
}
//creating an initialstate
const initialState = {};

const store = configureStore({
	reducer: rootReducer,
	middleware: () => new Tuple(thunk),
	preloadedState: initialState,
	devTools: true,
});

export default store;

export function ReducerProvider({ children }: React.PropsWithChildren) {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return <Provider store={store}>{children}</Provider>;
}
