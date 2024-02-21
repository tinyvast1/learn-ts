// ранне, чтобы создать функцию, которая по дефолту без указания типа создаёт элемент с одним типом
// а если указаны, то с типом который указан
// пришлось бы писать что-то такое

interface Container<Parent, Children> {
  block: Parent;
  children: Children;
}

declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U
): Container<T, U[]>;

//но есть типы по дефолту

interface Container<Parent, Children = Parent> {
  block: Parent;
  children: Children;
}

declare function createGood<
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement[] = T[]
>(element?: T, children?: U): Container<T, U>;

const div = createGood(); //Container<HTMLDivElement, HTMLDivElement[]>
const button = createGood(new HTMLButtonElement()); //Container<HTMLButtonElement, HTMLButtonElement[]>
const form = createGood(new HTMLUListElement(), [
  new HTMLLIElement(),
  new HTMLLIElement(),
]); //Container<HTMLUListElement, HTMLLIElement[]>


// Общий параметр по умолчанию соответствует следующим правилам:

// 1. Параметр type считается необязательным, если у него есть значение по умолчанию.
// 2. Обязательные параметры типа не должны следовать необязательным параметрам типа.
// 3. Типы по умолчанию для параметра type должны удовлетворять ограничению для параметра type, если оно существует.
// 4. При указании аргументов типа от вас требуется только указать аргументы типа для требуемых параметров типа. Неуказанные параметры типа будут преобразованы в типы по умолчанию.
// 5. Если указан тип по умолчанию и inference не может выбрать кандидата, выводится тип по умолчанию.
// 6. Объявление класса или интерфейса, которое объединяется с существующим объявлением класса или интерфейса, может ввести значение по умолчанию для существующего параметра типа.
// 7. Объявление класса или интерфейса, которое объединяется с существующим объявлением класса или интерфейса, может вводить новый параметр типа, если в нем указано значение по умолчанию.