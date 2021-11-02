// this method return thi object describing specific property on a given object.
const object1 = {
    property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42

// Syntax
Object.getOwnPropertyDescriptor(obj, prop)

// if doesn't exist property it retuns undefined
/* value
The value associated with the property (data descriptors only).

writable
true if and only if the value associated with the property may be changed (data descriptors only).

get
A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

set
A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object. */

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d is {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, 'bar');
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for('baz')]: 73 }
d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'));
// d is {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, 'qux', {
    value: 8675309,
    writable: false,
    enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, 'qux');
// d is {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

Object.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor('foo', 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }