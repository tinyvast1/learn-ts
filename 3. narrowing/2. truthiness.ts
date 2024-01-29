// в условие не обязательно вписывать тип boolean
// js всё что написано в условие приводит к типу boolean, чтобы понять как с этим работать

//Всему что будет равно значениям написаным ниже будет писвоено false, все другие значение будут превращены в false:

// 0
// NaN
// ""
// 0n
// null
// undefined

// мы всегда можем принудительно превратить в boolean двумя способами

const yes = Boolean("hello"); //const yes: boolean
const no = !!0; //const no: false

// эти способы различаются тем, что при наведении в редакторе кода у первого способа будет показываться type boolean, а у второго false

function checkOnline(conditions: boolean) {
  if (conditions) {
    console.log("Онлайн");
  } else {
    console.log("Не онлайн");
  }
}
checkOnline(no);


// вернёмся к printAll в ./1. typeofInConditions.ts и правильно перепишем

function printAll(strs: string[] | string | null) {
  if (strs && typeof strs === "object") {
    for(let str of strs) { // (parameter) strs: string[]
      console.log(str);
    }
  } else if (typeof strs === "string") {
    console.log(strs); //(parameter) strs: string
  }
}

// теперь мы не встретимся с такой ошибкой → TypeError: null is not iterable

//но нужно быть внимательными когда, мы пишем такие условия 

function printAll(strs: string[] | string | null) {
  if (strs) {
    if (typeof strs === "object") {
      for(let str of strs) { // (parameter) strs: string[]
        console.log(str);
      }
    } else if (typeof strs === "string") {
      console.log(strs); //(parameter) strs: string
    }
  }
}

//в таком случае вариант с пустой строкой не будет отрабатывать
