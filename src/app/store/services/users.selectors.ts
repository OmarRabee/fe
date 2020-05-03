import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { UserState } from '../reducers/users.reducers';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getUserState = createSelector(
  getEntityState,
  (state: EntityState) => state.users
);

const getAllUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);

const getUser = createSelector(
  getUserState,
  (state: UserState) => state.user
);

const getUsersLoading = createSelector(
  getUserState,
  (state: UserState) => state.loading
);

@Injectable()
export class UserSelectors {

  constructor(private store: Store<EntityState>) {}

  Users$ = this.store.pipe(select(getAllUsers));
  User$ = this.store.pipe(select(getUser));
  UserState$ = this.store.pipe(select(getUserState));
  loading$ = this.store.pipe(select(getUsersLoading));

}
