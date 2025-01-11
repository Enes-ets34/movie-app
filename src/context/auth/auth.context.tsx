import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import {
  AuthState,
  AuthAction,
  User,
  AuthReducerActionTypeEnum,
} from './auth.types';
import { authReducer } from './auth.reducer';

const initialState: AuthState = { user: null };

const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: React.Dispatch<AuthAction>;
    }
  | undefined
>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const login = (dispatch: React.Dispatch<AuthAction>, user: User) => {
  dispatch({ type: AuthReducerActionTypeEnum.LOGIN, payload: user });
};

export const logout = (dispatch: React.Dispatch<AuthAction>) => {
  dispatch({ type: AuthReducerActionTypeEnum.LOGOUT });
};
