// 10. call(), apply(), bind().

Function.prototype.call()
// call მეთოდი  იძახებს ფუნქციას გადაცემული this მნიშნელობით და ინდივიდუალური არგუმენტებით.
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

// სინტაქსი 
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... argN)

// call ნებასრთავს ერთი ობიექტის მეთოდი მეორე ობიექტშიც გამოვიყენოთ.
// call -ით შეგვიძლია მეთოდი ერთხელ დავწერპთ და შედეგ მემკვიდრეობით გადავცეთ სხვა ობიექტს.

// call ში პარამეტრები გადაეცება ლისტით ხოლო apply-ში მასივით.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

// სინტაქსი
apply(thisArg)
apply(thisArg, argsArray)

// იძახებს  ფუნქციას This მეთოდით და არგუმენტებით.

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// შეგვიძლია მასივები შევაეღოთ ამ მეთოდით.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bind
// Function.prototype.bind()

// bind მეთოდი ქმნის ახალ ფუნქციას საკუთარი This კივორდით
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42

  // სინტაქსი
  
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ...  argN)


// მეტს ვერაფერს ვიტყვი დანარჩენი mdn-ზე