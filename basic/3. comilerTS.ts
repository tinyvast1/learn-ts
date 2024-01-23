//чтобы преобразовать файл .ts в .js нужно в консоли написать tsc <path>/<name>.ts

// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");

// tsc basic/3.\ comilerTS.ts 
//При компилировании этого файла мы получим ошибку, но файл 3. comilerTS.js всё равно создаётся

// basic/3. comilerTS.ts:8:1 - error TS2554: Expected 2 arguments, but got 1.

// 8 greet("Brendan");
//   ~~~~~~~~~~~~~~~~

//   basic/3. comilerTS.ts:4:24
//     4 function greet(person, date) {
//                              ~~~~
//     An argument for 'date' was not provided.

// Found 1 error in basic/3. comilerTS.ts:8

// чтобы скомпилированный файл при наличии ошибок не создавался нужно, нужно запучстить копиляцию с флагом --noEmitOnError
// tsc --noEmitOnError basic/3.\ comilerTS.ts 