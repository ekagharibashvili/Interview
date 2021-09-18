//7. Array and it's methods
// ჯავასკტიპტ Array კლასი არის გლობალური ობიექტი რომელიც გამოიყენება მასივის შესაქმნელად. რომელიც არის high-level list, როგორც ობიექტი.
// მასივს აქვს მეთოდები რომელიც შეგვიძლია გამოვიყენოთ მუტაციისთვის და ა.შ.

// Common operations 

// შექვმნათ მასივი
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

//  მივწვდეთ მასივის ელემენტს ინდექსის დახმარებით.

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana


// გადავატაროთ ლუპი მასივზე

fruits.forEach(function(item, index, array) {
    console.log(item, index);
  })
  // Apple 0
  // Banana 1



// დავამატოთ ელემენტი მასივის ბოლოში
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]



// ამოვშალოთ მასივის ბოლო ელემენტი
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]



// ამოვშალოთ მასივის პირველი ელემენტი
let first = fruits.shift() // remove Apple from the front
// ["Banana"]



// დავამატოთ ელემენტი მასივის თავში
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]


// ვიპოვნოთ მასივის ელემენტის ინდექსი
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1


// ამოვშალოთ ელემენტი მასივიდან ინდექსის პოზიციის დახმარებით
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]


// ამოვშალოთ ელემენტები ინდექსის პოზიციიდან (რამდენიმე)
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// ეს არის მაგალითი როგორ იშლება ატემი, n განსაზღვრავს რამდენი ელემენტი უნდა წავშალოთ მოცემული ინდექსის მერე
// pos პოზიციიდან იწყება ათვლა და გრძელდება არაის ბოლომდე.

console.log(vegetables)
// ["Cabbage", "Carrot"] (როგორც ვხედავთ ამ მეთოდმა შეცვალა ორიგინალი არრაი)

console.log(removedItems)
// ["Turnip", "Radish"] ისინი რაც ამოიშალა არაიდან


// დავაკოპიროთ მასივი
let shallowCopy = fruits.slice() // ამ მეთოდით ვაკოპირებთ მასივს
// ["Strawberry", "Mango"]
console.log(fruits.slice(0, 1))
// ["Strawberry"]
console.log(fruits.slice(0,2))
// ["Strawberry", "Mango"] გამოიტანს ორივეს, პირველი ელემენტი განსაზღრავს დაწყების ინდექსს მეორე კი ბოლო ელემენტის მომდევნო ინდექსს.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// წვდომა მასივის ელემენტებზე
// ჯაბასკრიპტის მასივის ინდექსირება ხდება 0დან. პირველი ელემენტი არის 0 ინდექსს ბოლო კი მასივის length-1 ინდექსზე.

// არასწორი ინდექსის გამოყენების შემდეგ დააბრუნებს undefined-ს.
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'

// მასივის ელემენტები არის ფროფერთიები როგორც ობიექტისთვის არის toString.
// მასივის ელემენტზე წვდომა დონ ნოტაციით გამოიწვევს ერორს.
// console.log(arr.0) // a syntax error/
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// console.log(years.0)   // a syntax error
console.log(years[0])  // works properly

// მასივის length და ზოგიერთი რიცხვითი მეთოდი დაკავშირებულია ერთმანეთთან.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constructor
Array()
// ქმნის ახალ არაი ობიექტს.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// სტატიკური მეთოდები

Array.from()
// ქმნის კოპირებულ მასივს, მასივის ან იტერირებადი ობიექტის მიხედვით.
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]



Array.isArray()
// ეს მეთოდი განსაზღვრავს არის თუ არა მასივი გადაცემული მნიშვნელობა.
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false


Array.of()
// ქმნის მასივს არგუმენტების მიხედვით
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]

// Array სინგლ არგუმენტით ქმნის ცარიელ მასივს გადაცემული რიცხვის მიხედვით. რომელიც იქნება მასივის სიგრძე. 
// Array.of კი გადაცემული სინგ არგუმენტითაც მასივს ქმნის რომელშიც მოთავსებულია ერთი ელემენტი ინიცირებული გადაცემული არგუმენტის მიხედვით.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// properties
// length ითვლის მასივის ელემენტებს

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instance Methods



