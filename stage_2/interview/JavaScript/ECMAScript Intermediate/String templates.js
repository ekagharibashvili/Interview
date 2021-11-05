// Template literals (Template strings)

// Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.

// Untagged template literals result in strings, which makes them useful for string interpolation (and multiline strings, 
// since unescaped newlines are allowed).
/* Tagged template literals call a function (the tag function) with an array of any text segments from 
the literal followed by arguments with the 
values of any substitutions, which is useful for DSLs. */

/* Template literals are sometimes informally called template strings, but they aren't string literals and 
can't be used everywhere a string 
literal can be used. Also, a tagged template literal may not result in a string; 
it's up to the tag function what it creates (if anything). */

// Syntax
// Untagged, these create strings:
`string text`

    `string text line 1
 string text line 2`

    `string text ${expression} string text`

// Tagged, this calls the function "example" with the template as the
// first argument and substitution values as subsequent arguments:
example`string text ${expression} string text`

    // Description
    //Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

    /* Template literals can contain placeholders. These are indicated by the dollar sign and 
    curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) 
    get passed to a function. */

    // To escape a backtick in a template literal, put a backslash (\) before the backtick.

    `\`` === '`' // --> true

/* Multi-line strings
Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get multi-line strings: */

console.log('string text line 1\n' +
    'string text line 2');
// "string text line 1
// string text line 2"

// Using template literals, you can do the same like this:
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

// Expression interpolation
// In order to embed expressions within normal strings, you would use the following syntax:

let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
// Now, with template literals, you are able to make use of the syntactic sugar, making substitutions like this more readable:

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

/* In certain cases, nesting a template is the easiest (and perhaps more readable) way to have configurable strings.
 Within a backticked template, it is simple to allow inner backticks by using them inside a placeholder ${ } within the template.

For instance, if condition a is true, then return this templated literal.

In ES5: */
let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');

// In ES2015 with template literals and without nesting:
const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;

// In ES2015 with nested template literals:
const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;