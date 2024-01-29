// в js есть оператор instanceod который проверяет является ли значение экземпляром какого-то значения


function getTime(date: string | Date) {
  if(date instanceof Date) {
    date.getTime();
  } else {
    new Date(date).getTime();
  }
}