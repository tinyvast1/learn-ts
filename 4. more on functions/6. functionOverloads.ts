// предположим что мы хотим написать функцию, которая будет создавать дату
// но мы можем создать функцию как из числа так и передав 3 параметра (год, дату, месяц)

// мы можем то вызова функции написать варианты её вызова
// на словах трудно надо смотреть

function makeDate(n: number): Date;
function makeDate(year: number, m: number, d: number): Date;
function makeDate(yearOrMilliseconds: number, m?: number, d?: number): Date {
  if (d === undefined || m === undefined) {
    return new Date(yearOrMilliseconds);
  } else {
    return new Date(yearOrMilliseconds, m, d);
  }
}

// мы описали сигнатуры перегрузки
// и написали сигнатуру реализацую функции совместимую с перегрузками
// теперь мы можем вызвать функцию использую только два варианта

//vs code подсказывает эти два варинта

makeDate(50000000000);
makeDate(2023, 11, 1);
makeDate(2023, 11); // Ни одна перегрузка не ожидает аргументы 2, но существуют перегрузки, которые ожидают аргументы 1 или 3.ts(2575)

// в доке написано, что люди часто так пишут и потом не понимают в чем ошибка
// ну я бы так не написал

function fn(str: string): void;
function fn() {
  // ...
}

fn(); // Ожидалось аргументов: 1, получено: 0.

// при написании перегоуженной функции над ней должно быть написано две или более реализаций этой функции

// сигнатура реализациии должна быть совместима с перегрузками
// иначе будет ошибка

function foo(bar: boolean): void;
function foo(bar: string): void; //Сигнатура перегрузки несовместима с ее сигнатурой реализации.
function foo(bar: boolean) {
  console.log(bar);
}

function foo2(bar: string): string;
function foo2(bar: number): number; //Сигнатура перегрузки несовместима с ее сигнатурой реализации.
function foo2(bar: number | string){
  return 'ola';
}

// я думаю шо тут не так и ежу понятно

// Рекомендации по написанию хороших перезагрузок

// 1. По возмоности использовать объединение типов там где это возможно и уместно

function len(n: string): number;
function len(n: any[]): number;
function len(n: any): number {
  return n.length
}

//мы написали функцию перезагрузки без ошибок
// но вопрос зачем если можно было просто слелать объединение типов


function len2(n: string | any[]) { // ну так же намного лучше
  return n.length
}