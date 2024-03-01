//с this нужно быть аккуратным

class UserThis {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}

const newUserThis = new UserThis('Danil');

const obj = {
  name: 'Vasia',
  sayName: newUserThis.sayName
}

obj.sayName() // log -> Vasia 

// возможно мы ожидали в консоли Danil
// но так как функция была вызвана из объекта this был равен этому объекту

// есть несколько методов, чтобы исправить это поведение

// 1. стрелочная функция

class UserThis2 {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayName = () => {
    console.log(this.name)
  }
}

const newUserThis2 = new UserThis2('Roma')

const obj2 = {
  name: 'Any',
  sayName: newUserThis2.sayName
}

obj2.sayName()

// но есть неприятный моменты

// 1. будет есть больше памяти так как экземпяр класса будет иметь собственную копую функции
// 2. нельзя использовать super.getName в производном классе так как это не метод


// 1. типизация this у метода

class MyClass {
  name = 'MyClass'
  getName(this: MyClass) {
    return this.name
  }
}

const fooMyClass = new MyClass();

fooMyClass.getName();

const barMyClass = fooMyClass.getName;

barMyClass(); // Контекст this типа "void" не может быть назначен методу this типа "MyClass".
