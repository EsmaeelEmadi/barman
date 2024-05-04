type RandomNumber = (min: number, max: number) => number;

export const randomNumber: RandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
