import * as reducers from './reducers';
import {ActionReducerMap} from "@ngrx/store";
export interface AppState {
  auth: reducers.AuthState;
}


export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.AuthReducer,
};
