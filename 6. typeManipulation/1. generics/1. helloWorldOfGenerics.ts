// когда мы пишем компоненты, интерфейсы и типы
// мы хотим чтобы они были максимально переиспользуемы
// в этом нам помогают generics

// допустим мы хотим создать функцию, которая что-то принимает, а затем что-то отдает

function echoNumber(item: number): number {
  return item
}

// но здесь мы ограничиваемся одни типом
// можно конечно использовать тип any

function echoAny(item: any): any {
  return item
}

// да any использовать удобно, но это не парвильно
// в этом случае можно использовать Generic

function echo<Type>(item: Type): Type {
  return item
}

// вот мы и написали уневерсальную функцию
// у неё есть два варианта объявления

// с явным указанием типа

echo<string>('Hello')

// не явным указанием типа


echo('Hello')

// но ts не всегда сможет определить тип