//Здесь мы явно указываем, параметры каких типов мы ожидаем
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// Если вызвать так
// greet("Maddison", Date());
//то мы получим ошибку, так как Date() возврашает строку с текущим временем
// вот так уже будет правильно
greet("Madisson", new Date());