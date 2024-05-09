export interface IColor {
  name: string;
  value: string;
}

export const COLORS: Readonly<IColor[]> = [
  { name: "red", value: "red" },
  { name: "blue", value: "blue" },
  { name: "green", value: "green" },
] as const;

export const SIZES = ["sm", "md", "lg"] as const;
