// ts существует с 2012 года и за это время были сделаны
// разные реализации модулей, ts многие из них поддерживал

// но я рассмотрю 2 CommonJS и ES Modules
// информацию о других можно найти - >https://www.typescriptlang.org/docs/handbook/modules.html

// КАК ОПРЕДЕЛЯЮТСЯ МОДУЛИ JS?

// в ts, как и в es2015, файл содержащий import/export считается модулем
// и наоборот если нет то считается скрпитом, создержимое которого доступно в глобальной области видимости и модулям
// модули же выполняюются в своей области видимости, 
// все сущности которые в нем описаны и не экспортированы, доступны только внутри модуля


// если мы хотим чтобы скрипт стал модулем, но мы не хотим ничего импортировать или экспортировать, нам нужного в него добавить
export {}

// ВЗАИМОДЕЙСТВИЕ COMMONJS И ES

// представим что мы хотим в старом проекте начать использовать import/export
// у нас это может не получиться потому что синтаксис разный 
// но с включенной опцией esModuleInterop мы можем это сделать

// ПАРАМЕТРЫ ВЫВОДА МОДУЛЯ TS

// для того чтобы поддерживать самый старый среды, нам нужно компилировать модули в старые стандарты
// для того чтобы ts понимал во что компилировать модули мы можем использовать настроки 
// target
// module