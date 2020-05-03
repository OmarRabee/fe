import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
import * as DataActions from '../actions/data.actions';
import * as UserActions from '../actions/users.actions';




const toAction = DataActions.toAction();
type UserAction = UserActions.UserAction;
type GetUsersAction = UserActions.GetUsers;

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userDataService: UsersService
  ) {}

  @Effect()
  getUsers$: Observable<Action> = this.actions$
    .pipe(
      ofType(UserActions.GET_USERS),
      switchMap(() =>
        toAction(
          this.userDataService.getUsers(),
          UserActions.GetUsersSuccess,
          UserActions.GetUsersError
        )
      )
    );

  @Effect()
  getUser$: Observable<Action> = this.actions$
    .pipe(
      ofType(UserActions.GET_USER),
      switchMap((action: UserActions.GetUser) => {
        return toAction(
          this.userDataService.getUser(action.payload),
          UserActions.GetUserSuccess,
          UserActions.GetUserError
        )
      }
      )
    );

  @Effect()
  addUser$: Observable<Action> = this.actions$
    .pipe(
      ofType(UserActions.ADD_USER),
      concatMap((action: UserAction) =>
        toAction(
          this.userDataService.addUser(action.payload),
          UserActions.AddUserSuccess,
          UserActions.AddUserError
        )
      )
    );

}
