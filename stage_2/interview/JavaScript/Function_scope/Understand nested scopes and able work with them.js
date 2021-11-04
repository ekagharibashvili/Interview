// Nested scopes
// just like functions in Javascript, a scope can be nested inside another scope
// For example:
var name = 'Peter';
function greet() {
    var greeting = 'Hello';
    {
        let lang = 'English';
        console.log(`${lang}: ${greeting} ${name}`);
    }
}
greet();

// Here we have 3 scopes within each other. First, block scope which is nested in function scope, whic is turn nested in global scope.
