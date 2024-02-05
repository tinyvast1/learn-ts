interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  if (shape.kind === "rectangle") {
    //Это сравнение кажется непреднамеренным, поскольку типы ""circle" | "square"" и ""rectangle"" не перекрываются.
    // Кртуо что мы используем литералы, и редактор нам подсказывает что такое условие всегда будет false
  }
}

function getArea(shape: Shape) {
  return Math.PI * shape.radius * 2; //здесь ts подсказывает, что radius может быть не определён
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * 2;
  }
}

// Мы делаем проверку по kind, но всё равно получаем ошибку так так ts не человек
// и он не понимает что если это круг у него должен быть радиус,
// мы бы могли использовать ! чтобы указать что это свойство точно будет присутствовать
// но это в дальнейшем может порадить очень много ошибок

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape1 = Circle | Square;

// теперь мы правильно создали типы, разделив их, им задав правильные обязательные значения
// теперь kind является дискриминируемым свойством, оно есть у каждого возможного типа,
// и в условия если мы по нему будем проверять то ts сможет сузить типы

function getArea(shape: Shape1) {
  if (shape.kind === "circle") {
    // ts правильно сузил типы и он знает, что в этом лексическом окружение shape = Circle
    return Math.PI * shape.radius * 2;
  } else if (shape.kind === "square") {
    // здесь ts понимает и сужает type до Square
    return Math.sqrt(shape.sideLength);
  }
}

// но лучше написать через switch

function getAreaSwitch(shape: Shape1) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * 2;
    case "square":
      return Math.sqrt(shape.sideLength);
    case "rectangle":
    //Тип ""rectangle"" невозможно сравнить с типом ""circle" | "square"".
  }
}

// но нам же нужно написать что-то в default, и тут нам на помощь приходит тип never
// never используется для того чтобы указать что это никогда не должно существовать

function getAreaSwitch(shape: Shape1) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * 2;
    case "square":
      return Math.sqrt(shape.sideLength);
    default:
      const __exhaustiveCheck: never = shape;

      // как я понял, мы здесь говорим, что такого быть не должно, но если будет то делай это

      return __exhaustiveCheck;
  }
}

// если мы домавим ещё один возможный тип в shape, то будет ошибку потому что новый тип нужно отработать

type Tringale = {
  kind: "trinagle",
  sideLength: number
};
type Shape2 = Circle | Square | Tringale;


function getAreaSwitch(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * 2;
    case "square":
      return Math.sqrt(shape.sideLength);
    default:
      
      // здесь ts ругается и говорит, что остался тип Trinagle и он не может быть типом never
      const __exhaustiveCheck: never = shape; //Тип "Tringale" не может быть назначен для типа "never".
      // пожтому либо мы здесь пишем логику для Trinagle или делаем отедельный case , а это оставляем
      return __exhaustiveCheck;
  }
}