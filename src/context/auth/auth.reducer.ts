import { AuthState, AuthAction, AuthReducerActionTypeEnum } from './auth.types';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthReducerActionTypeEnum.LOGIN:
      return { user: action.payload };
    case AuthReducerActionTypeEnum.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};
