// This is like a function declaration with only the parameter list and return type given. 
// Each parameter in the parameter list requires both name and type:
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Once defined, we can use this function type interface like we would other interfaces. 
// Here, we show how you can create a variable of a function type and assign it a function value i=of the same type.

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
};

// For function types to correctly type check, the names of the parameters do not need to match.
// We could have, for example, written the above example like this:
/* let mySearch: SearchFunc;
 
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}; */

