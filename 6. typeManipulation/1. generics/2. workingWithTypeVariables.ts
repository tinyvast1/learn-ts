// предположим мы хотим выводить длинну перед тем как возвращать что-то из функции echo

function echoLongingBad<Type>(item: Type): Type {
  console.log(item.length); //Свойство "length" не существует в типе "Type".
  return item
}

// но мы не сказали, что у type есть length
// у типа number же нет length, но мы можем его передать

// но предположим у нас эта функцию будет работать с массивами

function echoLonging<Type>(item: Type[]): Type[] {
  console.log(item.length); // ок
  return item
}