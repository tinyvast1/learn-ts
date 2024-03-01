export type Cat = { breed: string; yearOfBirth: number };
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
export type Point = {
  x: number;
  y: number;
}

export type User = {
  name: string;
  age: number;
};


export const createCatName = () => "fluffy";
