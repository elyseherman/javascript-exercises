const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0)
};

const multiply = function (arr) {
  return arr.reduce((prev, cur) => {
    return prev * cur;
  }, 1)
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (x) {

  function computeFactorial(x) {
    if (x == 0 || x == 1) {
      return 1
    }

    return x * computeFactorial(x - 1)
  }

  return computeFactorial(x)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
