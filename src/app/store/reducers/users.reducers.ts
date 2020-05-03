import { User } from "../../users/models/user.model";
import * as UserActions from "../actions/users.actions";

export interface UserState {
  users: User[];
  user: User;
  loading: boolean;
  error: boolean;
}

export const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: false,
};

export function reducer(
  state = initialState,
  action: UserActions.AllUserActions
): UserState {
  switch (action.type) {
    // GET_USERs
    case UserActions.GET_USERS: {
      return { ...state, loading: true };
    }

    case UserActions.GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case UserActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }

    // GET_USER
    case UserActions.GET_USER: {
      return { ...state, loading: true };
    }

    case UserActions.GET_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case UserActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    // ADD_USER
    case UserActions.ADD_USER: {
      return { ...state, loading: true };
    }

    case UserActions.ADD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, { ...action.payload }],
      };
    }

    case UserActions.ADD_USER_ERROR: {
      return { ...state, loading: false };
    }
  }
}
