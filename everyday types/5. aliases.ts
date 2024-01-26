type ID = string | number;

type Point = {
  id: ID;
  first: string;
  last: string;
};


function logMyId(coords: Point): void {
  const { first, last, id } = coords;
  console.log(`Hello, ${first} ${last}, your id = ${id}`);
}

logMyId({first: "Danil", last: "Sennikov", id: "11"});
logMyId({first: "Roma", last: "Ivanov", id: 27});