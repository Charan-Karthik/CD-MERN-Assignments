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
    for (let i = 2; i < Math.sqrt(this); i++) {
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
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// ========================
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);

// RECURSIVE approach to the Fibonnaci Sequence will be FASTER

// ========================
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
// console.log(reversed1);
// inefficient because it's multiple loops; split is a loop, reverse is a loop, join is a loop (time complexity is O(n^3))

// NOTE TO SELF
// ^ need to double check if it's actually O(n^3)
// it should be based on my understanding because .split functions as a loop in the background, then .reverse is another loop, and so is .join
// but they're not nested within each other so maybe it's just 3*O(n)? whereas the one below would just be O(n)?

// reverse a string more efficiently (using only one loop)
function efficientReverse(string){
    var reversedString = "";
    for(var i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
}
console.log(efficientReverse(story));
