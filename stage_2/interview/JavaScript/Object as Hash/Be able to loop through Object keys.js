var obj = { first: "John", last: "Doe" };

Object.keys(obj).forEach(function (key) {
    console.log(key, obj[key]);
});


for (const key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

Object.entries(obj).forEach(
    ([key, value]) => console.log(key, value)
);

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

/* Both Object.keys() and Object.entries() iterate properties 
in the same order as a for...in loop but ignore the prototype chain. Only the object's own enumerable properties are iterated. */