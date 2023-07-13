// concatenar arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = num1.concat(num2, [7, 8, 9], 'Diogo')

//... rest operator

const num4 = [...num1, ...num2, ...[7, 8, 9], 'Diogo']
console.log(num3)