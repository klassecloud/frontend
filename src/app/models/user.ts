export interface User {
  id: number;
  password: string;
  userName: string;
  displayName: string;
  email: string;
  token?: string;
}
