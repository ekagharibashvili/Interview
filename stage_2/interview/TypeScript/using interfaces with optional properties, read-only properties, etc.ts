// Interfaces
// One of TypeScript's core principle is that type checking focuses on the shape that values have.
// This is sometimes called "duck typing" or "structural subtyping". In TypeScript, interfaces fill the role of naming these types and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

// Our first Interface 
// The easiest way to see how interfaces work is to start with a simple example:
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// The type checker checks the call to prinLabel. The printLabel function has a single parameter 
// that requires that the object passed in has a property called label of type string.

// We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:

interface LabeledValue {
    label: string;
}

function prinLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let mObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// The interface labeledValue is a nae we can now use to describe the requirement in the previous example.
// It still represents having a single property called label that is of type string. 
// if the object we pass to the function meets the requirements listed, then it's allowed.

// It's worth pointing out that the type checker does not require that these properties come in any sort of order,
// only that the properties the interface requires are present and have the required type.


// Optional Properties
// Not all properties of an interface may be required. 
// Some eexist under sertain conditions or may not be there at all.
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

// optional property denoted by a ?(question mark) at the end of the property name in the declaration


// Readonly properties
// Some properties should only be modifiable when an object is first created.
// You can specify this by putting readonly before the name of the property:
interface Point {
    readonly x: number;
    readonly y: number;
}

// You can construct a Point by assigning an object literal. After the assignment, x and y can't be changed.
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
// Cannot assign to 'x' because it is a read-only property.
