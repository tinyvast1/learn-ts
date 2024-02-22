// в js с es2015 появились классы и ts их можно типизировать

class Point {
  x: number = 10;
  y: number = 12;
}

const newPt = new Point();

newPt.x = 10;
newPt.y = 12;

// выше мы объявили класс и описали какие поля и их типы

// как и в других местах анотация типа не обязательна

class Point2 {
  x = 10;
  y = 12;
}

// задали значенния по деолту и ts подхватитл типы

const newPt2 = new Point2();
console.log(`${newPt2.x}, ${newPt2.y}`);
newPt2.x = "foo"; // Тип "string" не может быть назначен для типа "number".

// если в tsconfig у поля strictPropertyInitialization, указать значение true
// ts будет высвечивать ошибку если свойство не определено в class

class PointError {
  x: number; // Свойство "x" не имеет инициализатора, и ему не гарантировано присваивание в конструкторе.
  y: number; // Свойство "y" не имеет инициализатора, и ему не гарантировано присваивание в конструкторе.
}

class PointGood {
  x: number;
  y!: number;
  constructor() {
    this.x = 0;
  }
}

const newPointGood = new PointGood();

newPointGood.y = 10;

// ts анализирует объявление только в конструкторе
// если мы задаём свойство в другом месте, нужно указать что мы это сделаем
// поэтому после y стоит ! знак

// readonly

// если перед полем поставить значение readonly, то его значение можно будет изминить только в конструкторе

class Greeter {
  readonly name: string = "world";

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  err() {
    this.name = "not ok"; // Не удается задать значение для "name", так как это свойство, доступное только для чтения.
  }
}

const g = new Greeter();

g.name = "ok"; // Не удается задать значение для "name", так как это свойство, доступное только для чтения.

// конструкторы

// с конструкторами можно делать всё что с функциями
// добовлять перегрузки
// описвать типы параметров и задавать им значения по умолчанию

class PointConst {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Foo {
  constructor(bol: boolean);
  constructor(item: string | number);
  constructor(params: boolean | string | number) {}
}

// конструкторы не могут иметь возвращаемого типа так как всегда возвращается экземпляр класса
// у конструктора нельзя определить generic

// при наследовании мы можем вызвать конструктор наследуемого класса,
// но сделать это нужно до использования конекста

class twoD {
  x = 0;
  y = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class threeD extends twoD {
  z = 0;
  constructor(x: number, y: number, z: number) {
    this.z = 10;
    super(x, y);
  }
  // Вызов "super" должен быть первой инструкцией в конструкторе, ссылающейся на "super" или "this",
  // если производный класс содержит инициализированные свойства, свойства параметров или частные идентификаторы.
}
// в js мы бы не увидели эту ошибку

// методы
// эту функции объявленные в этом классе

class PointFunc {
  x = 10;
  y = 10;

  scale(n: number) {
    this.x *= n;
    this.y *= n;
  }
}

let test: number;

class PointBad {
  test = "hello";

  m() {
    test = "world"; // Тип "string" не может быть назначен для типа "number".
  }
}

// ну тут и так понятно почему ошибка
// просто напоминание что нужно быть внимательнее

// get/set

// у классов могут быть средства доступа к полям класса

class C {
  _length = 0;

  get length() {
    return this._length;
  }

  set length(n) {
    this._length = n;
  }
}

// Обратите внимание, что пара get / set с поддержкой полей без дополнительной логики очень редко бывает полезна в JavaScript.
// Можно предоставлять общедоступные поля, если вам не нужно добавлять дополнительную логику во время операций get / set.

// в ts есть некоторые правила связанные с get / set

// 1. если get существет, а set нет то свойство автоматически readonly
// 2. если тип параметра set, не указан то он автоматически берёт возвращаемый тип get
// 3. get / set должны иметь одинаковую видимость (public | private)

// c ts 4.3 для параметра set можно использовать разные типы

class C2 {
  _length = 0;

  get length() {
    return this._length;
  }

  set length(n: number | boolean | string) {
    let num = Number(n);

    if (isFinite(num)) {
      this._length = num;
      return;
    }
    this._length = 0;
  }
}

// подписи индексов

// подписи индексов в классах работают так-же как и в объектах

class TestIndex {
  [x: string]: boolean | ((s: string) => boolean);
  name: string = "Danil";
  //Свойство "name" типа "string" не может быть назначено типу индекса "string" "boolean | ((s: string) => boolean)".
  checkLength(s: string) {
    return !!s.length;
  }
}