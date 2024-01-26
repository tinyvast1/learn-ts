let chaningString = "Hello World"; //type:string
chaningString = "Ola Mundo"; //type:string
//Так как changingString может быть присвоена любой строке, ts ставит ей тип string

const constantString = "Hello World"; //type:"Hello world"
// Так как при объявлении переменной мы ей присваиваем значение, ts cnfdbn ей литеральный тип "Hello world"

//мы можем сами задать литеральный тип, например

let name: "Danil" = "Danil";

// теперь name может быть только cтрокой "Danil"
// но это бесполезно. Мы можем объединять литералы и тогда будет круто

type Display = "none" | "block" | "inline";
type Tag = "a" | "div" | "span" | "p";

function createBlock(tag: Tag, display: Display) {
  const block = document.createElement(tag);
  block.style.display = display;
  return block;
}

const div = createBlock("div", "block");
const span = createBlock("span", "inline");
const p = createBlock("p", "blokc"); //Аргумент типа ""blokc"" нельзя назначить параметру типа "Display"

// Можно комбинировать нелитрельные типы и обычные типы

type test = string | 1234 | true;

//Нужно быть внимательным при использовании литеральных типов и везде проставлять типы
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method); //Аргумент типа "string" нельзя назначить параметру типа ""GET" | "POST""

// TS оченивает req.method как string, а не как литерал "GET",
// потому что он думает что мы можем изменить req.method между объявлением объекта и вызовом функции
// мы можем сделать все свойства в объекте как литералы и тогда ошибки не будет

const reqLiter = { url: "https://example.com", method: "GET" } as const;
handleRequest(reqLiter.url, reqLiter.method);

// но теперь изменить эти свойства в объекте нельзя
