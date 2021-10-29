// Object.defineProperty method defines a new property directly to an object, or modifies existing property of object
// and return object.
const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

// syntax 
// Object.defineProperty(obj, prop, descriptor)
/* Parameters
obj
The object on which to define the property.

prop
The name or Symbol of the property to be defined or modified.

descriptor
The descriptor for the property being defined or modified.

Return value
The object that was passed to the function. */

// default values od property is immutable and not enumerable

/* configurable
true if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false. */

// A data discriptor has following optional keys

// The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

// writable
/* true if the value associated with the property may be changed with an assignment operator. Defaults to false. */

// Accessor descriptor has folowing keys

// get
// A function which serves a getter for a property, or undefined if there is no getter. 
// when the property is accesssed this function is called without arguments.
// The return value is used that thy value of property. default is undefined

// set
// A function which serves setter fot the property, or undefined if there is no setter.
// when the property is assigned  this function is called with one argument.
// defaults to undefined

// examples
var o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
    // Using shorthand method names (ES2015 feature).
    // This is equivalent to:
    // get: function() { return bValue; },
    // set: function(newValue) { bValue = newValue; },
    get() { return bValue; },
    set(newValue) { bValue = newValue; },
    enumerable: true,
    configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
    value: 0x9f91102,
    get() { return 0xdeadbeef; }
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors

// if writable attribute is false we can't reassign thu value of property
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
    value: 37,
    writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function () {
    'use strict';
    var o = {};
    Object.defineProperty(o, 'b', {
        value: 2,
        writable: false
    });
    o.b = 3; // throws TypeError: "b" is read-only
    return o.b; // returns 2 without the line above
}());

 // enumerable defaults to true
 // when creating a property by setting it


// configurable attribute control whether the propertys can be delete from object and whether its attrubute can be changed