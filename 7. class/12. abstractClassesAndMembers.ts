// классы, метода и свойств могут быть абстрактными

// abstract метод или свойство это те у которых не представлена реализация
// и они могут существовать только внутри абстрактного класса

// роль abstract класса заключается в том, что нельзя создать экземпляр этого класса,
// а можно от него только наследоваться
// и уже производный класс реализует все абстрактные метода и свойства

// абстрактный класс без абстрактных методов и свойств называют конкретный 

abstract class Base4 {
  abstract getName(): string;
  abstract name: string;
  constructor(
    name: string
  ) {
    
  }
  printName() {
    console.log(`Hello, ${this.getName()}`)
  }
}

const newBaza = new Base4(); 
// Невозможно создать экземпляр абстрактного класса.

class Derived4 extends Base4 {
  constructor(
    public name: string
  ) {
    super();
  }
  getName(): string {
      return this.name
  }
}
// наследовались от абстрактного класса и описали его методы

const newDerived4 = new Derived4("Alyosha");

newDerived4.printName()

class Derived4Bad extends Base4 {
  // получаем предупреждение, что нам надо описать абстактный метод базового класса

  // Non-abstract class 'Derived4Bad' does not implement all abstract members of 'Base4'ts(18052)
  // 12. abstractClassesAndMembers.ts(13, 12): Класс "Derived4Bad", не являющийся абстрактным, не реализует 
  // наследуемый абстрактный элемент "getName" класса "Base4".
}



// ПОДПИСИ АБСТРАКТНЫХ КОНСТРУКЦИЙ

// представим что мы хотим написать функцию, 
// которая будет принимать экземпляр производного класса какого-то абстрактного класса

function greetBad(a: typeof Base4) {
  const instance = new a();
  // логично, что так мы получим ошибку
  // Невозможно создать экземпляр абстрактного класса.
  instance.printName()
}

// можно это сделать с помощью сигнатуры конструкции

function greet(ctor: new (name: string) => Base4, name: string) {
  const instance = new ctor(name);

  instance.printName();
}

greet(Derived4, 'Vasia');