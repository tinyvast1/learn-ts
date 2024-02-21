// прелставим ситуацию что у нас есть тип
// и мы хотим сделать точно такой же тип только переопределить его

// Сопоставленные типы основаны на синтаксисе индексных подписей и используются
// для объявления типов свойств, которые были не объявлены ранее

type OptionalType<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeaturesOption = OptionalType<Features>;
// type FeaturesOption = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }

// переопределили все типы в boolean

// мы можем переопределять не только типы, но и readonly, ?

type createMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
  // установил '-' перед readonly и это означает что мы уберем readonly
  // если ничего не поставить то там по дефолту будет ставиться +
  // можно принудительно его туда поставить
};

type LockedAccount = {
  readonly id: number;
  readonly name: string;
};

type MutableAccout = createMutable<LockedAccount>;

// type MutableAccout = {
//   id: number;
//   name: string;
// }

// теперь свойства изменяемы

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type OptionalUser = {
  id: number;
  name?: string;
  email?: string;
};

type User = Concrete<OptionalUser>

// type User = {
//   id: number;
//   name: string;
//   email: string;
// }

// теперь все свойства обязательны