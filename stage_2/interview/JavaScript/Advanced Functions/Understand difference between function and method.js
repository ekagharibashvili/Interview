/* JavaScript Functions: A function is a block of code written to perform some specific set of tasks. We can define a function 
using the function keyword, followed by Name and optional parameters. Body of function is enclosed in Curly braces. */

/* The function is executed when something calls/invokes it.
The name may contain letters, digits, dollar signs, underscore.
Parameters are listed inside round parenthesis after the name of the function.
Arguments are values a function receives when it is invoked.
When the control reaches the return statement, js will stop executing and the value is returned to the caller. */

/* JavaScript Methods: A JavaScript method is a property of an object that contains a function definition. 
Methods are functions stored as object properties. Object method can be accessed with the following syntax: */

/* 
<html>
    <head>
        <script>
            var employee = {
                empname: "Rahul",
            department : "sales",
            details : function() {
                    return this.empname +
            " works with Department " +
            this.department;
                }
            };
            console.log(employee.details());
        </script>
    </head>
</html> */

/* A function can be called directly by its name.	
A method consists of a code that can be called by the name of its object and its method name using dot notation or square bracket 
notation..
A function can pass the data that is operated and may return the data. 	
The method operates the data contained in a Class.
Data passed to a function is explicit.(გამოკვეთილი)	
A method implicitly(ირიბად) passes the object on which it was called.
A function lives on its own.	
A method is a function associated with an object property. */