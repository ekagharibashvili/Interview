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
