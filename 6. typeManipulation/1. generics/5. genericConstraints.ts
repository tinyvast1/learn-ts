interface WithLength {
  length: number;
}

// до этого мы использовали тип массива, чтобы сказать что у type есть length
// но можно ограничить generic
function echoLongingConstraints<Type extends WithLength>(item: Type): Type {
  console.log(item.length); // ок
  return item;
}


echoLongingConstraints(2); //Аргумент типа "number" нельзя назначить параметру типа "WithLength"
echoLongingConstraints([1,2,4]);
echoLongingConstraints({length: 10, value: 2});