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
}

export interface IAuthStore {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}
