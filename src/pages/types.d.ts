export interface IUser {
  authentication?: boolean;
  user?: {
    id: string | number;
    username: string;
  };
  type?: string;
  token?: string;
}
