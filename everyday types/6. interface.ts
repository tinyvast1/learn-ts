interface User {
  name: string;
  id: number;
  checkEmail: boolean;
}

function logVerifiedAccount(data: User): void {
  const { checkEmail, name } = data;
  console.log(
    `Здараствуйте, ${name} ваш аккаунт ${checkEmail ? "" : "не "}поддтверждён`
  );
}

logVerifiedAccount({ checkEmail: false, id: 0, name: "Василий" });
logVerifiedAccount({ checkEmail: true, id: 2, name: "Иван" });

// Объединение Interface

interface AnimalInterface {
  name: string;
}

interface BearInterface extends AnimalInterface {
  honey: boolean;
}

const bear1: BearInterface = { name: "Миша", honey: true };

// Объединение Type

type AnimalType = {
  name: string
}

type BearType = AnimalType & {
  honey: false
}

const bear2: BearType = { name: "Михаил", honey: false}

// Расширение interface

interface WindowInterface {
  width: number
}

interface WindowInterface {
  height: number
}

const window: WindowInterface = {
  width: 1920,
  height: 1080
}

// Расширение type

type WindowType = {
  width: number
}

type WindowType = {
  height: number
}

//Ошибка -> Повторяющийся идентификатор "WindowType".