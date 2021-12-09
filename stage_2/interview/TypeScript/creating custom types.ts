// Custom type Syntax
// In TypeScript, the syntax for creating custom types is to use the type keyword followed by the type name 
// and then assignment to a {}(curly braces) block with the type properties. Take the following:

type Programmer = {
    name: string;
    knownFor: string[];
};

// The syntax is like an object literal, where the key is the name of the property and the value is the type this property should have.
// This defines a type Programmer that must be an object with the name that holds a string value and knownFor key that holds an array of strings.

// Using your custom type is the same a using any of the basic types. Add a double colon and then add your type name:
type Programme = {
    name: string;
    knownFor: string[];
};

const ada: Programmer = {
    name: 'Ada Lovelace',
    knownFor: ['Mathematics', 'Computing', 'First Programmer']
};

