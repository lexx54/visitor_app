export interface User {
  id?: uuid;
  username: string;
  email: string;
  password?: string;
}

export interface IAuthStore {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}
