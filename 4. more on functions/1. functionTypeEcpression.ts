function greet(fn: (name: string) => void) { // здесь мы описываем, что эта функция как параметр принимает функцию, котрая принимает string
  fn("Hello, world");
}

function printToConsole(str: string) {
  console.log(str);
}

greet(printToConsole);

// можно записать в тип

type greetType = (name: string) => void

function great2(fn: greetType) {
  fn("Hello world");
}

great2(printToConsole);