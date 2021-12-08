// Primitive Types
// TypeScript supports 7 primitive types number, string, boolean, bigint, symbol, undefined and null.
// All other data types are objects in Typescript. A priitive data type is a data that is not an object and has no methods.
// All primitives are immutable.

// String
// We use the string data type to store textual data. The string value is enclosed in double-quotes("") or single quotes(').

// Example
let message = 'Hello World';
let color = 'red';

// Multiline string
// The strings can span multiple lines in such cases the strings are surrounded by backtick/backquote(`) character.

let sentence: string =`Hello, welcome to the world of typescript, 
    the typed super of javascript`


// boolean
// The Boolean Data Type is simple true/false value
// Example

let isDone: boolean = false; 


// The number data type in TypeScript are 64-bit floating-point values and are used to represent integers and fractions.
// TypeScript also supports the hexadecimal and decimal literals. It also supports the binary and octal literals introduces in ECMASXRIPT 2015.

 
let decimal: number = 10; 
let hex: number = 0xa00d;       //hexadecimal number starts with 0x
let binary: number = 0b1010;    //binary number starts with 0b 
let octal: number = 0o633;      //octal number starts with 0c


// Bigint
// bigint is the new introduction in TypeScript 3.2. This will provide a way to represent whole numbers larger than 253. 
// You can get a bigint by calling the Bigint() function or by writing out a Bigint literal by adding an n to the end of any integer numeric literal as shown below.
 
 
let big1: bigint = BigInt(100); // the BigInt function
let big2: bigint = 100n;        // a BigInt literal.  end with n



// Null and undefined 
// The javascript has two ways to refer to the null.
// They are null and undefined and are two separate data types in Typescript as well. 
// The null and undefined are subtypes of other types. That means you can assign null and undefined to something like a number.

let u: undefined = undefined;
let n: null = null;

// undefined denotes is given to all uninitialized variables.
// null represents the intentional absence of object value.


// symbol 
// The symbol is the new primitive type introduces in ES6 and represents the javaScript symbol primitive type.
// it represents unique tokens that may be used as keys for object properties. It is created by the global Symbol() function.
// Each time the Symbol() function is called, a new unique symbol is returned. 

// TypeScript Objects 
// Everything that isn't a primitive type in TypeScript is a subclass of the object type.
// Examples are class, interface, function, constructor, array, tuple, etc. 

// Summary
// Using types we define the data type of variables. if we did not specify the type, then typescript treats it as any type.
// Any type is the base type of all other types. The primitive types are number, string, bigint,
// boolean, null, and undefined. All other types are derived from the objects.