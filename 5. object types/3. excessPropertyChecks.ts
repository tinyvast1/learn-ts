// то где и как присваивается объекту тип имеет значение в системе типов
// например

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(square: SquareConfig): { color: string; area: number } {
  const { color, width } = square;
  return {
    color: color || "red",
    area: width ? width ** 2 : 20,
  };
}

createSquare({ colour: "red", width: 120 });
// Объектный литерал может указывать только известные свойства,
// но "colour" не существует в типе "SquareConfig". Вы хотели записать "color"?

// обрати внимание, что мы неправильно написали color
// и ts нам говорит, что здесь ошибка

// но по сути мы же не как не нарушили ничего
// свойство color необязательно и у width тоже правильный тип

// но это все проверяется и если у нас нет у типа такого свойства то мы получим ошибку
// несмотря на то что это никак не помешает выполнению кода

// обойти эту проверку на самом деле очень просто
// ↓
createSquare({ colour: "red", width: 120 } as SquareConfig);

// но лучшим способом указать что объект может принимать ещё какие-то свойства это добавить подпись строкового индекса

declare function createSquare2(square: SquareConfig2): void;

interface SquareConfig2 {
  color?: string;
  width?: number;
  [x: string]: any;
}

createSquare2({ colour: "red", width: 120 });

// ещё один способ обойти проверку

// объект перед передачей в функцию, положить в переменную

let squareConfig = { colour: "red", width: 100 };

let mySquare = createSquare(squareConfig); // не будет выполняться дополнительная проверка свойств
// но очень жалко лучше бы она выполнялась

// но этот способ будет работать до того момента пока у типа и у передоваемого объекта будет хотя бы одно соответствие

let squareConfig2 = { colour: "red" };
createSquare(squareConfig2); // У типа "{ colour: string; }" нет общих свойств с типом "SquareConfig".

// в таком простом кода конечно не нужно пытаться обойти это
// но если мы сталкиваемся с такой проблемой нужно помнить об этих методах
// но лучше не обходить, а пытаться решить ошибку, потому что это ошибка
