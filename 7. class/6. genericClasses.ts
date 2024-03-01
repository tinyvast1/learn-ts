// мы можем использовать generic в классах

class Box <T> {
  contents: T;
  constructor(contents: T) {
    this.contents = contents;
  }
}

const stringBox = new Box('hello'); 
// const stringBox: Box<string>

// также можно использовать ограничения и т.д.

// НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ GENERIC ДЛЯ СТАТИЧЕСКОГО ТИПА

// при объявлении класса static свойство сразу объявляется
// и нехорошо если бы от того с каким типом создаётся экземпяр класс у нас менялся тип у статического свойства

class BoxStatic<T> {
  static defaulValue: Type;
  constructor(n: T) {
    
  }
  // Не удается найти имя "Type".
}


const newBox1 =new BoxStatic('string');
const newBox2 = new BoxStatic(10);