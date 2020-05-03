import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';
import * as userReducers from './users.reducers';

export type Action = actions.UserAction;

export interface EntityState {
  users: userReducers.UserState;
  user: userReducers.UserState;
}

export const reducers: ActionReducerMap<EntityState> = {
  users: userReducers.reducer,
  user: userReducers.reducer,
};
