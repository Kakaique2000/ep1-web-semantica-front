import { createAction, props } from "@ngrx/store";
import { Login } from "../state/app-state";

export const SET_LOGIN = createAction('[LOGIN] SET LOGIN', props<{ payload: Login }>());

export const DESLOGAR = createAction('[LOGIN] DESLOGAR');
