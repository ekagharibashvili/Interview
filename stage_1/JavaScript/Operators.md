### 3. Operators

#### ჯავასკროპტს აქვს მომდევნო ოპერატორები:

##### Assignment operators
##### COMPARISON OPERATORS
##### ARITHMETIC OPERATORS
##### BITWISE OPERATORS
##### LOGICAL OPERATORS
##### STRING OPERATORS
##### CONDITIONAL (TERNARY) OPERATOR
##### COMMA OPERATOR
##### UNARY OPERATORS
##### RELATIONAL OPERATORS

##### ჯავასკრიპტს აქვს ორივე binary და unary ოპერატორი, და ერთი განსაკუთრებული ternary ოპერატორი, პირობითი ოპერატორი.

##### binary ოპერატორი მოითხოვს ორ ოპერანდს ოპეარტორის წინ და შემდეგ.
##### operand1 operator operand2. მაგალითად, 3+4 or x*y

##### unary ოპერატორი მოითხოვს ერთ ოპერანდს, ოპერატორის წინ ან შემდეგ.
##### operator operand. ან operand operator. მაგალითად x++ ან ++x.

##### Assignment operators
##### მინიჭების ოპერატორი ანიჭებს მნიშვნელობას მარცხენა ოპერანდ მარჯვენა ველიუდან გამომდინარე. 
##### ყველაზე მარტივი მინიჭების ოპერატორია "=".(x = y) რომელიც მარცხენა ოპერანდს უტოლებს მარჯვენა ოპერანდს. x = y იგივეა რაც y = x.

##### ამის გარდა გვაქვს კიდევ ბევრი მინიჭების ოპერატორი. მოცემულია table-ში.

![assignment operators](../assets/assignment.jpg)

#### Destructuring
##### var foo = ['one', 'two', 'three'];
##### without destructuring
##### var one   = foo[0];
##### var two   = foo[1];
##### var three = foo[2];
##### with destructuring
##### [one, two, three] = foo;




#### Comparison(შედარების) ოპერატორები.

##### შედარების ოპერატორი ადარებს ერთმანეთს ოპერანდებს, და აბრუნებს ლოგიკურ ველიუს რომელიც დამოკიდებულია იმაზე თუ სად არის შედარება true.
##### operand-ები შეიძლება იყოს ნებისმიერი ტიპის.
![comparison operators](../assets/comparison.jpg)

##### Note: => is not an operator, but the notation for Arrow functions.

#### Arithmetic (არითმეტიკული) ოპერატორები.

##### არითმეტიკული ოპერატორი იღებს რიცხვით მნიშვნელობას და აბრუნებს ერთიან რიცხვით მნიშვნელობას.
##### სტანდარტული არითმეტიკული ოპერატორებია: მიმატება(+), გამოკლება(-), გაყოფა(/), გამრავლება(*).
##### არსებობს სხვა არითმეტიკული ოპერატორები, რომლებიც მოცემულია ფოტოში.
![arithmetic](../assets/arithmetic.jpg)


#### Logical(ლოგიკური) operators
##### ლოგიკური ოპერატორები გამოყენებულია Boolean(ლოგიკურ) მნიშველობებთან.
![logical operators](../assets/logical.jpg)




