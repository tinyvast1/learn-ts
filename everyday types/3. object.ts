function printCoord(pt: { x: number; y: number }): void {
  const { x, y } = pt;
  console.log(`x = ${pt.x}`);
  console.log(`y = ${pt.y}`);
}

printCoord({ x: 1121, y: 124523 });

function printName(data: { fs: string; ls?: string }) {
  console.log(`${data.fs}${data.ls ? data.ls : ""}`);
}

printName({ fs: "Danil" });
printName({ fs: "Kostya", ls: "Ivanov" });
