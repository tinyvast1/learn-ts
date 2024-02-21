// в ts есть типы, которые облегчат манипуляцию с строковми типами

// Uppercase
// преобразует все символы в верхний регистр

type ASCIICacheKeyUper<S extends string> = `${Uppercase<S>}-ID`
type MyApi = 'my_api'
type TestUppercase = ASCIICacheKeyUper<MyApi> // type TestUppercase = "MY_API-ID"

// Lowercase
// преобразует все символы в нижний регистр

type ASCIICacheKeyLower<S extends string> = `${Lowercase<S>}-id`
type foo = 'MY_API'
type TestLowercase = ASCIICacheKeyLower<foo> // type TestLowercase = "my_api-id"

// Capitalize
// преобразует первый символ в верхний регистр

type EventsCapitalaize = "removed" | "changed" | "added"
type User = {
  name: string
  age: number
}

type makeEvetns<S> = `${string & keyof S}${Capitalize<EventsCapitalaize>}`
type UserEvents = makeEvetns<User>
// type UserEvents = "nameRemoved" | "ageRemoved" | "nameChanged" | "ageChanged" | "nameAdded" | "ageAdded"

// Uncapitalize
// преобразует первый сивол в нижний регистр

type Name = "Danil" | "Vasia" | "Petya"

type newName = Uncapitalize<Name> // type newName = "danil" | "vasia" | "petya"

// Код, начиная с TypeScript 4.1, для этих встроенных функций использует строковые функции 
// среды выполнения JavaScript напрямую для манипулирования и не зависит от локали.

// ну короче эти типы под капотом, реализуются с помощию js, вот таким макаром

// function applyStringMapping(symbol: Symbol, str: string) {
//   switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
//       case IntrinsicTypeKind.Uppercase: return str.toUpperCase();
//       case IntrinsicTypeKind.Lowercase: return str.toLowerCase();
//       case IntrinsicTypeKind.Capitalize: return str.charAt(0).toUpperCase() + str.slice(1);
//       case IntrinsicTypeKind.Uncapitalize: return str.charAt(0).toLowerCase() + str.slice(1);
//   }
//   return str;
// }