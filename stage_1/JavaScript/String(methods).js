// 5. String and it's methods.
// სტრინგ ობიექტი გამოიყენება სიმბოლოებზე მანიპულირებისთვის. მონაცემების შესანახად რომელიც წარმოდგენილია ტექსტის სახით.

// string შეიძლება შევქმნათ როგორც პრიმიტივად,ლიტერალით, ასევე სტრინგ ობიექტად. String() კონსტრუქტორის დახმარებით.

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

// Character access
// არსებობს ორი გზა რომ მივწვდეთ ინდივიდუალურ სიმბოლოს სტრინგში. 
// პირველი არის charAt() მეთოდი. 

return 'cat'.charAt(1) // returns "a"

// მეორე გზა არის სტრინგის დამუშავება მასივის ელემენტებად და შემდეგ ინდექსის საშუალებით მიწვდომა.

return 'cat'[1] // returns "a"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comparing strings
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// სტრინგ პრომიტივი და სტრინგ ობიექტი
// სტრინგ პრიმიტივზე შეგვიძლია გამოვიყენოთ მეთოდები ჩვეულებრივად, მას ჯავასკრიპტი ავტომატურად კრავს ობიექტში.object wrapper-ის დახმრებით
// მისი გამოყენების შემდეგ ავტომატურად ქრება ობიექტი და რჩება პრიმიტიული სტრინგი.
// სტრინგის შექმნა ამ ორი მეთოდით მოგვცემს განსხვავებულ შედეგებს სხვადასხვა საკითხში
// მაგალითად:
let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"

// როდესაც ვიყენებთ eval()-ს ამ შემთხვევაშიც სხვადასხვა შედეგს მივიღებთ პრიმიტივებთან და ობიექტთან
// მაგალითისთვის: 
let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"

// string ობიექტი ყოველთვის შეიძლება გადაკეთდეს პრიმიტივად valueof() - ის დახმარებით.
console.log(eval(s2.valueOf()))  // returns the number 4

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// არსებობს სპეციალური სიმბოლოები, რომლებსაც ვიყენებთ სტრინგში
// \0	null character (U+0000 NULL)
// \'	single quote (U+0027 APOSTROPHE)
// \"	double quote (U+0022 QUOTATION MARK)
// \\	backslash (U+005C REVERSE SOLIDUS)
// \n	newline (U+000A LINE FEED; LF)
// \r	carriage return (U+000D CARRIAGE RETURN; CR)
// \v	vertical tab (U+000B LINE TABULATION)
// \t	tab (U+0009 CHARACTER TABULATION)
// \b	backspace (U+0008 BACKSPACE)
// \f 	form feed (U+000C FORM FEED)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Long literal strings 
// არსებობს ორი მეთოდი გრძელ სტრინგებთან სამუშაოდ რომელიც გვეხმარება მათ გასაერთიანებლად. 

// პირველი მეთოდი

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

// მეორე მეთოდი
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constructor - კონსტრუქტორი

// String()
//  ქმნის ახალ სტრინ ობიექტს. ის ახდენს ტიპის კონვერტაციას როგორც ფუნქცია, განსხვავებით კონსტრუტორისგან უფრო გამოყენებადია.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String properties

// სტრინგს აქვს ერთადერთი ფროფერთი length რომელიც ითვლის სიგრძეს.

const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// STRING METHODS ///////////////////////////////////////////////////////////

// String.prototype.at() at(index)
// at -ს გადაეცემა სტრინგის ინდექსი. დადებითობის შემტხვევაში ითვლის ჩეულებრივად ნეგატიურ რიცხვებზე ითვლის ბოლოდან

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// expected output: "Using an index of -4 the character returned is d"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String.prototype.charAt() charAt(index)
// აბრუნებს ახალ single character სტრინგს შესაბამისი index-ის მიხედვით

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String.prototype.charCodeAt() charCodeAt(index)
// აბრუნებს ინტეჯერს 0დან 65535-მდე, რომელიც არის შესაბამის ინდექსზე მდგომი character.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                     String.prototype.concat()

// კონკატ მეთოდი აერთიანებს ორ ან რამდენიმე სტრინგს ერთად. 
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    String.prototype.includes()
// ეს მეთოდი არის case-sensitive. ის ეძებს სტრინგს სხვა სტრიგში და აბრუნებს true ან false ვალიუს.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// Syntax
includes(searchString)
includes(searchString, position) // პოზიცია არის ნებაყოფლობითი, ის განსაზღრავს რა პოზიციიდან ხდება სერჩი.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                  String.prototype.endsWith()