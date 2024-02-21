// универсальный класс имеет форму аналогичную универсальному интефейсу

class genericClasses<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}


let newGenericClasses = new genericClasses<number>();
newGenericClasses.zeroValue = 0;
newGenericClasses.add = (x, y) => {
  return x + y
}

console.log(newGenericClasses.add(newGenericClasses.zeroValue, 10))

// это конечно примитивный пример, но в type generic можно передавать типы, интерфейсы и т.д.
// подробнее классы посмотрим чуть позже