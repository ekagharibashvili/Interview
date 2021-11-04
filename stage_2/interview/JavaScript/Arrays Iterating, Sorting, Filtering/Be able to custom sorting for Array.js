Array.prototype.sort()
// sort method sorts the elements of an array in place and returns sorted array.
// The default sort order is ascending 
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { })

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { })

/*
compareFunction Optional
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings,
then sorted according to each character's Unicode code point value.

firstEl
The first element for comparison.

secondEl
The second element for comparison. */

/* compareFunction(a, b) return value	sort order
> 0	sort b before a
< 0	sort a before b
=== 0	keep original order of a and b */

// So, the compare function has the following form:

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

/* 
To compare numbers instead of strings, the compare function can subtract b from a. The following function
 will sort the array in ascending order (if it doesn't contain Infinity and NaN): */
function compareNumbers(a, b) {
    return a - b;
}
// the sort method can be conveniently used with function expressions:
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

// ES2015 provides arrow function expressions with even shorter syntax.

// Arrays of objects can be sorted by comparing the value of one of their properties.

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
    return a.value - b.value;
});

// sort by name
items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});