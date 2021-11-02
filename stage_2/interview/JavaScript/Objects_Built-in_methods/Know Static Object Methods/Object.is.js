// Object.is determines whether two values are the same values.

// two values arse same if
/* both undefined
both null
both true or both false
both strings of the same length with the same characters in the same order
both the same object (meaning both values reference the same object in memory)
both numbers and
both +0
both -0
both NaN
or both non-zero and both not NaN and both have the same value */

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0 / 0);              // true
Object.is(NaN, Number.NaN)        // true

// pollyfill
if (!Object.is) {
    Object.defineProperty(Object, "is", {
        value: function (x, y) {
            // SameValue algorithm
            if (x === y) {
                // return true if x and y are not 0, OR
                // if x and y are both 0 of the same sign.
                // This checks for cases 1 and 2 above.
                return x !== 0 || 1 / x === 1 / y;
            } else {
                // return true if both x AND y evaluate to NaN.
                // The only possibility for a variable to not be strictly equal to itself
                // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
                // This checks for case 3.
                return x !== x && y !== y;
            }
        }
    });
}