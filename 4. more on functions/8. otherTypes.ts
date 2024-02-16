//void нужно исползовать когда мы явно ничего не возвращаем из функции

function greet(str: number):void {
  console.log(`Hello, ${str}`)
}

//или
function greet(str: number):void {
  console.log(`Hello, ${str}`)
  return;
}

//! void !== undefined
// да если мы нечего не возвращаем из функции, то она всё равно неявно вернёт undefined, но это void

// object 

// этот тип относится ко всему кроме string number bigint symbol bollean null undefined {} или Object

// object !== Object

// функции === object

function returnCallback(callback: (str: string) => boolean): object {
  return callback
}

//unknown

// unknown возможно похож на тип any, но он безопсанее так как нам запрещено что либо с ним делать

function foo(bar: unknown): {
  return bar.toFixed() //"bar" относится к типу unknown.
}

// но он хорошо подйодёт, когда мы не значем что будет возвращать функция

function safeParse(str: string): unknown {
  return JSON.parse(str);
}

//never

// мы указываем тип never тогда когда создаётся исключение
// или функция завершает выполнение программы

function logError(msg: string): never {
  throw new Error(msg);
}

function test(x: string | number) {
  if (typeof x === "string") {

  } else if (typeof x === "number") {

  } else {
    return x; //(parameter) x: never
  }
}


// Function

// тип Function описывает всё что есть в функции, 
// но мы не можем указать какие и скаими типами параметры приходят в функцию и что возвращает функция
// поэтому везде any

function uselessly(fn: Function){ // лучше использовать () => void
  return fn(1,2,3) 
}