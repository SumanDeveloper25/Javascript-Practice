
// function sum(n1, n2) {
//     let res = n1 + n2;
//     console.log("added successfully");
//     return res;
// }

// console.log(sum(3, 5));

function gretting(user = "User") { // 
    if(!user) {
        console.log("Please enter username");
        return;
    }
    return `Welcome ${user}`;
    
}

console.log(gretting()); // Please enter username
console.log(gretting("Suman"));


