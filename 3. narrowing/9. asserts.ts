//в node.js есть функция утверждения, которая выдаёт ошибку если значение не верно, например

// assert(someValue === 42) // если false то будет ошбка AssertionError

// в ts 3.7 появилась конструкция которая позволяет написать assert

class AssertionError extends Error {
  constructor(msg?: string) {
    super(msg);
    this.name = "AssertionError"
  }
}

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg); 
  }
}

function yell(str: any) {
  assert(typeof str === "string");

  return str.toLowerCase();
}

yell("jkkBGIGhiJGHigIgbgJK");

//с помощью asserts мы можем написать фунуцию, которая будет проверять определённый тип, а не условие

function assertIsString(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new AssertionError("This not string");
  }
}

function yell2(str: any) {
  assertIsString(str);

  return str.toLowerCase();
}

//сложный assert

function assertIsDefined<T>(n: T): asserts n is NonNullable<T>  {
  if (n === null || n === undefined) {
    throw new AssertionError("Is not Defined");
  }
}

assertIsDefined("поле");

try {
  assertIsDefined(null);
} catch (error) {
  console.log(error.message);
}

