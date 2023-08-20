export const PATH_HOST = "http://localhost:4000";

export interface User {
  id?: number;
  first_name: string;
  second_name: string;
  age: number;
  email: string;
  position: string;
}

export interface UserState {
  currentUser: {
    id?: number;
    first_name: string;
    second_name: string;
    age: number;
    email: string;
    position: string;
  };
  users: User[];
  loading: boolean;
  error: null | string;
}
