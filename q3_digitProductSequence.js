// A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.
//
// For example:
// 1, 2, 4, 8, 16, 22, 26, 38, 62
// The above are the first 9 numbers of the sequence.
//
// Write a function, digitProduct, that takes a number, n, as an argument and calculates the nth number in the sequence.
//
// digitProduct(3) // returns 4
// digitProduct(6) // returns 22
// digitProduct(9) // returns 62
// Implement it iteratively
// Implement it recursively
// Benchmark the results

// Iteratively:
console.time("Iterative solution");
const digitProduct = function(n) {
  let sequence = [];
  let number = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(number);
    let product = 1;
    // Separate the digits of the number and multiply all non-zero digits together
    for (let digitIndex = 0; digitIndex < number.toString().length; digitIndex++) {
      if (parseInt(number.toString()[digitIndex]) !== 0) {
        product *= parseInt(number.toString()[digitIndex]);
      }
    }
    number += product;
  }
  return sequence.slice(-1)[0];
};

for (let i = 0; i < 1e6; i++) {
  digitProduct(3); // returns 4
  digitProduct(6); // returns 22
  digitProduct(9); // returns 62
}
console.timeEnd("Iterative solution");


// Recursively:
console.time("Recursive solution");
const digitProductRecur = function(n, sequence = []) {
  function product(number) {
    let prod = 1;
    // Separate the digits of the number and multiply all non-zero digits together
    for (let digitIndex = 0; digitIndex < number.toString().length; digitIndex++) {
      if (parseInt(number.toString()[digitIndex]) !== 0) {
        prod *= parseInt(number.toString()[digitIndex]);
      }
    }
    return prod;
  }

  if (n === 1) {
    return 1;
  } else {
    return digitProductRecur(n - 1) + product(digitProductRecur(n - 1));
  }
}

for (let i = 0; i < 1e6; i++) {
  digitProductRecur(3); // returns 4
  digitProductRecur(6); // returns 22
  digitProductRecur(9); // returns 62
}
console.timeEnd("Recursive solution");

// Iterative solution: 6757.905ms
// Recursive solution: 79676.166ms
