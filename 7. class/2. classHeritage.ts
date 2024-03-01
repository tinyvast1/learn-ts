// мы можем создать тип и сказать чтобы у класса были все реализации
// которые описаны в этом типе

interface Pingable {
  ping(): void;
}

class Player implements Pingable {
  ping(): void {}
}

class Ball implements Pingable {
  pong(): void {}
}
// Класс "Ball" неправильно реализует интерфейс "Pingable".
// Свойство "ping" отсутствует в типе "Ball" и является обязательным в типе "Pingable".

// классы также могут имплементироваться от нескольких типов

// предостережение
// интерфейсс лишь опредедяет, что должно быть в классе

interface UserInterface {
  name: string;
  age: number;
  sayHello(str: string): void;
}

class User implements UserInterface {
  name: string;
  age: number;
  constructor() {
    this.age = 10;
    this.name = "";
  }
  sayHello(str) {
    //Параметр "str" неявно имеет тип "any", но из использования можно определить более подходящий тип.ts(7044)
    console.log(`Привет ${str.toLowerCase()}`);
  }
}

// мы могли подумать, что если мы в интерфесе указали,
// что в функцию приходит параметр с типом string
// то там его уже указывать не надо, но не тут то было

// я правда не понял зачем это дублирование кода
// брали бы по дефолту значения из интерфейса

// extends

// классы могут быть произдводными какого-то класса,
// и обладать всеми свойствами и методами базового класса

class Animal {
  move() {
    console.log("go");
  }
}

class Dog extends Animal {
  woof(n: number) {
    for (let i = 0; i < n; i++) {
      console.log("woof!");
    }
  }
}

const pug = new Dog();

pug.move();
pug.woof(5);

// ПЕРЕОПРЕДЕЛЯЮЩИЕ МЕТОДЫ

// производные классы также могут переопределять свойства / методы базового класса
// но мы всё ещё сможем обратить к базовому через super

class Base {
  greet() {
    console.log("Hello world");
  }
}

class Derived extends Base {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("Danil");

const b: Base = d; // можно ссылаться на класс в виде типа

b.greet();
b.greet("afas"); //Ожидалось аргументов: 0, получено: 1.

// но главное чтобы переопределение всегда следовало своему базовому исполнению
// вот что будет если не выполнять это условие

class DerivedBad extends Base {
  greet(name: string) {
    console.log(`Hello, ${name}`);
  }
  // Свойство "greet" в типе "DerivedBad" невозможно присвоить тому же свойству в базовом типе "Base".
  // Тип "(name: string) => void" не может быть назначен для типа "() => void".
  // Target signature provides too few arguments. Expected 1 or more, but got 0.
}

//ОБЪЯВЛЕНИЕ ПОЛЕЙ ТОЛЬКО ДЛЯ ТИПОВ

// представим что у нас есть класс j с свойством x и типом y, 
// мы создаём класс z наследуясь от j
// и при объявлении типов в классе z мы хотим у свойства x указать другой тип
// но как только мы это сделаем получим ошибку потому что мы нигде свойсто x не инициализируем
// так как оно инициализируется в super
// нужно указать declare перед свойстом чтобы сказать что оно будет

// но ошибку мы бы получили если бы у нас был target >= es2022 или useDefineClassFields: true

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

class AnimalHouse {
  resident: Animal
  constructor(animal: Animal) {
    this.resident = animal
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog // поставили declare
  constructor(dog: Dog) {
    super(dog);
  }
}



// ПОРЯДОК ИНИЦИАЛИЗАЦИИ

// порядок инициализации классоы JavaScript в некоторыз случаях может удивлять
// например

class BaseName {
  name = 'base';
  constructor() {
    console.log(`My name ${this.name}`)
  }
}

class DerivedName extends BaseName {
  name = 'derived'
}

const newDerived = new DerivedName(); // log -> My name base

// так произошло, потому что порядок инизиалиции классов такой

// 1. инициализируются поля базового класса
// 2. запускается конструктор базового класса
// 3. инизциализируются поля производного класса
// 4. запускается конструктор производного класса



// НАСЛЕДОВАНИЕ ВСТРОЕННЫХ ТИПОВ

// конструкторы в es2015 возвращающие объект, при изспользовании super 
// заменяют значение this на свое во всей цепочке наследования

// это связанно с тем что для установки цепочки прототипов Error, Array и др. встроенные классы
// используют функцию new.target, а при компиляции в старый стандарт new.tager нет,
// поэтому может получиться странное поведение
// пример

class MsgErrorBad extends Error {
  constructor(m: string) {
    super(m) // при вызове супер this MsgError подмениться на this Error
    // поэтому все новые методы и свойства могут быть не доступны
  }

  sayHello() { // при вызове этого метода можем получить ошибку так как его нет
    console.log(`Hello ${this.message}`)
  }
}

(new MsgErrorBad("s")) instanceof MsgErrorBad 
// получим false так как теперь этот класс соотвествует Error

// можно вручную исправить это поведение

class MsgError extends Error {
  constructor(m: string) {
    super(m)

    Object.setPrototypeOf(this, MsgError.prototype)
  }

  sayHello() { 
    console.log(`Hello ${this.message}`)
  }
}

// но эти обходные пути не будут работать, internet Explorer 10