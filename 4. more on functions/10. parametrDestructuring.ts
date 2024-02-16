
function what({a, b, c}: {a: number, b: boolean, c: string}) { // так мы можем описать типы деструктуризации
  if (b) {
    console.log(`${a}, ${c}`)
  }
}

// или так 

type ABC = {
  a: number;
  b: boolean;
  c: string;
}

function test({a,b,c}: ABC) {
  // что - то тут происходит
}