// Singleton



// Objects literals
const mySymbol = Symbol("Sym1");
const anotherSymbol = Symbol("Sym2")

const user = {
    "full name": "Suman",
    id: 34,
    // [symbol]: "&", // error as it is not declare as a symbol
    mySymbol: "@",
    [anotherSymbol] : "$", // this a symbol right now
    email: "suman@gmail.com"
}
console.log(user.id);
console.log(user["full name"]); // best way to access the object elements

console.log(typeof user.symbol); // error
console.log(typeof user.mySymbol); // this is not a string right now this is a string
console.log(typeof user[anotherSymbol]); // correct way to declare symbol

console.log(user);

// freeze -> 
user.email = "suman@github.com";
console.log(user.email);
Object.freeze(user);
user.email = "suman@developer.com";
user.id = 50;
console.log(user.email); // won't be changed
console.log(user.id) // wont be changed

// But if we do for the particular object element freeze like only id
const admin = {
    adminId: 6050,
    name: "Suman Mondal",
}
// Object.freeze(admin.adminId);
admin.adminId = 6000; // it won't work because freeze only used in object not object's element
console.log(admin.adminId); // 6000

// Object function 
admin.getGretting = function() {
    console.log("Hello welcome , user");
}

admin.getGrettingTwo = function() {
    console.log(this.name);
}
console.log(admin.getGretting); // function (anonymous)
console.log(typeof admin.getGretting); // function
console.log(admin.getGrettingTwo());

