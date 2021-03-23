const a = 1;
const b = 2;

console.log(a + b); // 3

function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(a, b)); // 3

const sum_arrow = (num1, num2) => {
  return num1 + num2
}

console.log(sum_arrow(a, b)); // 3

const printHelloWorld = () => {
  console.log('hello world!');
}

printHelloWorld()

const factorial = n_given => {
  const visit = n => {
    if (n === 0) {
      return 1
    } else {
      return n * visit(n - 1)
    }
  }
  return visit(n_given)
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(3)) // 6
console.log(factorial(5)) // 120
console.log(factorial(100)) // 9.33262154439441e+157