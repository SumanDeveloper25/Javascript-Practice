// Singleton object

const jioUser = new Object() // singleton
// const jioUser = {} // literals , no internal difference

jioUser.name = "Suman";
jioUser.phoneNo = 7029435983;
jioUser.isActivate = true;

console.log(jioUser);

const regularUser = {
    name: {
        firstName: "Suman",
        lastName: "Mondal"
    },
    address: { // nasted object can be possible
        state: {
            dist: {
                po: {
                    policeStation: "Pingla"
                }
            }
        }
    }
}

console.log(regularUser.address);
console.log(regularUser.address.state.dist.po.policeStation);



// marge two objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "y", 4: "z"};
const obj3 = {5: "g", 6: "h"};
const user = {
    id: 50,
    name: "Suman",
}

// const assignObj = Object.assign(obj1, obj2, obj3) // (target, sources)
// const assignObj = Object.assign({}, obj1, obj2, obj3) // good practice
const assignObj = {...obj1, ...obj2, ...obj3} // simple and latest
console.log(assignObj);

// get key and values of the objects
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// entries
console.log(Object.entries(user)); // entries -> combines each key value pair in a array

// check objects proprties is available or not
console.log(Object.hasOwnProperty("name")); // return true/false if exists


