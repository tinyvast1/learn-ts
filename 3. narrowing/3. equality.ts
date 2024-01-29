//в ts мы можем использовать равенства для сужения типов

function example1(x: string | number, y: string | boolean, ) {
  if (x === y) {
    //x, y: string
    // если у нас они равны значит и типы у нас равны, а единственный повторяющийся тип это string
    x.toLowerCase();
    y.toUpperCase();

    console.log(`x: ${x}, y: ${y}`);
  } else {
    x // (parameter) x: string | number
    y // (parameter) y: string | boolean
    console.log("x и y любые доступные типы данных");
  }
}

// но я обнаружил, что ts не всегда корректно определяет тип, например

function example2(x: string | number, y: string | boolean, ) {
  if (x == y) {
    // здесь ts почему то уверен что x и y будут иметь type string
    // но мы ведь можем передать x = "" == y = false, получиться true, но н ведь получется не строка
    x.toLowerCase();
    y.toUpperCase();

    console.log(`x: ${x}, y: ${y}`);
  } else {
    console.log("x и y любые доступные типы данных");
  }
}

example2("", false); // здесь мы полуим ошибку

// в случае ниже тоже отрабатывает некорректно

function example3(x: string | number, y: string | boolean, ) {
  if (typeof x === typeof y) {
    x //(parameter) x: string | number
    y //(parameter) y: string | boolean
    // здесь ts почему то уверен что x и y могут иметь любой доступный тип данных
    x.toLowerCase();
    y.toUpperCase();

    console.log(`x: ${x}, y: ${y}`);
  } else {
    console.log("x и н любые доступные типы данных");
  }
}

example3("14", "корни");

// я думаю что могут быть ещё какие-нибудь недоработки, надо быть внимательнее

//вернёмся к многострадальной функции ptintAll, и сделаем правильную отработку пустой строки

function printAll(strs: string[] | string | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for(let str of strs) { // (parameter) strs: string[]
        console.log(str);
      }
    } else if (typeof strs === "string") {
      console.log(strs); //(parameter) strs: string
    }
  }
}
// теперь всё работает корректно

//попроюуем сужение типов с помощью !=

interface Data {
  value: number | null | undefined
}

function changeValue(data: Data) {
  if(data.value != null) {
    return ++data.value // (property) Data.value: number
  }
}