Array.prototype.at()
// იღებს ინტეჯერ მნიშნელობას და აბრუნებს აიტემს ამ ინდექსზე მყოფს. ნეგატიური ინტეჯერ ათვლას იწყებს ბოლოდან.
// ბოლო აიტემისთვის შეგვიძ₾ია გამოვიყენოთ array.at(-1).
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.concat()
// გამოიყენება ერთი ან რამდენიმე მასივის შერწყმისთვის.  არ ცვლის არსებულ მასივებს და აბრუნებს ახალს.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Array.prototype.reduce()

// reduce მეთოდი ასრულებს იუზერის მიერ მიწოდებულ 'reducer' ქოლბექ ფუნქციას არაის თითოეულ ელემენტზე.
// მნიშნელობას აბრუნებს წინა ელემენტზე გაანგარიშების შემდეგ. 
// ფინალური შედეგი reducer-ს გაშვების შემდეგ არის single value.
// ყველაზე მარტივი ქეისი reduce() - ის არის, დააბრუნოს მასივისი ელემენტების ჯამი.
// reducer ოძრაობს არაის ელემენტიდან ელემენტზე, თითოეული ნაბიჯზე ის ამატებს მიმდინარე მასივის ელემენტის მნიშვნელობას წინა ნაბიჯის შედეგს.
// მანამ სანამ მასივის ელემენტები არ ამოიწურება.

// ეს ვაჩვენოთ შემდეგ ინტერაქტიულ მაგალითში. 
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// სინტაქსი
// Arrow function
reduce((previousValue, currentValue) => { } )
reduce((previousValue, currentValue, currentIndex) => { } )
reduce((previousValue, currentValue, currentIndex, array) => {} )
reduce((previousValue, currentValue, currentIndex, array) => { }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(previousValue, currentValue) {  })
reduce(function callbackFn(previousValue, currentValue, currentIndex) {  })
reduce(function callbackFn(previousValue, currentValue, currentIndex, array){})
reduce(function callbackFn(previousValue, currentValue, currentIndex, array) {  }, initialValue)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.toString()
// სტრინგის სახით აბრუნებს მასივის ელემენტებს
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.sort()
// ალაგებს მასივს და აბრუნებს დალაგებულ მასივს. ელემენტების სტრიქონად დალაგების დახმარებით, რომელიც აღმავალია.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.some()
// ამოწმებს აკმაყოფილებს თუ არა მასივის რომელიმე ელემენტუ გადაცემული ფუქნქციის პირობას.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.reverse()

// აბრუნებს მასივის ელემენტებს, პირველი ელემენტი ხდება ბოლო, ხოლო ბოლო ელემენტი პირველი
// ცვლის ორიგინალ არაის
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.map()
// ქმნის ახალ მასივს, რომელიც შევსებულია ელემენტებით, რომელიც მიიღება წინა მასივის თითოეულ ელემენტზე რაღაც ფუნქციის მოქმედებით.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.filter()
// ქმნის ახალ მასივს იმ ელემენტებით რომელიც გაივლის მოცემულ პირობას
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.forEach()
// ასრულებს ერთ ფუნქციას ერთხელ, თითოეული მასივის ელემენტისთვის.
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.entries()

// შეიცავს key: value წყვილებს
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.every()


// ამოწმებს გადის თუ არა ყველა ელემენტი ტესტს
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.find()

// აბრუნებს მიწოდებული მასივის პირველ ელემენტის მნიშვნელობას რომელიც აკმაყოფილებს ფუნქციის პირობას.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.findIndex()
// პულობს იმ ელემენტის ინდექსს რომელიც აკმაყოფილებს პირობას, წინააღმდეგ შემთხვევაში აბრუნებს -1ს.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.join()
// აჯოინებს სტრინგში.

Indexof() //აბრუნებს პირველ ელემენტის ინდექსს
lastindexof() // აბრუნებს ბოლო ელემენტის ინდექსს


Array.prototype.keys()
// აბრუნებს ელემენტების ინდექსებს

Array.prototype.includes()
// აბრუნდებს შეიცავს თუ არა მასივი მიწოდებულ მნიშვნელობას, true და false-ით