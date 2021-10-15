// Javascript Hoisting მიუთითებს პროცესზე რომლითაც ინტერპრეტერი გამოყოფს მემორის ცვლადისთვის და ფუნქციას ადეკლარირებს კოდის შესრულებამდე.
// var - დეკლარირების დროს აქვს Undefind მნიშვნელობა. let და const კი არ არის ინიცირებული როგორც ჰოისტინგის ნაწილი.

// კონცეპტუალურად, ჰოისტინგი ხშირად წარმოდგენილია როგორც "დაყოფა ცვლადის დეკლარირების და ინიციალიზირების და დეკლარაციის აწევა კოდის თავში".
// ეს ნებას რთავს ცვლადეს გამოჩნდნენ მანამდე სანამ მნიშნელობა მიენიჭებათ.
// ცვლადის ინიციალიზირება მანამდე არ მოხდება, სანამ კოდის ლაინი არ შესრულდება.

// ტექნიკური მაგალითი
// ერთ-ერთი უპირატესობა, ჯავასკრიპტის ფუნქციის დეკლარირების მემორიში ჩადების, სანამ კოდის რომელიმე სეგმენტი შესრულდება
// ნებას გვრთავს გამოვიყენოთ ფუნქცია კოდში, მანამდე სანამ დავადეკლრარირებთ. მაგალითად:
function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");
  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */

// ზემოთა კოდის სნიპეტი არის როგორც მოველოდით კოდის დაწერას მისიი მუშაობისთის. ახლა კი ვნახოთ რა ხდება როცა ჩვენ ვიძახებთ ფუნქციას
// მანამდე სანამ მას დავწერთ:

catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/

// მიუხედავად იმის რომ ფუნქცია გამოვიძახეთ მის დეკლარირებამდე, კოდი მაინც მუშაობს. ასე მუშაობს კონტექსტის შესრულება ჯავასკრიპტში.
// ჰოისტინგი კარგად მუშაობს სხვა მონაცემთა ტიპებთან და ცვლადებთან. ცვლადები შეიძლება იყოს ინიციალიზებული და გამოყენებული მანამდე სანამ დადეკლარირდება.

// მხოლოდ დეკლარაციები არის hoisted
// ჯავასკრიპტში მხოლოდ დეკლარაციებია ჰოისტიდ და არა ინიციალიზაციები. თუ ცვლადი ჯერ გამოყენებულია კოდში და შემდეგ არის დეკლარირებული
// და ინიზიალიზებული, მნიშვნელობა იქნება default value ანუ undefind-ი. (მხოლოდ მაშინ როცა var-ს ვიყენებთ, სხვა შემთხვევაში არაა ინიციალიზებული).
// მაგალითად:
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization

// ქვემოთა მაგალითს აქვს ინიციალიზება, ჰოისტინგი არ ხდება აქ ამიტომ არის ReferenceError-ი.

console.log(num); // Throws ReferenceError exception
num = 6; // Initialization

// ქვემოთ ნაჩვენებია ჰოისტინგის უფრო მეტი მაგალითი.
// Example 1
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
// This prints value of y as undefined as JavaScript only hoists declarations
var y = 2; // Declare and Initialize y

// Example 2
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'

// let და const ჰოისტინგი
// ცვლადები დეკლარირებული let-ით და const-ით ასევე არის hosted. 
// მაგრამ განსხვავებით var ცვლადისგან არ არის ინიციალიზებული default მნიშვნელობა undefind-ით.
// სანამ  ხაზი, რომელშიც ისინია ინიციალიზებული არ შესრულდება, ნებისმიერი კოდი რომელთაც წვდომა ექნებათ ამ ცვლადებთან გამოიწვევს exception-ს.
// დაუგეგმავ მოვლენას.