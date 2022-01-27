export const useShuffle = (array: string[]) =>
  array.sort(() => Math.random() - 0.5);
