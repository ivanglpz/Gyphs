export interface IHETag {
  oldTag: string;
  newTag: string;
  event: FormEvent<HTMLFormElement>;
}

export interface ICreateTags {
  setTags: Dispatch<SetStateAction<string[]>>;
  setMountTags: Dispatch<SetStateAction<boolean>>;
  data: string[];
  handleTags: (tag: string) => void;
}
