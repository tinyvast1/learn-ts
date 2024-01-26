// bigint доступны только в >=es2020

let foo: bigint = BigInt(100);
let bar: bigint = 100n;

// хотя number и bigint являются числами нельзя производить математические операции использую их вместе

declare let value1: bigint;
declare let value2: number;

console.log(value1 + value2); //Оператор "+" невозможно применить к типам "bigint" и "number".
console.log(value1 + BigInt(value2));

function whatType(value: number | bigint) {
  if (typeof value === "bigint") {
    console.log("Это число имеет тип bigint");
  } else {
    console.log("Это число имеет тип number");
  }
}
