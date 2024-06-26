var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log("The message from namespace Greetings is ".concat(greeting, "."));
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        var greetingLength = getLength(greeting);
        console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
Greetings.returnGreeting('Hi'); // OK
GreetingsWithLength.returnGreeting('Hola'); // OK
var AllGreetings;
(function (AllGreetings) {
    var Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log("The message from namespace Greetings is ".concat(greeting, "."));
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    var GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            var greetingLength = getLength(greeting);
            console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
AllGreetings.Greetings.returnGreeting('Bonjour'); // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola'); // OK
var greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
/// <reference path="module08_exercise.ts"/>
/// <reference path="module08_exercise-2.ts"/>
AllGreetings.Greetings.returnGreeting('Bonjour,Kate'); // OK
Greetings.returnGreeting('Hi');
