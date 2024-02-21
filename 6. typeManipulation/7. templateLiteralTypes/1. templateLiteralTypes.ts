// как мы уже видели мы можем использовать, шаблонные строки в описании типов
// так вот при описании литералов их тоже можно использовать

type World = "world";

type Greeting = `hello ${World}`; // type Greeting = "hello world"

// когда мы передаём литеральное объединение создаются все возможные значения

type EmailLocalIds = "welcome_email" | "email_heading";
type FooterLocaleIds = "footer_title" | "footer_sendoff";

type AllLocalIds = `${EmailLocalIds | FooterLocaleIds}_id`;

// type AllLocalIds = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
type Lang = "en" | "ru" | "pt";

type LocaleMessageIds = `${Lang}_${AllLocalIds}`;

// type LocaleMessageIds = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" |
// "ru_welcome_email_id" | "ru_email_heading_id" | "ru_footer_title_id" | "ru_footer_sendoff_id" | "pt_welcome_email_id" |
// "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

// колличество вариантов во всех литеральных объединения умножаем и полуим кол-во типов

const passedObject = {
  firstName: "Danil",
  lastName: "Sennikov",
  age: 22,
};

// представим что мы хотим создать функцию, которая будет принимать объект и добовлять on функцию,
// которая будет следит за всеми свойствами в объектке
// но нам же её нужно как-то типизировать

type Events = "Changed" | "Removed" | "Added";

type MakeEventsObject<O> = {
  on(
    events: `${string & keyof O}${Events}`,
    callback: (newItem: O[keyof O]) => void
  ): void;
};

declare function makeEventsObject<T>(object: T): MakeEventsObject<T> & T;

const eventsObject = makeEventsObject(passedObject);

// теперь у нас есть подсказки, какие слушаетли у нас есть
eventsObject.on("ageChanged", () => {});

// И теперь мы даже получаем ошибки

eventsObject.on("frstNmaeCahnge", () => {});
// Аргумент типа ""frstNmaeCahnge"" нельзя назначить параметру типа ""firstNameChanged" |
// "lastNameChanged" | "ageChanged" | "firstNameRemoved" | "lastNameRemoved" | "ageRemoved" |
// "firstNameAdded" | "lastNameAdded" | "ageAdded"".

// но можно сделать ещё круче

type TypeMakeEventsObjectGood<O> = {
  on<Key extends string & keyof O>(
    events: `${Key}${Events}`,
    callback: (newItem: O[Key]) => void
  ): void;
}

declare function makeEventsObjectGood<T>(
  object: T
): TypeMakeEventsObjectGood<T> & T;

const passedEventsObject = makeEventsObjectGood(passedObject);

passedEventsObject.on("ageAdded", (newAge) => {
  if (newAge < 0) {
    console.log("Возраст не может быть отрицательным");
  }
}); // (parameter) newAge: number
passedEventsObject.on("lastNameRemoved", (newLastName) => {
  newLastName.toLowerCase();
}); // (parameter) newLastName: string

// и теперь мы знаем тип параметра который передаём в callback

// это очень круто