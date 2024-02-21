function echo<Type>(item: Type): Type {
  return item;
}

let myEcho: <Type>(item: Type) => Type = echo;
let myEcho2: <Input>(item: Input) => Input = echo; // можно использовать другое имя

// я вооообще не понимаю зачем эти примеры написаны в доке

// мы также можем описать с помощью сигнатуру вызова

let myEcho3: { <Type>(item: Type): Type } = echo;

// и это нас наталькивает на мысль написать универсальный тип

interface TypeEcho<Type> {
  (item: Type): Type;
}

let myEcho4: TypeEcho<number> = echo; 

// я не понимаю зачем все эти извращения написаны в доке, если можно написать так

let myEcho5 = echo<number>;

// и не нужно писать отдельный интерфейс

// я пока не понял сокральный смысл всего этого, возможно пример в доке не очень