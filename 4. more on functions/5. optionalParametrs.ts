function roundPrice(n: number): number {
  return +n.toFixed(2);
}

// мы написали функцию, которая обязательно должна принимать n

console.log(roundPrice(10.1234123412));

// но предположим что мы хотим вызывать функцию без объевления параметра
// мы можем сказать что n является необязателным параметром

function roundPrice2(n?: number): number | void {
  // n?: number - это просто сокращенная запись n: number | undefined
  if (typeof n === "number") {
    return +n.toFixed(2);
  }

  console.log("Функция была вызвана без параметров");
}
console.log(roundPrice2(2.1234));
console.log(roundPrice2());
console.log(roundPrice2(undefined)); // можем передать undefined

function roundPrice3(n: number = 0): number {
  // можем указать чему должно быть равно по умолчанию
  return +n.toFixed(2);
}

console.log(roundPrice3());
console.log(roundPrice3(3.1415926));


//необязательные параметры в callback

//ниже мы создаём свою функцию forEach, и говорим что вторым параметром мы будем принимать callback, в котором второй параметр необязательный 
function myForEach(arr: any, callback: (item: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// когда мы делали второй параметр необязательный мы хотели
// чтобы функцию callback можно будет вызвать двумя способами

myForEach([1,2,3], (item, i) => console.log(item, i));
myForEach([1,2,3], (item) => console.log(item));

//но тут мы сталкиваемся с проблемой 

myForEach([1,2,3], (item, i) => { 
  // мы указали что мы вторым параметром принимаем i
  // но до этого мы указали что это необязательный параметр
  // и ts  думает что i может быть равно undefined
  console.log(item);
  console.log(i.toFixed()); //Возможно, "i" имеет значение undefined.
})

// при написании callback никогда не указывать необязательный параметр, если только вы не собираетесь вызывать функцию без передачи аргумента

// лучше написать так 
function myForEach2(arr: any, callback: (item: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// и нет никаких ошибок, когда мы не казываем 2-ой параметр
myForEach2([1,2,3], (item) => console.log(item));
myForEach2([1,2,3], (item, i) => console.log(item, i.toFixed()));