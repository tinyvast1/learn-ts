import { Cat, Dog } from "./2. exportESModules";
import type { User } from "./2. exportESModules"; // ts расширили синтаксис и мы можем указывать что мы импортируем типы
import { type Point, createCatName } from "./2. exportESModules"; // с TS 4.5 можно добавлять type в импорте

type Animal = Cat | Dog;