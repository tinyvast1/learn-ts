interface Box {
  contents: any;
}

// сейчас contents принимает любой тип и это может привести к ошбкам в дальнейшем
// мы можем конечно использовать unknown, но нам постоянно придётся писать проверки типов

interface Box2 {
  contents: unknown;
}

let x: Box2 = {
  contents: "(-_-)"
}

x.contents.toLowerCase() //"x.contents" относится к типу unknown.

if (typeof x.contents === "string") {
  x.contents.toLowerCase();
}

// ну или так

(x.contents as string).toLowerCase();

// можно было бы для каждого типа contents создавать разные типы Box

interface NumberBox {
  connents: number
}
interface StringBox {
  connents: string
}
interface BooleanBox {
  connents: boolean
}

// но тогда нам придётся писать для каждого типа свою функцию

declare function setContents()