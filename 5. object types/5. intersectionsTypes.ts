interface Circle {
  radius: number;
}

interface Color {
  hex: string
}

type CircleColorType = Circle & Color;
// мы моздали тип путём пересечения двух интерфейсов 
// лучше конечно extneds


declare function draw(circle:CircleColorType): CircleColorType;

draw({hex: "#532532", radius: 11})

draw({hex: "#532532", raidus: 11}) //Объектный литерал может указывать только известные свойства, но "raidus" не существует в типе "CircleColorType". Вы хотели записать "radius"?

// в доке не подсвечивалась как оишбка и я <минуты не мог поянть что не так
