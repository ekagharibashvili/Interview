/* The Object.getPrototypeOf() method returns the 
prototype (i.e. the value of the internal [[Prototype]] property) of the specified object. */
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)

// syntax
Object.getPrototypeOf(obj)

// obj
// The object whose prototype is to be returned.
// if there ar no inherited properties returns null