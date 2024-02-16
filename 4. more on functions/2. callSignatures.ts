// в js можно писать дополнения к вызову функции

type functionWithAdiitional = {
  description: string, // свойство которое должно быть объявлено у функции до её вызова
  //здесь можно ещё написать свойства
  (num: number): boolean //нужно обратить внимание что немного другой синтаксис
}

function logTestFunction(fn: functionWithAdiitional) {
  console.log(`${fn.description} foo ${fn(4)}`);
}

function compareNum(num: number) {
  return num < 5
}

logTestFunction(compareNum) 
// Аргумент типа "(num: number) => boolean" нельзя назначить параметру типа "functionWithAdiitional".
// Свойство "description" отсутствует в типе "(num: number) => boolean" и является обязательным в типе "functionWithAdiitional".


// чтобы не было ошибки нужно написать так

compareNum.description = "какое-то опсание"
logTestFunction(compareNum)