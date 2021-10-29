// Object.preventExtensions method prevents new properties from ever being added  to an object
// prevents future extensions
const object1 = {};

Object.preventExtensions(object1);

try {
    Object.defineProperty(object1, 'property1', {
        value: 42
    });
} catch (e) {
    console.log(e);
    // expected output: TypeError: Cannot define property property1, object is not extensible
}

// syntax
// Object.preventExtensions(obj)
/* obj
The object which should be made non-extensible.

Return value
The object being made non-extensible. */

// Propeties from non-extensible object still be deleted.
/* This method makes the [[prototype]] of the target immutable; any [[prototype]] re-assignment will throw a
 TypeError. This behavior is specific to the internal [[prototype]] property, other properties of the target 
 object will remain mutable.

There is no way to make an object extensible again once it has been made non-extensible. */
// Object.preventExtensions returns the object
// being made non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objects are extensible by default.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', {
    value: 8675309
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
    'use strict';
    // throws a TypeError
    nonExtensible.newProperty = 'FAIL';
}
fail();