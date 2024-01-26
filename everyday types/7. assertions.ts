const mainCanvas = document.querySelector(".main-canvas") as HTMLCanvasElement
const allCanvas = document.querySelectorAll(".canvas") as NodeListOf<HTMLCanvasElement>;

// можно писать так, но это не будет работать в файлах с расширением .tsx
const myCanvas = <HTMLCanvasElement>document.querySelector('.my-canvas');

const str = "123" as number;
// Преобразование типа "string" в тип "number" может привести к ошибке, так как ни один из типов не перекрывается с другим в достаточной степени. 
// Если это сделано намеренно, сначала преобразуйте выражение в "unknown".

//Можно сделать так, но пока не понимаю где это может пригодиться
const str3 = "123" as any as number;