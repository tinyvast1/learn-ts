// предположим мы написали большой тип или интерфейс
// и мы захотели из этого интерфейса получить типы определённых свойств по ключу
// и мы это можем сделать

type User = {
  name: string;
  age: number;
  blacklist?: number[];
  isAdmin: boolean;
};

type blacklist = User["blacklist"]; // type blacklist = number[] | undefined

// при этом в индексе может быть всё что угодно

type I1 = User["name" | "age"]; // type I1 = string | number
type I2 = User[keyof User]; // type I2 = string | number | boolean | number[] | undefined
type NameOrAdmin = "name" | "isAdmin";
type I3 = User[NameOrAdmin]; // type I3 = string | boolean

// мы даже можем увидеть ошибку если попытаемя использовать несуществующие свойство

type I4 = User["blaclist"]; //Свойство "blaclist" не существует в типе "User".

// вот ещё классный пример с использованием typeof и индексированием массива

const Friends = [
  { name: "Danil", age: 9 },
  { name: "Vasia", age: 37 },
  { name: "Stepan", age: 23 },
];

type Friend = (typeof Friends)[number];
// type Friend = {
//   name: string;
//   age: number;
// }

type NameFriend = (typeof Friends)[number]["name"]; //type NameFriend = string
//or
type NameFriend2 = Friend["name"];


// в индексации можно использовать только типы

const age = "age";

type AgeFriend = Friend[age]; 
// Тип "age" невозможно использовать как тип индекса.ts(2538)
// "age" относится к значению, но здесь используется как тип. Возможно, вы имели в виду "typeof age"?

type AgeFriend2 = Friend[typeof age]; 