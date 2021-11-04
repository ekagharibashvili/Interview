// Modulus
// as our application grow bigger, we want split into mutlipe files, so called 'modulus'.
// A module may contain class or library of function for a specific purpose.
// A module is just a file. One script is one module. As simple as that.
//Modules can load each other and use special directives export and import to interchange functionality, 
// call functions of one module from another one:

// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

// For instance, if we have a file sayHi.js exporting a function:
// 📁 sayHi.js
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// the another file may import ande use it
// 📁 main.js
import { sayHi } from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!

/* Let’s run the example in-browser.

As modules support special keywords and features, we must tell the browser that a script should be 
treated as a module, by using the attribute <script type="module">.

Like this: */

// <!doctype html>
<script type="module">
    import {sayHi} from './say.js';

    document.body.innerHTML = sayHi('John');
</script>

// The browser automatically fetches and evaluates the imported module (and its imports if needed), 
// and then runs the script.
/* Modules work only via HTTP(s), not locally
If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. 
Use a local 
web-server, such as static-server
 or use the “live server” capability of your editor, such as VS Code Live Server Extension to test modules. */

/*  Always “use strict”
Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error. */

{/* <script type="module">
  a = 5; // error
</script> */}

// in the module 'this' is undefined