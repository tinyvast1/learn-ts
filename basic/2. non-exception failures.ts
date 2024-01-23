// Спецификиция гласит, что попытка вызвать что-то, что не может быть вызвано должно вернуть ошибку.
// Но если мы обращемся к свойству объекта, которого нет мы получим undefined
// TS нас предупредждает об этом и выводит ошибку

//JS
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined

//TS
const user = {
  name: "Daniel",
  age: 26,
};
 
user.location; // Свойство "location" не существует в типе "{ name: string; age: number; }".ts(2339)

//TS показывает нам опечатки

const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase(); 

// Обе эти строчки вернут ошибку
// Свойство "toLocaleLowercase" не существует в типе ""Hello World!"". Вы имели в виду "toLocaleLowerCase"?ts(2551)
// lib.es5.d.ts(505, 5): Здесь объявлен "toLocaleLowerCase".


function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  // Оператор "<" невозможно применить к типам "() => number" и "number".
}

// логические ошибки

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Это сравнение кажется непреднамеренным, поскольку типы ""a"" и ""b"" не перекрываются.
  // Oops, unreachable
}
