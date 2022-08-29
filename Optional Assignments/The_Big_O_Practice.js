//  QUESTION 1 

// Slower Variation
// Check all the numbers up to the number
// Number.prototype.isPrime = function () {
//     for (let i = 2; i < this; i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// Faster variation
// Check up to the square root of the number
Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

console.log();
// QUESTION 2

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
// rFib(20);
const startRFib = performance.now();
console.log("The 30th number in the Fibonacci Sequence is:", rFib(30));
console.log("Finding the 30th number in the Fibonacci Sequence via recursion took", (performance.now()-startRFib), "milliseconds.")

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
// iFib(20);
const startIFib = performance.now();
console.log("The 30th number in the Fibonacci Sequence is:", iFib(30));
console.log("Finding the 30th number in the Fibonacci Sequence via iteration took", (performance.now()-startIFib), "milliseconds.")

// Prediction: RECURSIVE approach to the Fibonnaci Sequence will be FASTER
// Actual: Iterative approach was faster!


console.log();
// Question 3

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const startR1 = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log("Runtime for reversing a string with built-in functions =", (performance.now()-startR1));

console.log();
// reverse a string more efficiently (using only one loop)
function efficientReverse(string){
    var reversedString = "";
    for(var i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
}
const startR2 = performance.now();
const reversed2 = efficientReverse(story);
console.log(reversed2);
console.log("Runtime for reversing a string more efficiently =", (performance.now()-startR2));
// Not actually more efficient... Need to work on this one!