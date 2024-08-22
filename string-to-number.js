// convert string to number using +
let ageAsString = '65';
let inAYear = +ageAsString + 1;
console.log(`In a year you will be ${inAYear} years old.`);

// another example of using + to convert a string to a number
let aString = '50';
console.log(aString, typeof aString);
let aNumber = +aString;
console.log(aNumber, typeof aNumber);

// parseInt
aString = '50';
console.log(aString, typeof aString);
aNumber = parseInt(aString);
console.log(aNumber, typeof aNumber);

// parseFloat
aString = '50.95';
console.log(aString, typeof aString);
let anInt = parseInt(aString);
console.log(anInt, typeof anInt);
let aFloat = parseFloat(aString);
console.log(aFloat, typeof aFloat);

// differences between + and parseInt / parseFloat
aString = '50.95asdasdkjlasdasdasjkl';
console.log('A partly numeric string', aString);
console.log(+aString, '+ shorthand'); // NaN = Not a Number
console.log(parseInt(aString), 'parseInt');
console.log(parseFloat(aString), 'parseFloat');

// If the user is input incorrect values when we expect a number
let ageInput = '50. Det är väl inte så gammalt?';
let age;
// Use isNaN to check if conversion from string to number succeeded
while (isNaN(age)) {
  age = +ageInput; // convert to number
  console.log('Var vänlig ange din ålder som ett nummer!');
  // the user tries again
  ageInput = '50';
}
console.log(`${age} is a nice age, in a year you'll be ${age + 1}`);

