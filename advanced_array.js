let marvelHeros = ["Ironman", "Thor", "Halk", "Spiderman"];
const DCHeros = ["Superman", "Aquaman", "Flash"]

marvelHeros.push(DCHeros); // it affected to the orginal array
console.log(marvelHeros); // [...,[..],..] -> sub-array

const allHeros = marvelHeros.concat(DCHeros)
console.log("All heors using concat: ",allHeros); // all heros [......] individual index

// spread operator
allHeros = [...marvelHeros, ...DCHeros]; // return all arays values
marvelHeros = [...marvelHeros, ...DCHeros] // change into orginal array
console.log("All heors using spread: ",marvelHeros); 

// descructing function
let users = [1, 2, 3, 4, 5, 6];
let idx = 2;
console.log(users[idx]);
[users[idx], users[idx - 1]] = [users[idx - 1], users[idx]];
console.log(users[idx]);


// takes elements from the sub-array
const infoList = [1,2,3,[4,5,6,[7,8],[9,10,[11,12]]], 13, 14];
let answer = infoList.flat(Infinity); // it return all the elemets form the sub-array in the order like 2D array
console.log(answer);

answer = infoList.flat(1); // depth 1 means combines 1 level sub-array
console.log(answer);

// ***** Array format check *********

console.log(Array.isArray("Suman")); // false
console.log(Array.from("Suman")); // ["S", ...., "n"]
console.log(Array.from("Suman", 1, 0.6)); // TypeError

console.log(Array.from({
    name: "Suman",
    id: 50
})); // empty array []

const score1 = 50;
const score2 = 80;
const score3 = [40, 70, 90];

console.log(Array.of(score1, score2)); // [50, 80]
console.log(Array.of(score1, score2, score3)); // [50, 80. [40, 70, 90]]

