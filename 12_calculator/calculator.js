const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((sum,a) => sum + a,0)
};

const multiply = function(arr) {
return arr.reduce((prod,a) => prod*a)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let j = 1;
	for(i = 1;i<=a;i++) {
    j *= i;
  }
  return j;
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
