let fName = "Suman"
let lName = "Mondal"
let id = 50

// depricated method to write string or concatination of string
console.log(fName + " " + lName + "\nid : " + id);

// String interpolation or String Templates or String Literals
// using of back-tics ` `

console.log(`Hello I am ${fName} ${lName} and my id is ${id}`);

// using of new keyword/object
const API_KEY = new String("XYZ123")
console.log(typeof API_KEY); // object {}

console.log(API_KEY.__proto__); // prototypes -> 

// important inbuild methods in js string
console.log("Suman".toLowerCase()); //suman
console.log("ABCD".charAt(2)); // C
console.log("ABCD".indexOf('C')); // 2
