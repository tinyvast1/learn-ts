// было бы круто если бы можно было переопределять имена свойств у типа
// так подумали разработчики ts и выкатили это в ts 4.1

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface User1 {
  name: string;
  age: number;
  isAdmin: boolean;
}

type GettersUser = Getters<User1>;

// type GettersUser = {
//   getName: () => string;
//   getAge: () => number;
//   getIsAdmin: () => boolean;
// }

// в примере выше мы использовали шаблоны и на основе прошлых имен создали новые
// и переопределили тип

// можно отфильтровывать ключи, с помошью never

type RemoveKindType<T> = {
  [Property in keyof T as Exclude<Property, "kind">]: T[Property];
};
type RemoveNumber<T> = {
  [Property in keyof T as T[Property] extends number
    ? never
    : Property]: T[Property];
};

// мы можем использовать условия

interface Circle {
  kind: "circle";
  radius: number;
}

type TestKind = RemoveKindType<Circle>;
// type Test = {
//   radius: number;
// }

// убрали kind из типа

type TestNumber = RemoveNumber<Circle>;

// type TestNumber = {
//   kind: "circle";
// }

// убрали все свойства у которых был тип number

// можно сопосталять произвольные объединения не только с number | string | symbol, но и объединения любого типа

type EventsConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (item: E) => void;
};

interface Trinagle {
  kind: "trinagle";
  length: number;
}

type EventsShape = EventsConfig<Circle | Trinagle>;

// type EventsShape = {
//   circle: (item: Circle) => void;
//   trinagle: (item: Trinagle) => void;
// }

// https://www.youtube.com/watch?v=lut2_mGAavA

// ещё один пример с использованием условий

type ExtractPii<Type> = {
  [T in keyof Type]: Type[T] extends { pii: any } ? true : false;
};

type DBFriends = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDRPDeletion = ExtractPii<DBFriends>;

// у меня нет слов