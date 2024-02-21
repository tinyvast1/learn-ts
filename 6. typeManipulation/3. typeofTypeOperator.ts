// в js уже есть опереатор typeof для определения типа
// в ts тоже можно его использовать для обозначения типа или переменной

let s = "hello";
let n: typeof s;

// но это не очень полезно для обычных типов
// давайте рассмотрим на примере ReturnType, который вовзвращает тип того что возвращает функция

type foobar = (x:number) => boolean;
type barfoo = ReturnType<foobar>; // type barfoo = boolean

// но в примере выше мы использовали тип функции
// а если мы попытаемся использовать саму функцию

function testFoo() {
  return {bar: 10, y: "ball"}
}

type typeBarBad = ReturnType<testFoo> //"testFoo" относится к значению, но здесь используется как тип. Возможно, вы имели в виду "typeof testFoo"?

// и мы получили ошибку

type typeBar = ReturnType<typeof testFoo> 
//type typeBar = {
//   bar: number;
//   y: string;
// }

//typeof можно использовать только для переменных или их свойств

declare function msgbox(str: string): void;

// то есть тут мы пытаемся взять тип выпоненной функции, но так нельзя, нужно использовать ReturnType

let shouldContinue: typeof msgbox("бла блла бла бла бла") //Ожидалось ",".