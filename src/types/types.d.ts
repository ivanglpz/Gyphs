export interface IUser {
  authentication?: boolean;
  user?: {
    id: string | number;
    username: string;
  };
  type?: string;
  token?: string;
}

export interface IFormGif {
  mount: boolean;
  props: any;
}

export interface IAbout {
  id: number;
  title: string;
  text: string;
  url: string;
}
