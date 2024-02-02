import { combineReducers } from 'redux';
import alert from './alert';
//root reducer will be here
export const rootReducer = combineReducers({ alert });
export type RootState = ReturnType<typeof rootReducer>;
