// бывают методы, которые можно вызвать без создания экземпяра класса
// нужно указать static

class Loto {
  static name:string = 'name';
  // Статическое свойство "name" конфликтует со встроенным свойством "Function.name" функции-конструктора "Loto".
  // у класса уже есть статические методы и их небезопазно перезаписывать (name, length, call)

  set: string = 'set';

  private static secretKey:string = "stroka" // можем изменять видимость статического элемента

  static random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

console.log(Loto.random(23, 100));
Loto.secretKey // Свойство "string" не существует в типе "typeof Loto".
Loto.set // Свойство "set" не существует в типе "typeof Loto".


class DerivedLoto extends Loto {
  test: string = 'test'
}

DerivedLoto.random(10, 25) // статические методы и свойства наследуются от базового класса

// ПОЧЕМУ НЕТ СТАТИЧЕСКИХ КЛАССОВ?

// в ts и js нет static class так же как в C#, потому что
// эти конструкции там есть так как такие языки заставляют все данные находиться внутри класса
// а мы можем использовать объект или функцию