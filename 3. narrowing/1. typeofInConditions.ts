function padLeftError(padding: string | number, str: string) {
  return " ".repeat(padding) + str;
}
// Аргумент типа "string | number" нельзя назначить параметру типа "number".
// Тип "string" не может быть назначен для типа "number"
// ↑
// мы получаем ошибку когда в функцию repeat передаем padding, потому что мы не проверили относится ли она к типу number


// нужно вот так, понятно?

// мы делаем так называемую защиту от типов и потом в разных местах кода у нас происходит сужение типов

function padLeft(padding: string | number, str: string) {
  // здесь padding string | number

  if (typeof padding === "number") {
    // здесь padding только number

    return " ".repeat(padding) + str; // (parameter) padding: number
  }

  // здесь padding только string

  return padding + str; //  (parameter) padding: string
}



function printAll(strs: string[] | string | null) {
  if (typeof strs === "object") {
    // здесь мы сжали тип только до string[] | null
    // потому что typeof null = "object"

    //получим ошибку потому что null не итерируется

    for(let str of strs) { //(parameter) strs: string[] | null
      console.log(str);
    }
    return
  } 
  
  console.log(strs); //(parameter) strs: string
}