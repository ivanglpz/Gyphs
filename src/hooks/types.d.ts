
export interface IData {
  id: string;
  title: string;
  trending_datetime: string;
  images: {
    fixed_height: {
      url: string;
      width: string | number;
      height: string | number;
    };
  };
  url: string;
  user?:{
    avatar_url?:string
    display_name?:string
    username?:string
    profile_url?:string
    description?:string
  }
}

export interface IParams {
  method: string;
  search?: string;
}

export type IStateData = {
  data: IData[];
  result: string;
  mount: boolean;
}
