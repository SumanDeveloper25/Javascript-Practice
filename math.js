console.log(Math); // Math is an object

// console.log(Math.abs(-3)); // 3 -> for the postive value
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4

// console.log(Math.min(1,5,8,-4,6)); // -4

// // random number
// console.log(Math.random()); // any random value between 0.0 to 1.0

// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);


// OTP system works
let min = 1000
let max = 9999
let otp = Math.ceil(Math.random() * (max - min + 1)) + min;

console.log(otp);
