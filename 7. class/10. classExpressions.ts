// классы можно создавать без имени и объявлять их через переменную
// также как с function Expressions

const PointExpresions = class {
  constructor(
    public x: number,
    public y: number,
    public z: number
  ) {
    
  }
}

const newPointExpressions = new PointExpresions(1, 2, 4)