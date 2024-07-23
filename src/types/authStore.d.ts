/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id?: uuid;
  username: string;
  email: string;
  password?: string;
}

export interface IVisitor {
  name: string;
  description: string;
  phone: string;
  email: string;
  id?: any;
}

export interface IAuthStore {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}
