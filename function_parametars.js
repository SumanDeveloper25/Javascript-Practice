
// function sum(n1, n2) {
//     let res = n1 + n2;
//     console.log("added successfully");
//     return res;
// }

// console.log(sum(3, 5));

function gretting(user) { // 
    if(!user || user == undefined) {
        console.log("Please enter username");
        return;
    }
    return `Welcome ${user}`;
    
}

// rest operator ...
function calculateCartPrice(val1, val2, ...price) {
    let totalPrice = 0
    price.forEach(p => {
        totalPrice += p
    });
    console.log(val1+val2); // 70
    return totalPrice;
}

// console.log(calculateCartPrice(20, 50, 30, 40)); // 70

// console.log(gretting()); // Please enter username
// console.log(gretting("Suman"));
// console.log(gretting("")); // Please enter username


const user = {
    name: "Suman",
    id: 6050
}

function handleObject(anyObj) {
    console.log(`Name is ${anyObj.name} and id is ${anyObj.id}`);
}

handleObject(user);

handleObject({
    name: "Samir",
    id: 46
})

const arr = [23, 345, 567, 23];

function getArrayValue(array, idx) {
    return array[idx];
}

console.log(getArrayValue(arr, 3));

