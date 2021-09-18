// 8. Object and it's methods
// ობიექტ კლასი წარმოადგენს ერთ-ერთ მონაცემთა ტიპს ჯავასკრიპტში. ის ინახავს key value წყვილებს.

 // delete method შლის ფროფერთის ობიექტიდან
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has('bar'));
// expected result: false

// სინტაქსი
delete(key)
// Object კონსტრუქტორი ქმნის ახალ ობიექტს
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// სტატიკური მეთოდები
Object.assign()

// ეს მეთოდი აკოპირებს ფროფერთიებს ერთი ან რამდენიმე სოურს ობიექტიდან ტარგეტ ობიეტში. ის აბრუნებს შეცვლილ ტარგტ ობიექტს.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// სინტაქსი
Object.assign(target, ...sources)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.create()
// ქმნის ახალ ობიექტს და პროტოტიპად იყენებს უკვე არსებულ ობიექტს
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"

// სინტაქსი
Object.create(proto)
Object.create(proto, propertiesObject)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty()

// განსაზღვრავს ახალ ფროფერთის პირდაპირ ობიექტში ან ცვლის უკვე არსებულ ფროფერთის და აბრუნებს ობიექტს,
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
console.log(Object.getOwnPropertyDescriptors(object1))

// სინტაქსი
Object.defineProperty(obj, prop, descriptor)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperties()
// განსაზღვრავს ახალ ფროფერთიებს პირდაპირ ობიექტში. და აბრუნებს ახალ ობიექტს writable - ნიშNავს რო შეცვლა შეგვიძლია.
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// expected output: 42

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.entries()
// აბრუნებს მასივს გადაცემული ობიექტის. აბრუნებს [key: value] წყვილებს. ეს ჰგავს იტერაციას, როგორიცაა for... in ლუპი. 
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.freeze()
// ეს მეთოდი ყინავს ობიექტს. ანუ აღარ შეგვიძლია არც შეცვლა, არ წაშლა და არც ახალი ფროფერთიების დამატება ობიექტში.
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.fromEntries()
// ეს მეთოდი გარდაქმნის ლისტს key: value წყვილში
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.getOwnPropertyDescriptor()

// ეს მეთოდი აგდებს მონაცემებს ობიექტის ერთ-ერთ ფროფერთიზე
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.getOwnPropertyDescriptors()
// ეს მეთოდი აბრუნებს ყველა ფროფერთი აღწერას(შეიძლება თუ არა შეცვლა და ა.შ)
const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// expected output: true

console.log(descriptors1.property1.value);
// expected output: 42

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.getOwnPropertyNames()

// აბრუნებს ობიექტის ფროფერთიებბის მასივს
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.getOwnPropertySymbols()

// აბრუნებს მასივს symbol ფროფერთიების.
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// expected output: 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.getPrototypeOf()
// აბრუნებს მითითებული ობიექტის პროტოტიპს
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.is()
// განსაზღვრავს ორი მნიშნელობა არის თუ არა ერთი და იგივე მნიშვნელობის
Object.is(value1, value2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Object.isExtensible()

// განსაზღვრავს ობიექტი არის თუ არა გაფართოებადი ანუ შეუძლია თუ არა ახალი ფროფერთიების დამატება.
const object1 = {};

console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// expected output: false


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.isFrozen()
// განსაზღვრავს ობიექტის არის თუ არა გაყინული
const object1 = {
  property1: 42
};

console.log(Object.isFrozen(object1));
// expected output: false

Object.freeze(object1);

console.log(Object.isFrozen(object1));
// expected output: true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Object.isSealed()
// გამოაქვს ობიექტი არის თუ არა დალუქული
const object1 = {
  property1: 42
};

console.log(Object.isSealed(object1));
// expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// expected output: true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.keys()
// აბრუნებს ობიექტის ფროფერთიების მასივს
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.preventExtensions()
// ხელში უშლის ობიექტში ახალი მეთოდების დამატებას.
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.seal()
// ლუქავს ობიექტს ამიტომ ფროფერთიების შეცვლა არ შეიძლება, მაგრამ ვალიუების კი.
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
Object.seal(obj)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.setPrototypeOf()

// ადგენს განსაზღვრული ობიექტის პროტოტიპს.
// სინტაქსი
Object.setPrototypeOf(obj, prototype)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.values()
// აბრუნებს ფროფერთიების მნიშვნელობების მასივს
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.constructor
// აბრუნებს რეფერენსს ობიექტის კონსტრუქტორის ფუნქციაზე რომელიც შექმინილია ინსტანს ობიექტზე
let o = {}
o.constructor === Object // true

let o = new Object
o.constructor === Object // true

let a = []
a.constructor === Array // true

let a = new Array
a.constructor === Array // true

let n = new Number(3)
n.constructor === Number // true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.hasOwnProperty()
// აბრუნებს ლოგიკურ ჩანაწერს ანუ აქვს თუ არაქვს ობიექტს მითითებული ფროფერთი.
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.isPrototypeOf()
// ამოწმებს არის თუ არა ობიექტსი სხვა ობიექტის პროტოტიპის ჯაჭვში.
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
// expected output: true
console.log(Bar.prototype.isPrototypeOf(bar));
// expected output: true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.toString()
// აბრუნებს სტრინგს რომელიც წარმოადგენს ობიექტს
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// expected output: "Gabby"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.valueOf()

// აბრუნებს პრიმიტიულ ვალიუს სპეციფიური ობიექტის
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// expected output: 7



