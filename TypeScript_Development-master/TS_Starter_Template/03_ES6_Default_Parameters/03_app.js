/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (name === void 0) { name = "rishabh"; }
    if (age === void 0) { age = 40; }
    var greetMsg = "Good Morning" + name + "you are" + age + "years old!!";
    return greetMsg;
}
var greeting = greet('jhone', 40);
console.log(greeting);
document.querySelector('#display').textContent = greeting;
