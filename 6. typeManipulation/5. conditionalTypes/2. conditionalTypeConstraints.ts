// мы уже значем что мы можем искать в типах по индексу

type MessageOfBad<T> = T["message"]; //Тип ""message"" не может использоваться для индексации типа "T".

// в примере выше мы получили ошибку потому что ts не знает какие свойства есть в message
// мы можем органичить генерик и сказать что у него должен быть этот тип

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessage = MessageOf<Email>; //type EmailMessage = string

// а что если мы хотим сделать так
// если нет message у T то ставить тип never, давай попробуем

type MessageOfConditional<T> = T extends { message: any }
  ? T["message"]
  : never;

interface Dog {
  name: string;
}

type EmailMessage2 = MessageOfConditional<Email>; // type EmailMessage2 = string
type DogMessage = MessageOfConditional<Dog>; // type DogMessage = never

//ещё пример

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>; // type Str = string
type Num = Flatten<number>; // type Num = number


