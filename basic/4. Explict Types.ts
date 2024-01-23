//Здесь мы явно указываем, параметры каких типов мы ожидаем

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// Если вызвать так
// greet("Maddison", Date());
//то мы получим ошибку, так как Date() возврашает строку с текущим временем

// вот так уже будет правильно
greet("Madisson", new Date());

//В документации написано что явные типы не всегда нужно указывать, во многих случаях TS может сам вычислить типы для нас
// Например
let msg = "hello there!"; 


//Если рассмотреть скомпилированный код, он будет выглядет так

    //Здесь мы явно указываем, параметры каких типов мы ожидаем
    function greet(person, date) {
      console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    }
    // Если вызвать так
    // greet("Maddison", Date());
    //то мы получим ошибку, так как Date() возврашает строку с текущим временем
    // вот так уже будет правильно
    greet("Madisson", new Date());

// Здесь мы видим, что 
// 1. анотации типов убранны
// 2. шаблонная строка переписана на конкатинацию, это происходит потому что TS компилирует под ES3
// Чтобы перекомпилировать под ES5 нужно запустить с флагом --target es2015, и мы получим 

    //Здесь мы явно указываем, параметры каких типов мы ожидаем
    function greet(person, date) {
      console.log(`Hello ${person}, today is ${date.toDateString()}!`);
    }
    // Если вызвать так
    // greet("Maddison", Date());
    //то мы получим ошибку, так как Date() возврашает строку с текущим временем
    // вот так уже будет правильно
    greet("Madisson", new Date());


