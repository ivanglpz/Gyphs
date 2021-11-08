interface IFontWeight {
  [string: string]: number;
}

const url =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";

export const fontWeight: IFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  Bold: 700,
};

export default url;
