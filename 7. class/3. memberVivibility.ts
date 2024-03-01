// у методов и свойств класса может быть разная видимость
// рассмотрим каждую из них

// public
// стоит по умолчанию и указывает на то что доступ можно получить из любого места

class UserPublic {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello() {
    console.log(`Hello, ${name}`);
  }
}

// так как public стоит по умолчанию его можно не указывать
// но можно это сделать для удобочитаемости

// protected
// члены видны только производным классам

class Empoyee {
  protected post: string;
  constructor(post: string) {
    this.post = post;
  }
}

class Developer extends Empoyee {
  level: string;
  constructor(post: string, level: string) {
    super(post);
    this.level = level;
  }

  printInfo() {
    console.log(`У меня уровень: ${this.level}, при должности ${this.post}`);
  }
}

const newDeveloper = new Developer("foo", "bar");

newDeveloper.printInfo();
newDeveloper.post; // Свойство "post" является защищенным и доступно только в классе "Empoyee" и его подклассах.

// ВОЗДЕЙСТВИЕ НА PROTECTED УЧАСТНИКОВ

class BaseProtected {
  protected m = 10;
}

class DerivedProtected extends BaseProtected {
  m = 15; // теперь он public, потому что мы ничего не написали перед m и там автоматически встаёт public
  // можно указать protected и всё будет ок
}

const newDerivedProt = new DerivedProtected();

newDerivedProt.m;

// можем получить доступ к свойству m

// КРОСС-ИЕРАРХИЧЕСКИЙ PROTECTED ДОСТУП

// разные ООП языки расходяться во мнении
// можно ли из производного класса, менять свойство другого произдодного класса если они наследуются от одного базового класса
// обратиться к protected свойству

// JAVA считает, что можно
// С и С++ считают что нет, и TS на их стороне

class BaseMoreDerived {
  protected x = 10;
}

class Derived1 extends BaseMoreDerived {
  protected x = 15;
}

class Derived2 extends BaseMoreDerived {
  f1(other: Derived1) {
    other.x = 11;
    // Свойство "x" является защищенным и доступно только в классе "Derived1" и его подклассах.
  }

  f2(other: Derived2) {
    other.x = 1234;
  }
}

// private
// можно получить доступ только из того класса к которому принадлежит

class UserPrivate {
  name: string;
  private secretKey: number;
  constructor(name: string) {
    this.name = name;
    this.secretKey = Math.random();
  }
}

const newUserPrivate = new UserPrivate("Danil");

newUserPrivate.secretKey;
// Свойство "secretKey" является закрытым и доступно только в классе "UserPrivate"

class Employee extends UserPrivate {
  post: string;
  constructor(name: string, post: string) {
    super(name);
    this.post = post;

    this.secretKey = 0;

    // Свойство "secretKey" является закрытым и доступно только в классе "UserPrivate".
  }
}

class Employee2 extends UserPrivate {
  secretKey = 10 // нельзя изменить видимось приватного свойства базового класса
}

// Класс "Employee2" неправильно расширяет базовый класс "UserPrivate".
// Свойство "secretKey" является закрытым в типе "UserPrivate" и не является таковым в типе "Employee2".



//ДОСТУП К ПРИВАТНОМУ СВОЙСТВУ ИЗ ДРУГОГО ЭКЗЕМПЛЯТРА КЛАССА

// ООП языки расходяться во мнении можно ли это сделать 
// java, c#, c++, swift, php считают что можно и ts на их стороне
// ruby считает, что нельзя

class A {
  private x = 10;

  public test(foo: A) {
    // ошибки нет
    foo.x = 15;
  }
}

// ПРЕДОСТЕРЕЖЕНИЯ

// если мы захотим получить приватное свойство вне класса получим ошибку
// но мы можем это сделать использовав квадратные скобки и ошибки никакой не будет

class B {
  private test = 'foo'
}

new B()['test'] = 'bar'

// ограничения области видимости работают только на уровне проверки типов

// поэтому если мы хотим чтобы после компиляции поле оставалось приватным,
// нужно использовать индетификатор для скрытых полей из js (#)

class AllPrivate {
  #test: string;

  private #mas: boolean; // нельзя кобминировать с private
  // Модификатор специальных возможностей запрещено использовать с закрытым идентификатором.
  constructor(test: string) {
    this.#test = test;
  }
}

new AllPrivate('bar').#test
// Свойство "#test" недоступно вне класса "AllPrivate", так как оно имеет закрытый идентификатор.

// после компиляции

// class AllPrivate {
//   constructor(test) {
//       _AllPrivate_test.set(this, void 0);
//       __classPrivateFieldSet(this, _AllPrivate_test, test, "f");
//   }
// }
// _AllPrivate_test = new WeakMap();
// new AllPrivate('bar').;

// # - доступно только в es2015 и выше 
// с es2021 при компиляции вместо # будет WeakMaps

// так что если нам нужно защитить значения в нашем классе от злоумышленников, нужно использовать 
// механизмы обеспечивающие жесткую конфиденциальность(замыкания, WeakMaps, закрытые поля)