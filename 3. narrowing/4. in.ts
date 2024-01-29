// в js есть оператор →, который проверяет есть ли свойство в объекте
// ts учитывает это при сужении типов

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function go(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); //(parameter) animal: Fish
  } else {
    animal.fly(); //(parameter) animal: Bird
  }
}

type Human = { swim?: () => void; fly?: () => void }; // не стал расписывать тип просто наследовал

function go1(animal: Human | Fish | Bird) {
  if ("swim" in animal) {
    animal; //(parameter) animal: Fish | Human
  } else {
    animal; //(parameter) animal: Bird | Human
  }
}

// ↓
// Human может быть и там и там, так как у него может быть и тот и тот метод
// но если вызывать эти методы нужно делать проверку, так как они могут быть undefined

function go2(animal: Human | Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); //Error → Не удается вызвать объект, который может иметь значение "undefined".
  } else {
    if (animal.fly) {
      // нужно ставить условие
      animal.fly();
    }
  }
}
