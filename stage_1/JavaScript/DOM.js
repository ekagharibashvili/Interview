// Nested Functions
// ფუნქცია არის nested როცა ის შექმნილია სხვა ფუნქციის შიგნით
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }


// Closure
//  ქლოჟური არის ფუნქცია რომელიც იმახსოვრებს გარეთა ცვლადებს და შეუძლია რომ მისწვდეს მათ.
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
let counter = makeCounter();
comnsole.log(counter())  // 0

// ჯავასკრიპტში ყველა ფუნქცია ქლოჟურია რადგან ყველას შეუძლია რომ მისწვდეს გლობალურ ცვლადს. 
// ლექსიქალ ენვაირონმენთი არის კოდის ტანი როცა ის სრულდება ფუნქციის შესრულებისას. 
// ანუ ის არსებობს თეორიულად. {} curly რეკეტებში მიმდინარე მოვლენაა მოკლედ რო ვთქვათ.


// closure გვაძლევს აუთერ ფუნქციის სკოუპზე წვდომას inerr ფუნქციიდან. ყოველი ფუნქციის შექმნისას იქმნება ქლოჟური.