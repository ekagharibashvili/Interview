// 9. Functions(types of functions, parameters)

// Function Declaration(Fumction definition and function statement)
function square(number) {
    return number * number;
}

// პრიმიტიული ტიპის პარამეტრები ფუნქციაში გადაცემულია ველიუთი.
// თუ ფუნქციას გადავცემთ ობიექტს პარამეტრად  და ფუნქცია შეცვლის ობიექტის ფროფერთის, ცვლილება აისახება ფუნქციის გარეთაც.
function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)



// Function expressions 
// function expression არის ფუნქცია სახელის გარეშე, ასეთი ფუნქცია შეიძლება იყოს ანონიმური.
const square = function (number) { return number * number }
var x = square(4) // x gets the value 16

// ანონიმური ფუნქცია შეიძლება შესრულდეს გამოძახების გარეშე
(function (number) {
    return number * number;
  })();


// თუმცა სახელი შეგვიძლია მივაწოდოთ ფუნქციის ექსფრეშენში, სახელის მიწოდება აადვილებს ფუნქციასთან მიწვდომად და დებაგინგს.
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))

// ფუნქცის ექსპრეშენი მოსახერხებელია მაშინ როცა ფუნქციას გადავცემთ პარგუმენტად ფუნქციაში. 
// შემდეგი მაგალითი გვაჩვენებს map ფუნქციას რომელსაც პირველი არგუმენტი აქვს ფუნქცია ხოლო შემდეგი კი მასივი.
function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

const f = function (x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

// ფუნქცია აბრუნებს:  [0, 1, 8, 125, 1000].


// ფუნქციია შეგვიძ₾ია შევქმნათ კონსტრუქტორით
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, ...  argN, functionBody)
const adder = new Function('a', 'b', 'return a + b');

// ჯავასკრიპტში ფუნქცია შეგვძილია გავსაზღვროთ რაღაც პირობის მიხედვით.
// მაგალითად ფუნქციის დეფინიძია ხდება იმ შემთხვევაში თუ num არის ნულის ტოლი.
var myFunc;
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = 'Toyota';
    }
}


// Calling Functions
// ფუნქციის განსაზღვრა არ ნიშნავს გამოძახებას
// ფუნქციის გამოძახება ხდება შემდეგნაირად
square(5);

// ფუნქციის დეკლარაციიის გზა არის hoisted, ფუნქციის ექსპრეშენი კი არა.
console.log(square(5));
/* ... */
function square(n) { return n * n }


// რეკურსია
// რეკურსია არის პროცესი როცა ფუნქციას შეუძლია გამოიძახოს  საკუთარი თავი თვითონვე.
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}



// function expression-ის ES5+ კომპაქტური ალტერნატივა არის arrow function, თუმცა ის არ შეგვიძლია 
// გამოვიყენოთ ყველა სიტუაციაში. მაგალითად მასთან ვერ გამოვიყენებთ call, apply და bind მეთოდებს.
// Traditional Anonymous Function
// function(a, b){
 //   return a + b + 100;
 // }
  
  // Arrow Function
  (a, b) => a + b + 100;

arguments.callee()
// როგორც ვიცით, ფუნქცია არის ობიექტი. როგორც ობიექტს, მას აქვს გარკვეული ფროფერთიები და 
// მეთოდები. ერთ-ერთი ფროფერთი სწორედ არის arguments-ს ფროფერთი, 
// რომელსაც თავის მხრივ აქვს callee() მეთოდი, რომელიც ეძახის ამ ფუნქციას. ამ მეთოდის გამოყენება მიზანშეწონილია მაშინ, 
// თუ ვერ ხერხდება ფუნქციის სახელის დადგენა (როცა ფუნქციაც ანონიმურია და არც ცვლადზეა მინიჭებული).

(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
})(5)
// ფუნქციები შეიძლება იყოს ჩაშენებული ერთმანეთში. ეს ქმნის closure-ს.


// rest პარამეტრი არის პარამეტრი ფუნქციაში გადაცემული რომელიც წარმოადგენს მასივს.
function myFun(a,  b, ...manyMoreArgs) {
}

myFun("one", "two", "three", "four", "five", "six")

// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

// დესტრუქტურირება
const [a, b, ...rest] = [10, 20, 30, 40, 50]; // a = 10, b = 20, rest = [30, 40, 50]


// ფუნქციას შეიძლება ჰქონდეს მეთოდები და ფროფერთიები რადგან ის ობიექტია.
// ფროფერთი length ითვლის პარამეტრების რაოდენობას ფუნქცაში.
function func2(a, b) {}
func2.length // 2

// Predefined functions არის eval(), parsefloat() და ა.შ'