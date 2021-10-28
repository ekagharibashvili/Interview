// Object.create()

// Object.create method creates a new object, using the existing object as a prototype of newly created object.
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

// Syntax
Object.create(proto)
Object.create(proto, propertiesObject)

// Parameters

// proto
// the object which should be the prototype of newly crated object.

// propertiesObject (optional)
// It is specified and not undefined. specify property to be added by the property names with its descriptors.
// these properties correspont to Object.defineProperties()'s second argument.

// return value - new object with specified prototype object and properties.

// Exceptions

// the proto parameter has to be either 
// null or
// an Object exlcuding primitive wrapper objects
// if proto is nether of these TypeError is thrown


// Custom and Null objects
// A new object created from completely custom object  can behave in unexpected ways.
// It may generate errors and lose information during the debugging.
oco = Object.create({});   // create a normal object
ocn = Object.create(null); // create a "null" object

console.log(oco) // {} -- Seems normal
console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

console.log(oco) // {p: 1} -- Still seems normal
console.log(ocn) // {p: 0} -- Still seems normal here too. BUT WAIT...

    // as shown above it seems normal, but when we use them, unexpected results has thrown.
    > "oco is: " + oco // shows "oco is: [object Object]"

    > "ocn is: " + ocn // throws error: Cannot convert object to primitive value

    // testing bult-in functions for understand magnitude of the problem more clearly.
    > alert(oco) // shows [object Object]
    > alert(ocn) // throws error: Cannot convert object to primitive value

    > oco.toString() // shows [object Object]
    > ocn.toString() // throws error: ocn.toString is not a function

    > oco.valueOf() // shows {}
    > ocn.valueOf() // throws error: ocn.valueOf is not a function

    > oco.hasOwnProperty("p") // shows "true"
    > ocn.hasOwnProperty("p") // throws error: ocn.hasOwnProperty is not a function

    > oco.constructor // shows "Object() { [native code] }"
    > ocn.constructor // shows "undefined"

// Some OK SOlutions
// adding generic methods
ocn = Object.create(null); // create "null" object (same as before)

ocn.toString = toString; // since new object lacks method then assign it directly from generic version

ocn.toString() // shows "[object Object]"
"ocn is: " + ocn // shows "ocn is: [object Object]"

ob = {}; ob.pn = ocn; ob.po = oco; // create a compound object (same as before)

ShowProperties(ob) // display top-level properties
// po: [object Object]
// pn: [object Object]

// However, setting the generic prototype as the new object's prototype works even better:
ocn = Object.create(null);                  // create "null" object (same as before)
Object.setPrototypeOf(ocn, Object.prototype); // set new object's prototype to the "generic" object (NOT standard-object)

ocn.valueOf() // shows {}
ocn.hasOwnProperty("x") // shows "false"
ocn.constructor // shows "Object() { [native code] }"

// ...and all the rest of the properties and methods of Object.prototype.
