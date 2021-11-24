// implement polyfill

// The bind takes an object as an argument and returns a new Function
// whose this refers to the object we passed as an argument.

// Now we got the idea about pollyfill and binde(). So, let's
// try to implement it

// lets create an object that we are going to use as a call site.
let obj = {
    name: 'Jack',
};

// Create a function that we need to bind with the object
let myFunc = function () {
    console.log(`${this.name}`);
};



// If you call this function, It will print undefined

// Add your bind() to the function prototype.
Function.prototype.myBind = function (obj) {
    let func = this;
    return function () {
        func.apply(obj)
    }
}

let newFunc = myFunc.myBind(obj)
newFunc() // Jack


// THe problem 
let obj = {
    name: 'Jack',
};

let myFunc = function (id) {
    console.log(`${this.name}, ${id}`);  // id will be undefined
};

Function.prototype.myBind = function (obj) {
    let func = this;
    return function () {
        func.apply(obj);
    };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc() // Jack, undefined

// We are trying to pass id in myBind but not able to access it.
let obj = {
    name: 'Jack',
};

let myFunc = function (id) {
    console.log(`${this.name}, ${id}`);  // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    return function () {
        func.apply(obj, [...args]);
    };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc() // Jack, a_random_id

// Now we solved an edge case. However, there is one more improvement 
// we can make. What if we want to pass arguments to newFunc()?

// The problem
let obj = {
    name: 'Jack',
};

let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    return function () {
        func.apply(obj, [...args]);
    };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, undefined

// We are passing 'New York' but not able to access it inside myFunc.

// The solution
let obj = {
    name: 'Jack',
};

let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    // Accepting arguments passed to newFunc
    return function (...newArgs) {
        func.apply(obj, [...args, ...newArgs]);
    };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York
