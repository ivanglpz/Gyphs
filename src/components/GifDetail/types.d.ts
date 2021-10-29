import { Dispatch, SetStateAction } from "react";
import { IData } from "../../hooks/types";
import { IDetailGif } from "../../pages/Search";

export interface IGifDetails {
  props: IData;
  setDetailGif: Dispatch<SetStateAction<IDetailGif>>;
}
