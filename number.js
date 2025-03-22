let score = 100

const balance = new Number(200)

console.log(balance);
console.log(typeof balance); // object

let newBal = 199.2355
console.log(newBal.toFixed(2)); // 199.24
console.log(newBal.toFixed(3)); // 199.236
newBal = 1234.6321

console.log(newBal.toPrecision(4)); // 1235 -> it takes before decimal values then round of after deciaml values

const revinew = 100000
console.log(revinew.toLocaleString('en-US')); // 100,000
console.log(revinew.toLocaleString('en-IN')); // 1,00,000

