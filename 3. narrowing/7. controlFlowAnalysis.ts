// когда ts сужает типы, он делает это учитываю доступность кода, например

function padLeft(padding: string | number, str: string) {
  // здесь padding string | number

  if (typeof padding === "number") {
    return " ".repeat(padding) + str; // (parameter) padding: number
  }
  // здесь ts понимает, что если padding был равен числу то код уже выполнился
  // и вернул какое-то значение поэтому здесь мы будем работать только со строками

  return padding + str; //  (parameter) padding: string
}

// этот подход основаный на достижимости называется анализ потока управления | control flow analysis

// при анализе поток может разделяться и потом оюъеденяться и в редакторе кода, при наведении мы можем это увидеть

function testFunction(test: string | boolean | number) {
  let x = test;

  x = Math.random() < 0.5;

  console.log(x); //let x: boolean

  if (x) {
    x = 295
    console.log(x); //let x: number
  } else {
    x = "Пирожок"
    console.log(x); //let x: string
  }

  return x //let x: string | number
}