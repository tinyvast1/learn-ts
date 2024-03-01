// TS позволяет не дублировать код, а объявить свойства класса
// при описывании аргументов в кострукторе
// нужно только указать соотвествующие модификаторы

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}

// преобразуется в 
// class Params {
//   constructor(x, y, z) {
//       this.x = x;
//       this.y = y;
//       this.z = z;
//   }
// }

const newParams = new Params(1, 2, 3);

console.log(newParams.x);
newParams.x = 10;
// Не удается задать значение для "x", так как это свойство, доступное только для чтения.
console.log(newParams.y);
// Свойство "y" является защищенным и доступно только в классе "Params" и его подклассах.
console.log(newParams.z);
// Свойство "z" является закрытым и доступно только в классе "Params"