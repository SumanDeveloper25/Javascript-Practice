/* 
    Stack Memory (Primitive)
    Heap Memory (Non-primitive)
*/

// stack memory concept
// every time it allocate new memory location
let promoCode = "ABC123";

let newPromoCode = promoCode;
newPromoCode = "XYZ456"

// console.log(newPromoCode);
// console.log(promoCode);

// heap => memory location ponting to a paritcular memory location, it takes the memry reference
const mobile = {
    brand: "Vivo",
    model: "X200",
    isWarrentyPriod: true,
    price: 89999.00,
    IMEI: undefined
}

let myPhone = mobile
let friendPhone = mobile

myPhone.IMEI = "ABCDE123" 

console.log(myPhone.IMEI); // ABCDE123
console.log(friendPhone.IMEI); // ABCDE123





