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


