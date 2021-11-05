// this in methods
/* It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside user.sayHi() may need the name of the user.

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance: */

let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        console.log(user.name);
    }

};

user.sayHi(); // John

/* Here during the execution of user.sayHi(), the value of this will be user.

Technically, it’s also possible to access the object without this, by referencing it via the outer variable: */

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }

};

/*   …But such code is unreliable.If we decide to copy user to another variable, e.g.admin = user and overwrite
      user with something else, then it will access the wrong object.

    That’s demonstrated below: */

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // leads to an error
    }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the alert, then the code would work.


// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, 
// even if it’s not a method of an object.
// There’s no syntax error in the following example:

function sayHi() {
    alert(this.name);
}

// The value of this is evaluated during the run-time, depending on the context.
// For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// The rule is simple: if obj.f() is called, then this is obj during the call of f. 
// So it’s either user or admin in the example above.

// Calling without an object: this == undefined

// We can even call the function without an object at all:

function sayHi() {
    alert(this);
}

sayHi(); // undefined

/* In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later 
    in the chapter Global object). This is a historical behavior that "use strict" fixes.

Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context. */

// Arrow functions have no “this”

/* Arrow functions are special: they don’t have their “own” this. If we reference this from such a function,
 it’s taken from the outer “normal” function.

For instance, here arrow() uses this from the outer user.sayHi() method: */

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya


// The value of this is defined at run-time.

/* The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside. */


/* Description
Global context
In the global execution context (outside of any function), this refers to the global object whether in strict mode or not. */

// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"


/* Function context
Inside a function, the value of this depends on how the function is called.

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default
to the global object, which is window in a browser. */

function f1() {
    return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true

/* The bind method
ECMAScript 5 introduced Function.prototype.bind().
Calling f.bind(someObject) creates a new function with the same body and scope as f,
 but where this occurs in the original function, 
in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used. */

function f() {
    return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty