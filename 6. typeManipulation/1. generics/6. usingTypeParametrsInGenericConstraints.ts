// мs можем объявить параметр типа, который ограничен другим парамером типа

// в примере ниже мы говорим, что тип Key ограничивается ключами свойств/методов типа Type

function getPrperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const obj = {a: 1, b: 2, c: 3}

getPrperty(obj, "a");
getPrperty(obj, "d"); //Аргумент типа ""d"" нельзя назначить параметру типа ""a" | "b" | "c"".