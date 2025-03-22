const arr = [1, 5, 2, "Suman", true, {name: "Suman", id: 50}];

console.log(arr[4]);
console.log(arr[5]);

// By default array follows shallow copy.
// That means it reference the same memory location, it does't make copy.

let myArr = new Array(1, 2, true, 0.34);
console.log(myArr[0]);
let changeVar = myArr;
changeVar[0] = "changed";
console.log(myArr[0]);

// Array methods
// push methods -> add elements form the last of the array
myArr.push(4);
myArr.push(5, 6);
console.log(myArr);

// pop -> remove elements form the last of the array or index
myArr.pop();
console.log(myArr); // remove 6
// myArr.pop(2) // pop doesn't work form a particular index element remove
// console.log("pop form index 2: ",myArr);
let delElemet = myArr.pop(); // pop return the remove element
console.log("Remove elemets", delElemet);

// unshift -> add elements form the first position
myArr.unshift(10);
console.log(myArr);

myArr.unshift(7, 8, 9); // [7, 8, 9, 10, ...]
console.log(myArr);

// shift -> remove emements form the first
let list = [1, 2, 3, 4];
list.shift();
console.log(list);
delElemet = list.shift();
console.log(delElemet); // it also return the delete element


// check the elemets is exists in the array
console.log(list.includes(3)); // return true/false

// check the index of the elements
console.log(list.indexOf(3)); // if the elements is not exists then return -1

// join two arrays
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// arr2 = arr1.join()
// console.log(arr2);

// ************splice and slice opeartion************

let a = [1,2,3,4,5,6];

console.log("Before slice orginal arr: ", a);
// slice -> it copy a specified portion of elements form the orginal array to the varible
let b = a.slice(2); // started index 2 to end of array elements and copy it to the var
console.log(b);

b = a.slice(1,4); // starting index and ending index, it takes 4-1=3 elements form the 1 index
console.log(b);
console.log("After slice orginal arr: ", a);

// splice -> it cut the specified portion of elements form the orginal array to the varible,
// **that means it change the orgianl array elements

console.log("Before splice orginal arr: ", a);
b = a.splice(2); // started index 2 to end of the elemets index
console.log(b);
console.log("After splice orginal arr: ", a);
b = a.splice(2, 4); // cut index 2 to 4 elements form the orginal value
console.log("After splice orginal arr: ", a);
console.log("splice assign value: ",b);
