// Object.assign()
// ეს მეთოდი აკოპირებს ყველა ფროფერთიეს ერთი ან რამდენიმე source ობიექტიდან target ობიექტში. ის აბრუნებს შეცვლილ target ობიექტს.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// სინტაქსი 
Object.assign(target, ...sources)

// Parameters

// target - სადაც ვრცელდება წყაროს ფროფერთიები და ბრუნდება შეცვლილი ობიექტი.
// source - ობიექტები რომელებიც შეიცავს იმ ფროფერთიებს, რომლის გავრცელებაც გვინდა. 

// Return value
// target object

// Description
// target ობიექტის ფროფერთიებს გადაეწერება სოურც ობიექტის ფროფერთიები. თუ მათ აქვს მსგავსი key. შემდეგი key გადაეწერება წინას.
// Object.assign აკოპირებს მხოლოდ enumarable და own ფროფერთიებს სოურს ობიექტიდან ტარგეტ ობიექტში.
// ის იყენებს [[ GET ]] სოურსზე და [[Set]]-ს Targetზე. ანუ ის იძახებს getters და setters.
// ამიტომ ის ანიჭებს ფროფერთიებს, კოპირებით ან ახალი ფროფერთიეს განსაზღვრით.  ამან შეიძლება, ის შეუფერებელი გახადოს ახალი ფროფერთიების
// დამერჯვა პროტოტიპში თუ მერჯ სოურსი შეიცავს getters.

// ფროფერთის დეფინიციის კოპირებისთვის(მათ შორის რიცხოვნობის) პროტოტიპში, გამოვიყენოთ
//  use Object.getOwnPropertyDescriptor() and Object.defineProperty() instead.

// ორივე String და Symbol ფროფერთიები დაკოპირდება.

// ერორის შემთხვევაში, მაგალითად მაშინ როცა ფროფერთი არის non-writable, იქნება typeError-ი და ტარგეტ ობიექტი შეიცვლება,
// იმ შემთხვევაში თუ ფროფერთიები დაემატება ერორამდე.

// Objetct.assign არ მუშაობს null და undefined სოურსებზე.

// Cloning an object
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// Warning for Deep Clone
// deep cloning-ისთვის ჩვენ უნდა გამოვიყენოთ ალტერნატივა, იმიტომ რომ Object.assign აკოპირებს ფროფერთიების მნიშვნელობებს.

// if the source value is reference to an object, it only copies the reference value.
function test() {
    'use strict';

    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

    // Deep Clone
    obj1 = { a: 0, b: { c: 0 } };
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();

// Meging Objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

// Merging objects with same properties
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// The properties ara overwritten by the later objects, which have the same properties.


// Copying Symbol-typed properties
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

// Properties on the prototype chain and non-enumerable properties cannot be copied
const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
    bar: {
        value: 2  // bar is a non-enumerable property.
    },
    baz: {
        value: 3,
        enumerable: true  // baz is an own enumerable property.
    }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }

// Primitives will be wrapped to objects
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// Exceptions will interrupt the ongoing copying task
const target = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar);  // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo);  // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz);  // undefined, the third source will not be copied either.


// Copying accessors
const obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  let copy = Object.assign({}, obj);
  console.log(copy);
  // { foo: 1, bar: 2 }
  // The value of copy.bar is obj.bar's getter's return value.
  
  // This is an assign function that copies full descriptors
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
  
      // By default, Object.assign copies enumerable Symbols, too
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  copy = completeAssign({}, obj);
  console.log(copy);
  // { foo:1, get bar() { return 2 } }

// when we create object property with assignment or dot notation, enumarable default value is true(we can copy the property).
// when we create property with some method, like Object.create and Object.defineProperty, enumarable default value is false
// so we can't copy the properties.
