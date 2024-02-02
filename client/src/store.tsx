'use client';
//create a new store for redux
import { applyMiddleware } from 'redux';
import { Tuple, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux';

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
	return <Provider store={store}>{children}</Provider>;
}
