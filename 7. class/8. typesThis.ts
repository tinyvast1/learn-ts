// в классах есть тип this который динамически ссылается на тип текущего класса

class Box3 {
  content: string = "";
  set(value: string) {
    this.content = value;
    return this;
  }
  // (method) Box.set(value: string): this
  sameAs(other: this) { 
    return other.content === this.content
  }
  // (method) Box3.sameAs(other: this): boolean
}

class ClearebleBox extends Box3 {
  clear() {
    this.content = "";
  }
}

const newClearebleBox = new ClearebleBox();
const boxHello = newClearebleBox.set('hello');
// const boxHello: ClearebleBox
const newBox3 = new Box3();
const boxName = newBox3.set('Katya')
// const boxName: Box3
// тип динамически меняется

newClearebleBox.sameAs(newBox3)
// Аргумент типа "Box3" нельзя назначить параметру типа "ClearebleBox".
// Свойство "clear" отсутствует в типе "Box3" и является обязательным в типе "ClearebleBox"



// СУЖЕНИЕ ТИПОВ С ПОМОЩЬЮ THIS

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep
  }
  isDirectoty(): this is Directory {
    return this instanceof Directory
  }
  isNetwork(): this is Networked & this {
    return this.networked
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children?: FileRep[];
}

interface Networked {
  host: string
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo');

if (fso.isDirectoty()) {
  fso.children //const fso: Directory
} else if (fso.isFile()) {
  fso.content //const fso: FileRep
} else if (fso.isNetwork()) {
  fso.host //const fso: Networked & FileSystemObject
}

// с помощью this можно, сузить до обязательного типа

class Boxic<T> {
  value?: T
  hasValue(): this is {value: T} {
    return this.value !== undefined
  }
}

const newBoxic = new Boxic<string>();

newBoxic.value = "Stiring";

newBoxic.value
// (property) Boxic<string>.value?: string

if (newBoxic.hasValue()) {
  newBoxic.value 
  // (property) value: string
}