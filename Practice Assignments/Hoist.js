// Question 1
// console.log(hello);
// var hello = 'world';
// Prediction: will give an error since it's trying to log the variable hello before it's been defined.
// Actual: no error, console logs undefined because JS does that.

// Question 2
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// Prediction: nothing? because it calls the test function before it's been created?
// Actual: looks like the function was hoisted to the top which is why it prints "magnet" since needle is redefined in the scope of the function itself

// Question 3
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// Prediction: will print 'super cool' since the function was never called
// Actual: printed 'super cool'

// Question 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// Prediction: will first console log 'chicken' and then since the function is hoisted to the top, it'll console log 'half-chicken'
// Actual: same as prediction :)

// Question 5
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Prediction: will console log, 'chicken', 'fish', and then undefined twice
// Actual: Didn't read the code closely enough (#oops)... var mean = function() produces an error since functions can't be defined like that

// Question 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// Prediction: console log in this order: 'undefined', 'rock', 'r&b', 'disco'
// Actual: matched prediction :)

// Question 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// Prediction: console log in this order: 'san jose', 'seattle', 'burbank', 'san jose'
// Actual: matched prediction :)

// Question 8: BONUS QUESTIONS
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// Prediction: Will console log the object for the first dojo ({name: chicago, students: 65, hiring: true}), but result in an error for the second dojo creation because variables defined by const cannot be changed/updated after the fact
// Actual: matched prediction!! :)