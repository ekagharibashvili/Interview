// implement polyfill
if (!Array.prototype.flat) {
    Array.prototype.flat = function (depth) {

        'use strict';

        // If no depth is specified, default to 1
        if (depth === undefined) {
            depth = 1;
        }

        // Recursively reduce sub-arrays to the specified depth
        var flatten = function (arr, depth) {

            // If depth is 0, return the array as-is
            if (depth < 1) {
                return arr.slice();
            }

            // Otherwise, concatenate into the parent array
            return arr.reduce(function (acc, val) {
                return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
            }, []);

        };

        return flatten(this, depth);

    };
}

let arr = [1, 2, [2, 2, [2]]]
console.log(arr.flat(2))