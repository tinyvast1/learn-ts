// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();

//мы не знаем
// можно ли вызвать message
// есть ли метод toLowerCase у message
// если можно вызвать то что они могут вернуть

// Предположим что 

const message = "Hello World!";

// toLowerCase отработает
// а при message() мы получим ошибку 
// TypeError: message is not a function

// В этом случае мы можем быстро найти и исправить ошибку, но бывают моменты когда приложение очень большое и придётся провести масштабный рефакторинг
// С помощью TypeScript мы можем заранее знать, что мы передаем, какие типы и т.д., это позволяет нам ускорить разработку и избежать большое кол-во ошбок

message() // -> Error
                //Это выражение не является вызываемым.
                //  Тип "String" не содержит сигнатуры вызова.ts(2349)

