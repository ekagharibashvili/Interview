// Es module syntax 
// A file can declare a main export via export default: 
// @filename: hello.ts
export default function helloWorld() {
    console.log("Hello, world!");
}

// This is the imported via:
// import hello from "./hello.js";
// hello();

// In addition to the default export, u=you can have more than one export of variables and functions
// via the export by omitting default: 

// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
 
export class RandomNumberGenerator {}
 
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}


// These can be used in another file via the import syntax:
// import { pi, phi, absolute } from "./maths.js";
 
console.log(pi);
const absPhi = absolute(phi);

// Additional Import Syntax 
// An import can be renamed using a format like import {old as new }:

// import { pi as π } from "./maths.js";
 
// console.log(π);
           
/* (alias) var π: number
import π
 */

// You can mix and match the above syntax into a single import:
// @filename: maths.ts
/* export const pi = 3.14;
export default class RandomNumberGenerator {}
 
// @filename: app.ts
import RNGen, { pi as π } from "./maths.js";
 
RNGen;
 
(alias) class RNGen
import RNGen
 
console.log(π);
           
(alias) const π: 3.14
import π */

// You can take all of the exported objects and put them into a single namespace using * as name:

/* // @filename: app.ts
import * as math from "./maths.js";
 
console.log(math.pi);
const positivePhi = math.absolute(math.phi); */


// You can import a file and not include any variables into your current module via import "./file":

// @filename: app.ts
import "./maths.js";
 
console.log("3.14");

// In this case, the import does nothing. However, all of the code in math.ts was evaluated, which could 
// trigger  side-effects which affect other objects.

// TypeScript Specific ES Module Syntax
// Types can be exported and imported using the same syntax as JavaScript values:

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
/* import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog; */


// TypeScript has extended the import syntax with two concepts for declaring an import of a type:

// import type

// Which is an import statement which can only import types:

// @filename: animal.ts
 /* export type Cat = { breed: string; yearOfBirth: number };
'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";
 
// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;
 
// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName(); */ 

// TypeScript 4.5 also allows for individual imports to be prefixed with type to indicate that the imported reference is a type:
// @filename: app.ts
/* import { createCatName, type Cat, type Dog } from "./animal.js";
 
export type Animals = Cat | Dog;
const name = createCatName(); */

// Together these allow a non-TypeScript transpiler like Babel to know what imports can be safely removed.

// ES Module Syntax with CommonJS Behavior 
// TypeScript has ES Module syntax whic directly correlates to a CommonJS and AMD require.
// Imports using ES Module are for most cases the same as the require from those environments, but this syntax ensures you have a 1 to 1 match in your TypeScript file with CommonJS output:
/* import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
 */

// CommonJS Syntax
// CommonJS is the format which most modules on nmp are delivered in. 
// Even if you are writing the ES modules syntax above, having a brief understanding of how CommonJS syntax works will help you debug easier.

// Exporting
// Identifiers are exported via setting the exports property on a global called module.

/* function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
 
module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
}; */

// Then these files can be imported via require statement
/* const maths = require("maths");
maths.pi; */

// Or you can simplify a bit using the destructuring feature in JavaScript:
/* const { squareTwo } = require("maths");
squareTwo; */
