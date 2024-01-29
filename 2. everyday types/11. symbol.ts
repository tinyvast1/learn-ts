// bigint доступны только в >=es2015

//символы неизменяемы и уникальны

const key1: symbol = Symbol("key");
const key2 = Symbol("key");

console.log(key1 === key2); //false

// symbol могут использоваться в качестве ключей свойств объекта

const id = Symbol("id");

const testObj = {
  [id]: "245"
}

console.log(testObj[id]);

// symbol может использоваться в качестве названия метода class

const greet = Symbol("foo");
class User {
  [greet]() {
    console.log("Hello world")
  }
}

const newUser = new User();

newUser[greet](); //Hello World

//использование symbol как literal types возможно только с использованием const и в свойствах с readonly static
const constSymbolLiteral: unique symbol = Symbol("test");

let letSymbolLiteral: unique symbol = Symbol("test"); // Переменная, тип которой — "unique symbol", должна быть задана как "const"

const pass: typeof constSymbolLiteral = constSymbolLiteral; // нужно использовать typeof, чтобы ссылалться на конкретный уникальный символ

console.log(typeof constSymbolLiteral)


class C {
  static readonly StaticSymbol: unique symbol = Symbol();
}
