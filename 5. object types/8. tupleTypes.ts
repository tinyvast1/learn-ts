// мы можем типизировать массив с опрделённым количеством элементов и их типами

type Coordinate = [number, number];

const coord: Coordinate = [1, 3];

// если попробуем создать массив не соответствующий типу получим ошибку
const coord2: Coordinate = [1]; //Тип "[number]" не может быть назначен для типа "Coordinate".
//Число элементов в источнике — 1, но целевой объект требует 2.

// также мы можем деструктуризировать массив

const [x1, y1] = coord;
// если попробуем получить больше получим ошибку

const [x2, y2, z2] = coord; //тип кортежа "Coordinate" длиной "2" не имеет элемент с индексом "2".

coord.length; // у length тип числовой литерал = длинне массива

// при объявлении ограниченного массива мы можем указать необязательные свойства
// но небязательные элементы всегда должны быть в конце
// они не могут стоять между обязательными
// также и обязательные не могут стоять между обязатлеьными

type Coordinate3D = [number, number, number?];

function calcCoord(coords: Coordinate3D) {
  const [x, y, z] = coords;
  x; //const x: number
  y; //const x: number
  z; //const z: number | undefined
  // тип у length тоже меняется
  coords.length; //(property) length: 2 | 3
}

// также при описании массивов мы можем комибинировать известные элементы
// и элменты у которых мы знаем типы и положение в массиве, но не знаем кол-во
// например

type StringNumberBoleans = [string, number, ...boolean[]];
type StringBoleansNumber = [string, ...boolean[], number];
type BoleansStringNumber = [...boolean[], string, number];

const a: StringNumberBoleans = ["Hell", 132, true, false, false, false];
const b: StringBoleansNumber = ["foo", false, true, true, false, false, 1234];
const c: BoleansStringNumber = [true, true, "bar", 1234];
const c2: BoleansStringNumber = ["bar", 1234]; // неизвестное кол-во элементов может быть равно 0

function readButton(...args: StringNumberBoleans) {
  const [str, n, ...check] = args;
  str; //const str: string
  n; //const n: number
  check; //const check: boolean[]
}

// ограниченные массивы тоже могут быть readonly

function foo(arr: readonly [string, number]) {
  arr[0] = "bar"; //Не удается задать значение для "0", так как это свойство, доступное только для чтения.
}

// as const !== readonly

// потому что когда мы описываем через as const
// массив типизируется литералами задаными в массиве и потом могут возникнуть ошибки
// например

const point = [3, 4] as const; //const point: readonly [3, 4] 

function calcDistance(xy: [number, number]) {
  const [x, y] = xy;
  return x + y;
}

calcDistance(point);
// Аргумент типа "readonly [3, 4]" нельзя назначить параметру типа "[number, number]".
// Тип "readonly [3, 4]" является "readonly" и не может быть назначен изменяемому типу "[number, number]".ts(2345)
