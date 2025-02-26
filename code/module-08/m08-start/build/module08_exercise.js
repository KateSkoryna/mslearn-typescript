"use strict";
var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
Greetings.returnGreeting('Hi'); // OK
GreetingsWithLength.returnGreeting('Hola'); // OK
