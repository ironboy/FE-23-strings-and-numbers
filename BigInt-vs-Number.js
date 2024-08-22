// There is a limit to what you can store in a Number
// since it is always stored as 8 bytes (64 bits)
let maxSafeInt = Number.MAX_SAFE_INTEGER; //  9007199254740991
let minSafeInt = Number.MIN_SAFE_INTEGER; // -9007199254740991

// console.log(maxSafeInt);
// console.log(minSafeInt);

// BigInt vs created to calculate with integers
// we bigger numbers than Number can handle
let aBigInt = 9007199254740991n;
for (let i = 0; i < 100; i++) {
  aBigInt = aBigInt * 2n;
  console.log(aBigInt);
}

// a bigInt is not equal to a number without conversion
console.log(5 === 5n);

// how to convert a number to a big int
console.log(BigInt(5) === 5n);

// how to conver a big int to a number
// (but note that this could be unwise if its big BigInt)
console.log(Number(5n) === 5);