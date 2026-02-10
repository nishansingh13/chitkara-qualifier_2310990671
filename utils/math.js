function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Fibonacci input must be a non-negative integer");
  }
  if (n > 50) {
    throw new Error("Fibonacci input must not exceed 50");
  }
  
if (n === 0) return [];
if (n === 1) return [0];

  const res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  return b === 0 ? a : gcd(b, a % b);
}

function hcf(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  if (arr.length > 100) {
    throw new Error("Array size must not exceed 100");
  }
  if (!arr.every(x => Number.isInteger(x) && x !== 0)) {
    throw new Error("All array elements must be non-zero integers");
  }
  return arr.reduce((a, b) => gcd(a, b));
}

function lcm(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  if (arr.length > 100) {
    throw new Error("Array size must not exceed 100");
  }
  if (!arr.every(x => Number.isInteger(x) && x > 0)) {
    throw new Error("All array elements must be positive integers");
  }
  const l = (a, b) => (a * b) / gcd(a, b);
  return arr.reduce((a, b) => l(a, b));
}

export { fibonacci, isPrime, gcd, hcf, lcm };
