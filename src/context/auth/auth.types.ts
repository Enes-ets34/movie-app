export interface User {
  id: string;
  password: string;
}

export interface AuthState {
  user: User | null;
}

export enum AuthReducerActionTypeEnum {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export type AuthAction = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };
