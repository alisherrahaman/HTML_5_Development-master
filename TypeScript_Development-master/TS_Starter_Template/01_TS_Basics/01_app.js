// Hello World App
var greeting = "good morning";
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greetMsg(name, age) {
    var greeting = "hello" + "you are " + age + "years old!!";
    return greeting;
}
var greetingMessage = greetMsg('jhon', 40);
console.log(greetingMessage);
document.querySelector('#display').textContent = greetingMessage;
