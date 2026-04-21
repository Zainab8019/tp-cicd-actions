function add(a, b) {
  var result = a + b; //erreur ajoutee
  return result;
}

function multiply(a, b) {
  return a * b;
}

function factorial(n) {
  if (n < 0) throw new Error('Nombre négatif');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, multiply, factorial };