import {ISession} from "../../models/auth";
import {createReducer, on} from "@ngrx/store";
import {controlAuth} from "../actions/auth.action";

export interface AuthState {
  isAuth: boolean;
  token: string;
  session: ISession | null;
  role: number;
}

export const AuthInitialState: AuthState = {
  isAuth: false,
  token: '',
  session: null,
  role: 0
};

const authReducer = createReducer(
  AuthInitialState,
  on(controlAuth, (state, { auth }) => ({
    ...state,
    isAuth: auth.isAuth,
    token: auth.token,
    session: auth.session,
    role: auth.role
  }))
);

export const AuthReducer = (state: any, action: any) => authReducer(state, action);

