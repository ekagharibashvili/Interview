// Object.setPrototypeOf method sets the prototype of specified object to another object or null.

// syntax
// Object.setPrototypeOf(obj, prototype)

// Parameters
// obj - which is to have its prototype set
// prototype - The object's new prototype ( object or null).

// decroption
// Throws a TypeError exception if the object whose [[Prototype]] is to be modified is non-extensible 
// according to Object.isExtensible(). Does nothing if the prototype parameter isn't an object or null 
// (i.e., number, string, boolean, or undefined). Otherwise, this method changes the [[Prototype]] of obj to the new value.

// Object.setprototype is in EcmaScript 2015 specification 
// It is generally considered the proper way to set the prototype of an object, vs.
//the more controversial Object.prototype.__proto__ property.
/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function(["@arg"(s)], "@function_body") to that chain.
* Returns the function.
*
**/

Object.appendChain = function (oChain, oProto) {
    if (arguments.length < 2) {
        throw new TypeError('Object.appendChain - Not enough arguments');
    }
    if (typeof oProto !== 'object' && typeof oProto !== 'string') {
        throw new TypeError('second argument to Object.appendChain must be an object or a string');
    }

    var oNewProto = oProto,
        oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

    for (var o1st = this.getPrototypeOf(o2nd);
        o1st !== Object.prototype && o1st !== Function.prototype;
        o1st = this.getPrototypeOf(o2nd)
    ) {
        o2nd = o1st;
    }

    if (oProto.constructor === String) {
        oNewProto = Function.prototype;
        oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
        this.setPrototypeOf(oReturn, oLast);
    }

    this.setPrototypeOf(o2nd, oNewProto);
    return oReturn;
}


///////////////////
function MySymbol() {
    this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'

//
function Person(sName) {
    this.identity = sName;
}

var george = Object.appendChain(new Person('George'),
    'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'


// examples setPrototypeof

var dict = Object.setPrototypeOf({}, null);

// pollyfill

if (!Object.setPrototypeOf) {
    // Only works in Chrome and FireFox, does not work in IE:
    Object.prototype.setPrototypeOf = function (obj, proto) {
        if (obj.__proto__) {
            obj.__proto__ = proto;
            return obj;
        } else {
            // If you want to return prototype of Object.create(null):
            var Fn = function () {
                for (var key in obj) {
                    Object.defineProperty(this, key, {
                        value: obj[key],
                    });
                }
            };
            Fn.prototype = proto;
            return new Fn();
        }
    }
}