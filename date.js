let date = new Date() 
console.log(typeof date); // object


console.log(date); // by default date

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let myDate = new Date(2025, 2, 15); // months index staring form 0 as Jan and 11 as Dec
console.log(myDate.toLocaleString());

myDate = new Date(2025, 3, 15, 14, 30, 20) // Year : months: date: hours: minite: seconds
console.log(myDate.toLocaleString());

myDate = new Date("2025-03-15"); // custom format date
console.log(myDate.toLocaleString());

let currDate = new Date();
console.log(currDate.getTime());
console.log(Math.floor(currDate.getTime()/1000)); // seconds

// current date
console.log(currDate.getDate());
console.log(currDate.getMonth()); // note: months starts form 0 and ends with 11
console.log(currDate.getTimezoneOffset()); // time zone 

currDate.toLocaleString('default', {
    weekday: "long",
    hour12: "",
})

