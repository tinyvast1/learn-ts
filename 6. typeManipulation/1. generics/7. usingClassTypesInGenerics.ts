// вот так мы типизируем функцию конструктор

function create<Type>(c: { new (): Type }): Type {
  return new c();
}

//пример из доки

class BeerKeeper {
  hasMsak: boolean = true;
}
class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Beer extends Animal {
  numLegs = 6;
  keeper: BeerKeeper = new BeerKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(a: new () => A) {
  return new a();
}

createInstance(Beer).keeper.hasMsak;
createInstance(Lion).keeper.nametag;

// ну я понял что ts понимает какие методы и свойства есть у созданого экземпляра класса
// в зависимости от того какой мы класс передаём

// но как будто бы это интуитивно было понятно

// Этот шаблон используется для поддержки шаблона проектирования mixins -> https://www.typescriptlang.org/docs/handbook/mixins.html