// когда условные типы деййтвуют на общий тип они становятся дистрибутивами

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; //type StrArrOrNumArr = string[] | number[]

// происходит так что ts делит и под капотом получается что-то такое
// ToArray<string> | ToArray<number>
// получается мы получили тип массива либо строками, либо с числами
// а если мы хотим поличить тип массива в котором могут быть и числа и строки
// можем сделать так

type ToArrayNoDestributive<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArrNoDesctributive = ToArrayNoDestributive<string | number>;

// type StrArrOrNumArrNoDesctributive = (string | number)[]

const arrBad: StrArrOrNumArr = [1,2,3,5346,23, "ghq3", 21] 
const arr: StrArrOrNumArrNoDesctributive = [1,2,3,5346,23, "ghq3", 21]
