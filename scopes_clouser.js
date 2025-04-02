let a = 10;
const b = 20;
var c = 30;

if(true) {
    let a = 100;
    console.log("if block a value: ",a); // 100
    if(true) {
        let a = 1000;
        var c = 300; // it always refers as a global variable like here c 
        console.log("if nested block c value: ", c); // 300
        console.log("if nested block a value: ",a); // 1000
    }
    console.log("if block c value: ",c); // 300
    console.log("if block a value: ",a); // 100
    
}

console.log("Outside a vlaue: ",a); // 10
console.log("Outside c vlaue: ",c); // 300



