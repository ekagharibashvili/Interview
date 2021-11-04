// Global Scope
/* Variables declared Globally (outside any function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.

They all have Global Scope: */
var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope

/* Function Scope
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope: */
function myFunction() {
    var carName = "Volvo";   // Function Scope
}
function myFunction() {
    let carName = "Volvo";   // Function Scope
}
function myFunction() {
    const carName = "Volvo";   // Function Scope
}