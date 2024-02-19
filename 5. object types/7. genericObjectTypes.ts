interface Box {
  contents: any;
}

// сейчас contents принимает любой тип и это может привести к ошбкам в дальнейшем
// мы можем конечно использовать unknown, но нам постоянно придётся писать проверки типов

interface Box2 {
  contents: unknown;
}

let x: Box2 = {
  contents: "(-_-)",
};

x.contents.toLowerCase(); //"x.contents" относится к типу unknown.

if (typeof x.contents === "string") {
  x.contents.toLowerCase();
}

// ну или так

(x.contents as string).toLowerCase();

// можно было бы для каждого типа contents создавать разные типы Box

interface NumberBox {
  connents: number;
}
interface StringBox {
  connents: string;
}
interface BooleanBox {
  connents: boolean;
}

// но тогда нам придётся писать для каждого типа перегрузку

function setContents(box: NumberBox, connents: number): void;
function setContents(box: StringBox, contents: string): void;
function setContents(box: BooleanBox, contents: boolean): void;
function setContents(box: { connents: any }, contents: any): void {
  box.connents = contents;
}

// слишком много кода, можно сделать проще с помощью generic

interface BoxGeneric<Type> {
  contents: Type;
}

let boxic: BoxGeneric<string> = {
  contents: "Hello",
};

// поскольку generic можно использовать не только для описания свойств объекта, но и для написания других типов
// мы можем создавать универсальные типы

type OrNull<Type> = Type | null;
type OneOrMore<Type> = Type | Type[];
type OneOrMoreOrNull<Type> = OrNull<OneOrMore<Type>>;
type OneOrMoreOrNullString = OneOrMoreOrNull<string>;

//Array
//всё это время когда мы указывали тип для мыссива мы пользовались универсальным типом?
// number[Type] = Array<Type>

declare function testik(arr: Array<string>): void;
const strings: string[] = ["1", "2", "13", "15"];

testik(strings);

// современный ЖабаСкрипт представляет другие универсальные типы, например

const newSet: Set<number> = new Set([1, 2, 3, 4, 5]);
const newMap: Map<string, number> = new Map([["one", 1]]);
newMap.set("two", 2);

const newPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
});

//ReadonlyArray
// тип описывает массив, который нельзя изменять

const newArr: ReadonlyArray<number> = [1, 2, 3, 5, 6, 7, 823, 12345, 2345];

console.log(newArr[7]);

newArr.push(112); //Свойство "push" не существует в типе "readonly number[]".

// также есть сокращенная запись

const newArr2: readonly number[] = [1, 2, 4, 646, 37, 23457, 12, 2334]; // не знаю на сколько она сокращённая, но она просто понятнее
let newArr3: number[] = [];

newArr3 = newArr2; // Тип "readonly number[]" является "readonly" и не может быть назначен изменяемому типу "number[]".
// ts правильно выдаёт ошибку потому что елси мы так сделаем то мы передадим ссылку на массив
// и при изменении newArr3 измениться newArr2
newArr3 = [...newArr2]; // Good
