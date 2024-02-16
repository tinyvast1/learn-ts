// предположим что у нас есть тип person

interface Person {
  name: string;
  age: number;
}

// и тут нам нужно было написать тип для работника

interface BadEmployee {
  name: string;
  age: number;
  post: number;
}

// но зачем мы описывали тип заново если у нас есть person от которого можно начледоваться

//да этож круто
interface GoodEmloyee extends Person {
  post: number;
}

interface Developer extends GoodEmloyee {
  stack: string[];
}


//также мы можем наследовать от нескольких interface-ов

interface Circle {
  radius: number;
}

interface Color {
  hex: string
}

interface CircleColor extends Circle, Color {}

const testCircle: CircleColor = {
  radius: 10,
  hex: "#ffffff"
}