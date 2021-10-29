// Object.valuesmethod returns an array of Object enumerable own property values. in the same order
// as we provided by a for..in loop
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

// Syntax 
Object.values(obj)

// Parameters
// obj -whose enumerable own properties is returned.

// return value - array of enumerable property values
// examples
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']