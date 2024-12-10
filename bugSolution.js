function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0));   // false
console.log(foo(0, +0));   // true

//Further considerations for NaN:
function isNaNValue(value){
  return typeof value === 'number' && isNaN(value);
}
console.log(isNaNValue(NaN)); // true
console.log(isNaNValue(0));  // false
console.log(isNaNValue('string')); // false