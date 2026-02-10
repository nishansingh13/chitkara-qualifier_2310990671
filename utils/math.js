function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) return null;
  if (n === 0) return [0];
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
  return b === 0 ? a : gcd(b, a % b);
}

function hcf(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

function lcm(arr) {
  const l = (a, b) => (a * b) / gcd(a, b);
  return arr.reduce((a, b) => l(a, b));
}

export { fibonacci, isPrime, gcd, hcf, lcm };
