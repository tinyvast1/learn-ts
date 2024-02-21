// при описании типа мы импользуем Generic
// но что если я скажу, что можно задать новый generic, как переменную на момент описания типа

type FlattenInner<Type> = Type extends Array<infer Item> ? Item : Type;

// вот так мы в задали тип Item в который поместили тип, который приходит в массиве

type GetReturnType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num2 = GetReturnType<() => number>; // type Num2 = number

type Booleans = GetReturnType<() => boolean[]>; // type Booleans = boolean[]

// при передачи функции с перегрузками, ts будет брать сигнатуру реализации

declare function stringOrNum(): string;
declare function stringOrNum(): number;
declare function stringOrNum(): string | number;

type foo = GetReturnType<typeof stringOrNum> // type foo = string | number
