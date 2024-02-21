// в программах мы принимаем решения с помощью условий на основе входных данных
// в ts можно тоже писать условия

interface Animal {
  line(): void;
}

interface Dog extends Animal {
  name: string;
}

// уловия в типах пишутся с помошью тернарного оператора

type Example1 = Dog extends Animal ? number : string; //type Example1 = number
type Example2 = RegExp extends Animal ? number : string; //type Example2 = string

// но такие проверки кажутся излишними, потому что мы изначально знаем результат и можем написать нужный нам тип
// так никто не будет использовать условные типы

// но расскрываются условные типы при описании универсальных функций, например

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabelOverloads(id: number): IdLabel;
function createLabelOverloads(name: string): NameLabel;
function createLabelOverloads(item: number | string): IdLabel | NameLabel {
  if (typeof item === "number") {
    return { id: item };
  } else {
    return { name: item };
  }
}

// мы написали перегрузки функций, но можно использовать условия в типах и не писать перегрузку

type NameOrId<T extends string | number> = T extends string
  ? NameLabel
  : IdLabel;

function createLabelBad<T extends string | number>(item: T): NameOrId<T> {
  if (typeof item === "number") {
    return { id: item };
  } else {
    return { name: item };
  }
}

// в доке был написан такой пример, но там не была написана репализация функции
// я решил написать реализацию, и получил ошибку
// я так понял что сужение типов плохо работает с уловиями и он говорит нам что у нас ошибку
// фу я бы лучше перегрузку написал
// а теперь нужно попробовать решить проблему с сужением

function createLabel<T extends string | number>(item: T): NameOrId<T> {
  if (typeof item === "number") {
    return { id: item } as NameOrId<T>;
  } else {
    return { name: item } as NameOrId<T>;
  }
}

// можно сделать так, но это такой бред,

createLabel; //createLabel(item: string | number): NameLabel | IdLabel

const idLabel = createLabel(1234); // const idLabel: IdLabel
const nameLabel = createLabel("string"); // const nameLabel: NameLabel
const randomLabel = createLabel(Math.random() ? "string" : 1234); // const randomLabel: IdLabel | NameLabel

// всё классно работает, но сужение меня разочаровало
