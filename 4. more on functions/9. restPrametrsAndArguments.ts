function multiplly(m: number, ...arr: number[]): number[] {
  // типизироавли неограниченное колличесто последних приходяших параметров
  return arr.map((item) => item * m);
}

//rest можно типизировать только T[] или Array<T>, по дефолту у него стоит тип any[]

console.log(multiplly(3, 1, 2, 3, 4, 5, 6, 7));

const args = [3, 4]; //здесь мы указали что этот массив только для чтения
// ts думает что массив может изменится и поэтому выдаёт ошибку
const angle = Math.atan2(...args); //Error -> Аргумент расширения должен иметь тип кортежа либо передаваться в параметр rest.

// поэтому если мы хотим делать так то на нужно указать что массив изменять не будет

const args2 = [3, 6] as const;

args2[0] = 10; // Не удается задать значение для "0", так как это свойство, доступное только для чтения.

const angle2 = Math.atan2(...args2);
//теперь ошибки нет

// можно ещё сделать так
const args3: [number, number] = [3, 6];

// в таком случаем мы сможем изменить 1-ый или 2-ой элемент массива
args3[1] = 10;

const angle3 = Math.atan2(...args3);

// иногда чтобы перекомпилироовать rest в более старую версию ES
// нужно в конфиге включить downlevelIteration