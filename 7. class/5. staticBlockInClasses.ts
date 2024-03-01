// static блоки в классах

// статический блок выполняется до первой инициализации класса,
// мы можем его использовать для того чтобы изменить какие-то значения 
// например можем загрузить какие-нибудь данные и поместить в статические классы 
// и потом использовать их значения

declare function loadLastInstance(): Foo[]

class Food {
  static #count = 0

  static {
    try {
      const lastInstances = loadLastInstance()
      Food.#count = lastInstances.length;
    } catch (error) {
      
    }
  }
}