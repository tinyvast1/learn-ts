// напишем функцию, которая будет возвращать первый элемент массива

function firtsArray(arr: any[]): any {
  return arr[1];
}

// мы написали, что функция принимает массив с элементами типа any, и возвращает any
// можно использовать Generic чтобы сделать это более правильно

function firtsArrayGeneric<Type>(arr: Type[]): Type | undefined {
  return arr[1];
}

firtsArrayGeneric<number>([1, 2, 3, 4, 5]); //мы можем явно указать тип generic
//но в таких простых примерах ts сам понимает какой тип generic, и его можно не указывать

firtsArrayGeneric(["one", "two", "free", "fourth", "five"]); //здесь ts понимает, что generic = string

firtsArrayGeneric([]); //firtsArrayGeneric(arr: never[]): undefined

//можно передавать несколько generic-ов
//например напишем упрощенную версию map

function map<Input, Output>(
  arr: Input[],
  fn: (item: Input) => Output
): Output[] {
  return arr.map(fn);
}

map<number, string>([1, 2, 3, 4, 5], (item) => `${item}`); // map(arr: number[], fn: (item: number) => string): string[]
map(["1", "2", "3", "4", "5"], (item) => parseInt(item)); // map(arr: string[], fn: (item: string) => number): number[]

// мы можем использовать ограничения generic указав какие свойства или методы должны быть у него

function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  return a.length > b.length ? a : b;
}

longest([1, 2, 3], [1, 3, 4, 5, 6]);
longest("onetwofree", "onetwofreeforth");
// здесь всё хорошо мы не получаем ошибку, потому что у строки и у массива есть свойство length

longest(123, 54235); //Аргумент типа "number" нельзя назначить параметру типа "{ length: number; }".
//но когда мы пытаемся передать число мы получаем ошибку, потому что у него нет length

// И кстати хорошо что мы указали, что у Generic есть свойство length
// так как если бы мы не указали мы бы получили ошибку при попытке использовать свойство length

function longest2<Type>(a: Type, b: Type): Type {
  return a.length > b.length ? a : b; //Свойство "length" не существует в типе "Type".
}

// не знаю зачем пример, который описан ниже, напсан в документации
// в принципе и так понятно что мы получим ошибку так как
// { length: minimum } - это просто ограничение типа, а сам Type может содержать в себе больше свойств

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum }; //Тип "{ length: number; }" не может быть назначен для типа "Type".
    // "{ length: number; }" может быть назначен ограничению типа "Type", но можно создать экземпляр "Type" с другим подтипом ограничения "{ length: number; }".
  }
}

const arr = minimumLength([1, 2, 3], 6);

function merge<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

merge([1, 2, 3], ["hello"]);
//без указания типа generic ts подумает что элменты массивов должны быть одного типа,
// но если мы хотим вызвать функцию с массивами у которых элменты имеют разные типы мы можем это указать в generic

merge<number | string>([1, 2, 3], ["hello"]);

//Рекомендации по написанию хороших универсальных функций

//1. По возможности используйте сам параметр типа, а не ограничиваете его

function firstElement1<Type>(arr: Type) {
  return arr[0];
}
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

const a = firstElement1("112341234");
const b = firstElement2("112341234");

// в первом случае мы можем вызвать функцию передав в нёё строку, и мы получим первый элемент
// во втором нет, потому что мы ограничили genegic до массива

//2. По возможности использовать меньше параметров типа

function filter1<Type>(arr: Type[], fn: (n: Type) => boolean): Type[] {
  return arr.filter(fn);
}

function filter2<Type, Fn extends (arg: Type) => boolean>( //не нужно здесь писать Generic для функции, 
  arr: Type[],                                             //потому что мы будем этот тип использовать только один раз
  fn: Fn
): Type[] {
  return arr.filter(fn);
}

// практически тоже самое что и второе 
//3. Не используйте параметр типа если он используется только один раз

function greet<Type>(str: Type) { // не нужно указывать Generic эта функцию всё-равно будет принимать только строку
  console.log(`Привет ${str}`);
}

//лучше сделать так
function greet2(str: string) { 
  console.log(`Привет ${str}`);
}

