let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this); // leads to an error
    }

};


user.sayHi(); // TypeError: Cannot read property 'name' of null