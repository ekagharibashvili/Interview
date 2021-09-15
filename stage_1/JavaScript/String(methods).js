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

// განსაზღვრავს მთავრდება თუ არა სტრიქონი მითითებული სიმბოლოთი. აბრუნებს True ან false-ს.
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false

// სინტაქსი 
endsWith(searchString)
endsWith(searchString, length)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    String.prototype.indexOf()     
// აბრუნებს ინდექსს საიდანაც იწყება მითითებული სტრინგის ათვლა. თუ არ არსებობს აბრუნებს -1-ს. 
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

//სინტაქსი
indexOf(searchValue)
indexOf(searchValue, fromIndex)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                      String.prototype.lastIndexOf()
// ეს მეთოდი ჰგავს indexOf() მეთოდს, განსხვავება ისაა რომ ეს აბრუნებს შეხვედრილი სტრინგის ინდექსს.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"

// სინტაქსი
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                         String.prototype.match()
// გამოაქვს შედეგი, რომელი ეწინააღმდეგება გადაცემულ რიგექსს
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

// სინტაქსი
match(regexp)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                         String.prototype.repeat()
// ქმნის ასლებს სტრინგის გადაცემული რიცხვის მიხედვით, და აბრუნებს ახალ სტრინგს ამ ასლებით შედგენილს.
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(3)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy.

// სინტაქსი 
repeat(count)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                   String.prototype.valueOf()
// აბრუნებს პრიმიტიულ ველიუს სტრინგ ობიექტიდან.
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"

// სინტაქსი 
valueOf()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           String.prototype.trim()
// შლის ცარიელ ადგილებს სტრინგის ორივე ბოლოდან.
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
// სინტაქსი
// trim()
String.prototype.trimStart() 
trimLeft() // დასაწყისიდან
String.prototype.trimEnd()
trimRight() // ბოლოდან

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
String.prototype.toLowerCase()
// სინტაქსი 
toLowerCase() // აბრუნებს მიწოდებული სტრინგს პატარა ასოებით
toUpperCase() // აბრუნებს მიწოდებულ სტრინგს დიდი ასოებით.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           String.prototype.toString()
// აბრუნებს მითითებული ობიექტის სტრინგს
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.toString());
// expected output: "foo"

// სინტაქსი
toString()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        String.prototype.substring()
// აბრუნებს სტრინგის ნაწილს საწყის და ბოლო ინდექსს შორის
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"

// სინტაქსი
substring(indexStart)
substring(indexStart, indexEnd)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                       String.prototype.startsWith()
// განსაზღვრავს იწყება თუ არა მითითებული სიმბოლოებით ან სტრინგით სტრინგი. აბრუნებს True ან false-ს.
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false

// სინტაქსი 
startsWith(searchString)
startsWith(searchString, position)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                String.prototype.split()
/// ყოფს სტრინგებს split არამეტრის მიხედვით. მაგალითშია უფრო გარკვევით და აბრუნებს მოცემულ ინდექსზე მდგარ სტრინგს
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// სინტაქსი
split()
split(separator)
split(separator, limit)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                              String.prototype.slice()
// იღებს სტრიქონის მონაკვეთს და აბრუნებს ახალს ძველის მოდიფიკაციის გარეშე.
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

// სინტაქსი
slice(beginIndex)
slice(beginIndex, endIndex)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           String.prototype.search()
// რეგექსის მიხედვით ახორციელებს ძებნას და აბრუნებს რეგექსთან შესაბამის ინდექსს
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

// სინტაქსი
search(regexp)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                          String.prototype.replace()
// აბრუნებს ახალ სტრიქონს, რომლის რომელიმე სტრიქონი ჩანაცვლებულია შესაბამისი სტრინგით. ან შეცვლილია რეგექსის მიხედვით.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// სინტაქსი
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)

                                     String.prototype.replaceAll()
// ამით კი სტრინგში არსებული ყველა შესაბამისი სტრიქონი ჩანაცვლებული იქნება ახალით. დააბრუნებს ახალ სტრინგს.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// სინტაქსი
replaceAll(regexp, newSubstr)
replaceAll(regexp, replacerFunction)

replaceAll(substr, newSubstr)
replaceAll(substr, replacerFunction)




