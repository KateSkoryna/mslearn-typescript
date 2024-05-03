"use strict";
/// <reference path="module08_exercise-2.ts"/>
// namespace Greetings {
//       export function returnGreeting (greeting: string) {
//         console.log(`The message from namespace Greetings is ${greeting}.`);
//     }
// }
// namespace GreetingsWithLength {
//      export function returnGreeting (greeting: string) {
//         let greetingLength = getLength(greeting);
//         console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
//     }
//     function getLength(message: string): number {
//         return message.length
//     }
// }
// Greetings.returnGreeting('Hi');         // OK
// GreetingsWithLength.returnGreeting('Hola');  // OK
let x = AllGreetings.Greetings.returnGreeting('Bonjour'); // OK
console.log(x);
