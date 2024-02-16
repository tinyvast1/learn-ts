// когда мы работаем с объектами некоторые свойства, могут быть не обязательными

interface Workplace {
  organization: string;
  experiense: number;
}

interface User {
  name: string;
  age: number;
  email?: string;
  phone?: string; //необязательное свойство
  readonly isAdmin: boolean; // свойство доступное только для чтения
  readonly blackList?: number[];
  readonly workplace?: Workplace;
}

const createPerson = (user: User): User => {
  const { email, isAdmin, blackList, workplace } = user;
  //...

  //обязательно нужно проверять необязательные свойства
  console.log(email.toLowerCase()); //Возможно, "user.email" имеет значение undefined.
  email?.toLowerCase(); // ошибки нет
  if (email) {
    email.toLowerCase(); // ошибки нет
  }

  const { email: newEamil = "example@mail.ru" } = user; // можем задать занчение по дефолту
  newEamil.toLowerCase();

  // когда мы указываем что свойство readonly, это не значит что мы не можем взаимодействоать
  // мы не можем перезаписывать эти свойство
  // просто представим что мы создали константу внутри объекта

  isAdmin = false; //Не удается задать значение для "isAdmin", так как это константа
  blackList?.push(1); // а вот так можно сделать

  workplace = {
    //Не удается задать значение для "workplace", так как это константа.
    organization: "title",
    experiense: 2,
  };

  workplace.experiense = 10;

  return user;
};

createPerson({ name: "Danil", age: 22, isAdmin: false });
createPerson({
  name: "Petya",
  age: 20,
  email: "petya@mail.ru",
  isAdmin: false,
});
createPerson({ name: "Ksysha", age: 18, phone: "+79999999999", isAdmin: true });

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Stepan",
  age: 10,
};

let readeblePerson: ReadonlyPerson = writablePerson;

console.log(readeblePerson.age);
//в документации напсано, что свойства readonly могут изменяться с помощью псевдонимов типов
// в доке написано, что этот варинат не выдаст ошибку
// не знаю почему было бы логично что выдаст
// ну по краней мере у меня выдаёт
readeblePerson.age++; // Не удается задать значение для "age", так как это свойство, доступное только для чтения.
console.log(readeblePerson.age);

// readonly можно удалить используя модификаторы отображения //это будет дальше в доке ->  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers

//Подписи индексов

// иногда мы незнаем всме название свойств объекта но нам известны их типы
// в этом случаем мы можем использовать сигнатуру вызова для описания типа

interface dish {
  [index: string]: {
    //здесь мы указали что у нас будут какие-то поля у которык key: string, а value: объект с свойствами
    count: number;
    do: string[];
  };
}

// разрешено несколько типов для подписи индекса [index: string | number | symbol]

const borsсh: dish = {
  beet: {
    do: ["toClean", "cut"],
    count: 2,
  },
  //...
};

// можно поддерживать несколько типов индексаторов, но нужно быть аккуратными с string | number
// потому что когда мы пишем ключ 100 он в конечном итоге превращается в строку "100"

// и ещё когда мы здаём тип сигнатуре вызова
// все свойства которые описаны должны совпадать с этим типом, например

interface Test {
  [x: string]: string;
  name: string;
  age: number; //Свойство "age" типа "number" не может быть назначено типу индекса "string" "string".
}

// это всё потому что ключ age превращается в строку => "age"

// но мы можем использовать объединение типов и всё будет хорошо

interface Test2 {
  [x: string]: string | number;
  name: string;
  age: number;
}

// также мы можем добавить перед сигнатурой подписи индексов readonly

interface OnlyReadObject {
  name: string; //добавленные свойства не должны соовтетсвовать readonly
  readonly [x: string]: string | number;
  testField: string;
}

const testObject: OnlyReadObject = {
  name: "Danil",
  age: 10,
  testField: "test",
};

console.log((testObject.name = "Vasia"));
console.log((testObject.testField = "1"));
console.log((testObject.age = 5)); //Сигнатура индекса в типе "OnlyReadObject" разрешает только чтение.
