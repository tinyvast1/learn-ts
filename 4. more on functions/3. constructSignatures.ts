interface UserType {
  name: string;
  age: number;
  greet: () => void;
}

interface startInfoUser {
  name: string;
  age: number;
}

class User implements UserType {
  name: string;
  age: number;

  constructor(data: startInfoUser) {
    const { age, name } = data;
    this.age = age;
    this.name = name;
  }

  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
  }
}


//Здесь мы описываем тип для функции, которая будет принимать класс
type typeFnAddNewUser = {
  new (data: startInfoUser): UserType;
};

function addNewUser(fn: typeFnAddNewUser, data: startInfoUser) {
  const newUser = new fn(data);
  newUser.greet();
  return newUser
}

// а вот так мы её вызываем
const firstUser = addNewUser(User, {name: "Danil", age:10});
const secondUser = addNewUser(User, {name: "Petya", age: 15});