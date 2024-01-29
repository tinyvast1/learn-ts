// до этого мы смотрели существующие конструкции в js, для сужения,
// но иногда сложно определить тип и мы можем использовать предикат типа

type Fish = { swim: () => void, name: string };
type Bird = { fly: () => void, name: string };

function isFish1(animal: Fish | Bird): animal is Fish {
  //в доке написано так
  // return (animal as Fish).swim !== undefined;

  //но я написал так
  return "swim" in animal;
}

// теперь при вызове этой функции, нам будет возвращаться true или false,
// и ts будет знать что если это true, то мы работаем с типом Fish

function movementAnimal(animal: Fish | Bird) {
  if (isFish1(animal)) { 
    animal.swim(); //(parameter) animal: Fish
  } else {
    animal.fly(); //(parameter) animal: Bird
  }
}


//можно использовать isFish1 при фильтрации массива

declare function getSmallPet(): Fish | Bird;

const animals: (Fish | Bird)[] = Array(5).map(() => getSmallPet())

const getFishFromAnimals = animals.filter(isFish1); //const getFishFromAnimals: Fish[]

//не знаю зачем так писать, но пример был в доке
const getFishFromAnimals2: Fish[] = animals.filter(isFish1) as Fish[] //const getFishFromAnimals2: Fish[]

//возможно придётся повторить предикат для более сложных примеров
const getFishFromAnimals3 = animals.filter((animal): animal is Fish => { //const getFishFromAnimals3: Fish[]
  if (animal.name === "sharkey") return false
  return isFish1(animal)
})

// классы могут использовать предикаты для сужения своего типа → this is Type, но это разберем, когда будем изучать классы