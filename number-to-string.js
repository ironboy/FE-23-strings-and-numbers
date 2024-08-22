// shorthand number to string
let aNumber = 50.25;
let aString = aNumber + '';
console.log(aNumber, typeof aNumber);
console.log(aString, typeof aString);
let stringWithInt = Math.floor(aNumber) + '';
console.log(stringWithInt, typeof stringWithInt);

// Number.toString
// except for readibiltity for the novice JS/TS programmer
// there is NO advantage of useing Number.toString();
aNumber = 90.5;
aString = aNumber.toString();
console.log(aNumber, typeof aNumber);
console.log(aString, typeof aString);