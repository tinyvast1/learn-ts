let x = Math.random() < 0.5 ? 10 : "hello world"; //let x: string | number

x = 1;

console.log(x); //let x: number

x = "goodbye";

console.log(x); //let x: string

// когда мы объявляли переменную x ts понял, что она может быть либо строкой либо числом, поэтому  у нас нет ошибки когда мы изменяем x
// но если мы будем менять x на тип кроме string или number получим ошибку

x = true; //Тип "boolean" не может быть назначен для типа "string | number".
