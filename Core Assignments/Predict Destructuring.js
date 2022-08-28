
// Question 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// Prediction: console log 'Tesla' followed by 'Mercedes'
// Actual: Matched prediction :)

// Question 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);
// Prediction: console log 'undefined' followed by 'Elon'
// Actual: reference error because "name" was not defined; if that was commented out it did console log 'Elon'

// Question 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// Prediction: console log '12345' and then 'undefined' (since person doesn't have a password attribute)
// Actual: matched prediction :)

// Question 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);
// Prediction: (first = 2, second = 5, third = 2) console log 'false' and then 'true'
// Actual: matched prediction :)

// Question 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// Prediction: console log 'value', '[1, 5, 1, 8, 3, 3]', '1', '5'
// Actual: Matched prediction :)