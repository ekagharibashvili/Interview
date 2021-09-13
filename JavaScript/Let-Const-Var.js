// 2. let vs const vs var

// Scope of var
// სკოუპი არსებითად ნიშნავს სად არიან ეს ცვლადები ხელმისაწვდომი გამოსაყენებლად. Var დეკლარაციას აქვს გლობალური სკოუპი და ფუნქციის ლოკალური სკოუპი.
// გლობალური არის როცა var ცვლადი განაზღვრულია ფუნქციის გარეთ და ის შეგვიძლია გამოვიყენოთ მთლიან window-ზე.
// როცა var დეკლარირებულია ფუნქციის შიგნით ეს ნიშნავს იმას რომ მისი გამოყენებე შეგვიძლია მხოლოდ ფუნქციის შიგნით.
// უფრო რომ გავიგოთ შევხედოთ მაგალითს ქვემოთ: 
var greeter = "hey hi";

function newFunction() {
    var hello = "hello";
}
// აქ greeter არის გლობალური ხოლო hello ლოკალური სკოუპის. hello-ს არ შეგვიძლია მივწვდეთ ფუნქციის გარეთ. მაგალითისთვის:
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined

// ჩვენ მივიღეთ ერორი რადგან ვეცადეთ ლოკალურ ცვლადზე გარედან მიწვდომა.

// var ცვლადის  გამოცხადება შეგვიძლია ხელახლა და დააფდეითება. იმავე სკოუპში და ჩვენ არ მივიღებთ ერორს.
var greeter = "hey hi";
var greeter = "say Hello instead";

// და ასევე
var greeter = "hey hi";
greeter = "say Hello instead";

// Hoisting of var

// Hoistingი არის ჯავასკრიპტის მექანიზმი, სადაც ცვლადები და დეკლარირებული ფუნქციები გადადიან სკოუპის ზედა ნაწილში სანამ კოდი შესრულდება.
// ეს იმას ნიშნავს რომ თუ ჩვენ ამას გავაკეთებთ:
console.log(greeter);
var greeter = "say hello"

// ის ასე განიმარტება
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

// აქედან გამომდინარე, რადგან var-ს კონსოლის შემდეგ ჰქონდა ველიუ მინიჭებული. მისი ველიუ იქნება undefined.(განუსაზღვრელი)

// Problem with var

// var-ს აქვს თავისი სისუსტე, რომლსაც აგიხსნით ქვემოთ:
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) // "say Hello instead"

// სანამ times მეტია 3-ზე condition(პირობა) აბრუნებს true-ს. greeter განსაზღვრულია თავიდან და ის ტოლია "say Hello instead"-ის.
// ერთი და იმავე სახელის ცვლადის თავიდან გასაზღვრა სხვადასხვა ადგილას შექმნის პრობლემას.  თუ greeter-ს გამოვიყენებთ კოდის სხვა ნაწილში,
// შედეგი შეიძლება იყოს მოულოდნელი და არასასურველი. ეს გამოიწვევს ბევრ ბაგს(შეცდომას) კოდში. ამიტომაცაა let და const საჭირო.

// Let
// ცვლადის დეკლარირებისას უპირატესობა ენიჭება let keyword-ს. ამით თავიდან ვიცილებთ იმ სიურპრიზებს რის "ბედნიერებასაც" var გვანიჭებს.

// let is block scoped 
// block არის კოდის ნაწილი, რომელიც შემოსაზღვრულია {} -ამით.(ხვეული ბრეკეტებით). ყველაფერი მის შიგნით არის ბლოკი.
// ცვლადი რომელიც let ქივორდითაა დეკლარირებული, ხელმისაწვდომია მხოლოდ ამ ბლოკში.
// მოვიყვანოთ მაგალითი:

let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined

// ვხედავთ რომ ბლოკის გარეთ ცვლადი hello არ მუშაობს და ჩვენ ვიღებთ ერორს. ეს იმიტომ რომ let არის Block scoped.

// let შეგვიძლია დავააფდეითოდ მაგრამ მისი თავიდან დეკლარირება არ შეგვიძლია.
// მაგალითისთვის
let greeting = "say Hi";
greeting = "say Hello instead"; // ეს კოდი იმუშავებს

// მაგრამ შემდეგი არა
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// თუ ერთი და იმავე ცვლადს სხვადასხვა სკოუპში განვსაზღვრავთ მაშინ არ იქნება ერორი.
let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
// ერორი იმიტომ არ გვაქვს რომ var ისგან განსხვავებით let არის Block scoped და აქედან გამომდინარე შეგვიძლია, ერთი და იმავე სახელის ცვლადი
// თავიდან განვსაზღვროთ სხვადასხვა სკოუში და გამოვიყენოთ უპრობლემოდ.

// Hoisting of let
// როგორც var ისე let-ით დეკლარირებული ცვლადი არის აწეული ზემოთ. განსხვავებით var-სგან, როცა მას ვიძახებთ დეკლარაციამდე და აგდებს Undefined
// ler-ის შემთხვევაში ჩვენ ვიღებთ reference error-ს.

// Const
// ცვლადები რომლებსაც ვიძახებთ const-ით არის კონსტანტები. მას აქვს მგავსებები let-ით დეკლარირებულ ცვლადებთან.

// Const-ს არ შეუძლია დააფდეითება ან რედეკლარირება.
// const-ით დეკლარირებული ცვლადი იგივე რჩება თავის სკოუპში. არ შეიძლება კონსტანტის დააფდეითება ან რედაკლარირება.
// ამრიგად, თუ ჩვენ გამოვაცხადებთ ცვლადს const-ით არ შეგვიძლია მსგავსი რამის გაკეთება:
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable. 

// არც ამის: 
const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

// ყველა const დეკლარაცია განსაზღვრული უნდა იყოს დეკლარაციის დროს.
// სმგავსი ქცევა განსხვავებულია, მაშინ როცა const-ით ვადეკლარირებთ ობიექტს. const-ის ობიექტის დააფდეითება არ შეიძლება, მაგრამ შეგვიძლია
// დავააფდეითოდ ფროფერთიები. ამიტომ თუ ჩვენ გამოვაცხადებთ const object-ს მსგავსად:
const greeting = {
    message: "say Hi",
    times: 4
}

// არ შეგვიძლია ასე გავაკეთოთ :
greeting = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.

// მაგრამ შეგვიძლია :
greeting.message = "say Hello instead";

// ეს მოქმედება დააფდეითებს greeting.message-ს ერორების გარეშე.

// Hoisting of const
// როგორც let, const დეკლარაცია არის აწეული ზემოთ მაგრამ არაა განზასზღვრული(reference error).

// რომ შევაჯამოთ:
// Var არის გლობალური ან ფუნქციის სკოუპი, ხოლო let და const ბლოკ-სკოუპი.
// var შეგვიძლია დავააფდეითოდ და თავიდან დავადეკლარიროთ თავის სკოუპში.
// let შეგვიძლია დავააფდეითოდ, მაგრამ არ შეგვიძლია თავიდან გამოცხადება.
// const-ის შემტხვევაში არცერთი არაა შესაძლებელი.
// ისინი არიან hoisted სკოუპის თავში. მაგრამ ვარ ცვლადი ინიციალიზებულია როგორც undefined, ხოლო let და const არა.
// let და var შეგვიძ₾ია გამოვაცხადოთ ველიუს გარეშე, ხოლო const-ის ველიუ განსაზღვრული უნდა იყოს გამოცხადებისთანავე.
