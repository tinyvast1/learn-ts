// в js основной способ для групировки и передачи инфы являеются объекты

// как мы уже видели мы можем типизировать их 3-мя способами

//1.
function greet(person: { name: string; age: number }) {}

//2.
interface Person {
  name: string;
  age: number;
}

function greet2(person: Person) {}

//3.

type PersonType = {
  name: string;
  age: number;
};

function greet3(person: PersonType) {}


// шпаргалка -> https://www.typescriptlang.org/cheatsheets