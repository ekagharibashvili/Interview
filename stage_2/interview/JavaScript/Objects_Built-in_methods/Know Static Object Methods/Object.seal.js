// Object.seal method seals an object, so we can't added new properties and present properties is none-configurable
// so we can't delete properties, but we can change the values of properties, as long as they ar writable.
const object1 = {
    property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33

// syntax
// Object.seal(obj)

/* Parameters
obj
The object which should be sealed.

Return value - The object being sealed*/

// example
var obj = {
    prop: function () { },
    foo: 'bar'
};

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, 'foo', {
    get: function () { return 'g'; }
}); // throws a TypeError

// Now any changes, other than to property values,
// will fail.
obj.quaxxor = 'the friendly duck';
// silently doesn't add the property
delete obj.foo;
// silently doesn't delete the property

// ...and in strict mode such attempts
// will throw TypeErrors.
function fail() {
    'use strict';
    delete obj.foo; // throws a TypeError
    obj.sparky = 'arf'; // throws a TypeError
}
fail();

// Attempted additions through
// Object.defineProperty will also throw.
Object.defineProperty(obj, 'ohai', {
    value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
    value: 'eit'
}); // changes existing property value

// Non-object coercion
/* In ES5, if the argument to this method is not an object (a primitive), 
then it will cause a TypeError. In ES2015, a non-object argument will be treated as 
if it was a sealed ordinary object by returning it. */

Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

Object.seal(1);
// 1                             (ES2015 code)



