# SOLID Principles

### SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands 
### for five key design principles: single responsibility principle, open-closed principle, Liskov substitution principle, interface segregation principle, 
### and dependency inversion principle. All five are commonly used by software engineers and provide some imoportant benefits for developers.

### The SOLID principles were developed by Robert Martin.

### The broad goal of the SOLID principles is to reduce dependencies so that engineers change one area of software withoud impacting others.
### Additionally, they're intended to make designs easier to understand, maintain and extend. Ultimately, using these design principles make it easier 
### for software engineers to avoid issues and to build adaptive, effective, and agile software. While the principles come with many benefits, following the principles 
### generally leads to writing longer and more comlex code. This means that it can extend the design process and make developmend a little more difficult. However, this extra time 
### and effort is well worth it because it makes software so much easier to maintain, test and extend.



# Single Responsibility Principle

### Robert MArtin summarizes this principle well by mandating that, "a class should have one, and only one reason to change."
### Following this principle means that each class only does one thing and every class or module only has responsibility for 
### one part part of the software's functionality. More simply, each class should solve only one problem.
### Single responsibility principle can be applied to classes, software components and microservices.

### using this principle makes code easier to test and maintain, it makes software easier to implement and and it helps avoid 
### unexpected side-effects of future changes. 

# Open-Closed Principle

### The idea of open-closed principle is that existing, well-tested classes will need to be modified when something needs to change.
### Yet, changing classes can lead to problems or bugs. Instead of changing the class, you simply want to extend it. With that goal in mind 
### Martin summarizes this principle, "You should be able to extend a class's behavior without modifying it".

### Following this principle is essential for writing code that is easy to maintain and revise. Your class is following this principle if it is:
### 1. Open for extension, meaning that class's bihavior can be extended; and
### 2. Closed for modification, meaning that the source code is set and cannot be changed.

### The way to comply with these principles and to make sure that your class is easily extendable without having to modify the code is through the
### use of abstractions. Using inheritance or interfaces that allow polymorphic substitutions is a common way to comply with this principle.



# Liskov Substitution Principle 
### This principle is the most difficult one to understand. Boardly, this principle simply requires that every derived class shoul be substitutable for
### its parent class. The principe is named for Barbara Liskov.
### Liskov herself explains the principle by saying:

### What is wanted here is something like the following substitution property: if for each object O1 of type S there is an object O2 of type T such that 
### for all programs P defined in terms of T of T, the behavior of P is unchanged, when O1 is substituted for O2 the S is subtype of T.

### While this can be a difficult principle to internalize, in a lot of ways it's simply an extension of open-closed principle, as it's a way of ensuring
### that derived classes extend the base class without changing behavior.

### Following this principle helps to avoid unexpected results of changes, avoid lots of issues during updates and extensions.