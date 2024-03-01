// в большинстве случсав класса в ts сравниваются структурно
// например

class Point5 {
  x =0;
  y =0;
}

class Point6 {
  x =0;
  y =0;
}

// ОК
const newPoint: Point6 = new Point5()



class User3 {
  constructor(
    public name: string,
    public age: number
  ) {
    
  }
}

class Employee3 {
  constructor(
    public name: string,
    public age: number,
    public salary: number
  ) {
    
  }
}


// мы даже можем делать так, и ошибки не будет
const newEmployee: User3 = new Employee3("Archi", 3, 7)



// создаём пустой класс
class Empty {}

function fn(z: Empty) {
  
}

// All Ok!
fn(window);
fn({});
fn(fn)

// не делать так!