// 6. Number არის პრიმიტივები wrapper ობიექტი. თუ ვერ კონვერტირდება Numberში მაშინ აბრუნებს NaN-ს(Not a Number)
123    // one-hundred twenty-three
123.0  // same
123 === 123.0  // true

Number('123')  // returns the number 123
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN

// Number კონსტრუქტორი  ქმნის ახალ Number მნიშვნელობას.
 


// Static properties
Number.prototype // საშუალებას იძლევა დაემატოს ახალი ფროფერთი  Number-ის ობიექტში.
Number.EPSILON
// ყველაზე პატარა ინტერვალი ორ მოცემულ რიცხვს შორის,

Number.MAX_SAFE_INTEGER
// მაქსიმუმი სეიფ ინტეჯერ ჯავასკრიპტში

Number.MAX_VALUE
// მაქსიმუმი მნიშვნელობის(სიგრძე)(დადებითი)

Number.MIN_SAFE_INTEGER
// მინიმუმი ინტეჯერი(უარყოფითი მნიშვნელობა)

Number.MIN_VALUE
// მინიმუმი, დადებითი რიცხვი რომელიც ახლოსაა ნულთან.

Number.NaN
//  "Not a Number" მნიშვნელონა.

Number.NEGATIVE_INFINITY
// მინუს უსასრულობა

Number.POSITIVE_INFINITY
// პლიუს უსასრულობა

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Static methods
Number.isNaN()   
Number.isNaN(value)
// აბრუნებს არის თუ არა მნიშვნელობა NaN-ი. 

Number.isFinite()
Number.isFinite(value)
// აბრუნებს არის თუ არა მნიშნელობა სასრული.

Number.isInteger()
// აბრუნებს არის თუ არა მთელი რიცხვი გადაცემული მნიშნელობა.

Number.isSafeInteger()
// აბრუნებს არის თუ არა მნიშვნელობა სეიფ ინტეჯერი

Number.parseFloat(string)
// იღებს არგუმენტს და აბრუნებს ფლოატს ნამბერს

Number.parseInt(string, [radix])
// იღებს სტრინგს და აბრუნებს ონტეჯერს.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instance methods
Number.prototype.toFixed(digits)
toFixed()
toFixed(digits)
//  მითითებული digits მიხედვით წერიტის შემდეგ ჩამოაჭრის ან დაუმატებს ათწილად რიცხვებს
const n = 789787.9289;
console.log(n.toFixed(1));
// აუთფუთში გვექნება "789787.9";

Number.prototype.toString([radix])
toString()
toString(radix)
// ნუმბერი გადაჰყავს სტრინგ ტიპში.

Number.prototype.valueOf()
// აბრუნებს ობიექტის პრიმიტივს