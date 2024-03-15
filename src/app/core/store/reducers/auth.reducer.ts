import {ISession} from "../../models/auth";
import {createReducer, on} from "@ngrx/store";
import {controlAuth} from "../actions/auth.action";

export interface AuthState {
  isAuth: boolean;
  token: string;
  session: ISession | null;
}

export const AuthInitialState: AuthState = {
  isAuth: false,
  token: '',
  session: null
};

const authReducer = createReducer(
  AuthInitialState,
  on(controlAuth, (state, { auth }) => ({
    ...state,
    isAuth: auth.isAuth,
    token: auth.token,
    session: auth.session
  }))
);

export const AuthReducer = (state: any, action: any) => authReducer(state, action);

