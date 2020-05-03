import { Action } from '@ngrx/store';

import { User } from '../../users/models/user.model';
import { UsersService } from '../services/users.service';
import { DataAction, DataErrorAction } from './data.actions';
import { DataServiceError } from '../services/data-error.service';

export const GET_USERS = '[USER] GET_USERS';
export const GET_USERS_SUCCESS = '[USER] GET_USERS_SUCCESS';
export const GET_USERS_ERROR = '[USER] GET_USERS_ERROR';

export const GET_USER = '[USER] GET_USER';
export const GET_USER_SUCCESS = '[USER] GET_USER_SUCCESS';
export const GET_USER_ERROR = '[USER] GET_USER_ERROR';

export const ADD_USER = '[USER] ADD_USER';
export const ADD_USER_ERROR = '[USER] ADD_USER_ERROR';
export const ADD_USER_SUCCESS = '[USER] ADD_USER_SUCCESS';

export abstract class UserAction implements DataAction<User> {
  readonly type: string;
  constructor(public readonly payload: User) {}
}

export abstract class UserErrorAction implements DataErrorAction<User> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<User>) {}
}



export class GetUsers implements Action {
  readonly type = GET_USERS;
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public readonly payload: User[]) {}
}

export class GetUsersError implements Action {
  readonly type = GET_USERS_ERROR;
  constructor(public readonly payload: any) {}
}



export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public readonly payload: number) {}
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public readonly payload: User) {}
}

export class GetUserError extends UserErrorAction {
  readonly type = GET_USER_ERROR;
}



export class AddUser extends UserAction {
  readonly type = ADD_USER;
}

export class AddUserSuccess extends UserAction {
  readonly type = ADD_USER_SUCCESS;
}

export class AddUserError extends UserErrorAction {
  readonly type = ADD_USER_ERROR;
}

export type AllUserActions =
    GetUsers
  | GetUsersSuccess
  | GetUsersError
  | GetUser
  | GetUserSuccess
  | GetUserError
  | AddUser
  | AddUserSuccess
  | AddUserError;
