// 4. === vs ==


// == ადარებს ველიუებს ორივე მნიშვნელობის საერთოდ ტიპად გადაქცევის შემდეგ
// === მკაცრად ადარებს ველიუებს ტიპების მიხედვით.
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

const num = 0;
const big = 0n;
const str = '0';
const obj = new String('0');

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true