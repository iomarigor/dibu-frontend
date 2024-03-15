import {createAction, props} from "@ngrx/store";
import {AuthState} from "../reducers";

export const controlAuth = createAction('[auth] auth', props<{ auth: AuthState }>());
