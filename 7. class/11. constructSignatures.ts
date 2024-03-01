// Возможно нам нужно создать тип который будет соответсвовать созданному экземпялру класса
// сделать это можно с помощью встроенного типа InstanceType

class Point1 {
  createdAt: number
  constructor(
    public x: number,
    public y: number,
  ) {
    this.createdAt = Date.now()
  }
}

type moveType = "up" | "down" | "left" | "right" 

type PointInstanceType = InstanceType<typeof Point1> // create Type

function move(p: PointInstanceType, type: moveType) {
  switch (type) {
    case "down":
      --p.y
      break;
    case "left":
      --p.x
      break;
    case "right":
      ++p.x
      break;
    case "up":
      ++p.y
      break;
    default: 
      break;
  }

  return p
}

const newPooint1 = new Point1(1, 2);

move(newPooint1, 'down');

console.log(newPooint1.y) // log -> 1