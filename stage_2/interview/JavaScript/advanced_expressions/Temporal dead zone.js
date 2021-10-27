// Temporal dead zone (TDZ)
// let ცვლადების წაკითხვა/დაწერა არ შეგვიძლია სანამ მთლიანად არ იქნებიან ინიციალიზებული, ეს ხდება როცა ისინი არიან დეკლარირებულნი.
// თუ საწყისი მნიშვნელობა არ აქვს ცვლადს მისი მნიშვნელობა არის undefind.
// წვდომა ცვლადთან, მანამდე სანამ ის იქნება ინიციალიზებული მოახდენს referenceError-ს.

// ცვლადი არის 'Temporal dead zone'-ში, ბლოკის დასაწყისიდან მანამდე სანამ მისი ინიციალიზაცია დასრულდება.

 { // TDZ starts at beginning of scope
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
  } 

// ტერმინი 'temporal' გამოყენებულია იმიტომ, რომ ზონა დამოკიდებულია შესრულების თანმიმდევრობაზე, და არა კოდის დაწერის პოზიციაზე. 
// მაგალითად, ქვემოთ მოცემული კოდი მუშაობს ამიტომ, მიუხედავად იმისა რომ ფუნქცია იყენებს let ცვლადს  მანამდე, სანამ ცვლადის დეკლარაცია მოხდება.
// ფუნქციას ეწოდება outside of TDZ.
{
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK

    // Within the TDZ letVar access throws `ReferenceError` 
    let letVar = 3; // End of TDZ (for letVar)
    func();
    // Called outside TDZ!
}

// The TDZ and typeof
// typeof ოპერატორის გამოყენება let ცვლადისთვის მის TDZ-ში, გამოიწვევს ReferenceError-ს.
// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;

// ეს განსხვავდება არადეკლარირებული ცვლადებისგან რომელთაც აქვთ undefind მნიშვნელობა.
// prints out 'undefined'
console.log(typeof undeclaredVariable);

// TDZ combined with lexical scoping - TDZ კომბინირებული ლექსიკურ სკოპინგთან.
// მიმდინარე კოდის შედეგი referenceError-ია მითითებულ ლაინზე.
function test(){
    var foo = 33;
    if(foo) {
       let foo = (foo + 55); // ReferenceError
    }
 }
 test();

// if ბლოკი შეფასებულია, იმიტომ რომ გარეთა var foo-ს აქვს მნიშვნელობა. ლექსიკური სკოუპინგის გამო, ეს მნიშვნელობა არ არის ხელმისაწვდომი,
// ბლოკის შიგნით. იდენთიფიკატორი foo if ბლოკის შიგნით, არის let foo. გამოსახულება (foo + 55) მოახდენს referenceError-ს, რადგან 
// let foo-ს ინიციალიზება დასრულებული არაა - ის ჯერ კიდევ იმყოფება temporal dead zone-ში.




// ეს ფენომენი შეიძლება დამაბნეველი იყოს შემდეგ სიტუაციაში. ინსტრუქცია let n of n.a უკვე არის ფრაივით სკოუპის შიგნით for ლუპის ბლოკში.
// ასე რომ იდენთიფიკატორი n.a გადაწყვეტილია ფროფერთისთვის 'a' რომელიც მდებარეობს პირველ ნაწილში (let n).
// n ჯერჯერობით Temporal dead zone-შია და დეტერმინირებული არაა. 
function go(n) {
   // n here is defined!
   console.log(n); // Object {a: [1,2,3]}
 
   for (let n of n.a) { // ReferenceError
     console.log(n);
   }
 }
 
 go({a: [1, 2, 3]});


// სწორი ჩანაწერი იქნებოდა
function go(n) {
   // n here is defined!
   console.log(n); // Object {a: [1,2,3]}
 
   for (let m of n.a) {
     console.log(m); // 1, 2, 3
   }
 }
 
 go({a: [1, 2, 3]});

// other situations

// როცა გამოყენებულია შიდა ბლოკი Let ზღუდავს ცვლადის სკოუპს ბლოკში. var განსხვავდება იმით რომ ის არის ფუნქციის სკოუპი.
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2

// თუმცა, კომბინაცია var-ის და let-ის დეკლარაციის ქვემოთ არის syntaxerror იქიდან გამომდინარე რომ var იქნება Hoisted ბლოკის თავში. 
// შესაბამისად ეს იქნება რედეკლარირების შედეგი.

let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
