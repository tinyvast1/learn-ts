// типы параметров
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()} !!`);
}
greet("Danil");

//тип возрата функции
function getFavariteNumber(): number {
  return 11;
}
getFavariteNumber();

//если функция возвращает Promise
async function getFavariteNumberAsync(): Promise<number> {
  return 11;
}

//анонимные функции
const names = ["Alice", "Bob", "Eve"];

names.forEach((str) => {
  console.log(str.toUpperCase());
});