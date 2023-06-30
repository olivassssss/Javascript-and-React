
let varA = "A";  // -> B
let varB = "B";  // -> C
let varC = "C";  // -> A


console.log(varA, varB, varC)

const newVarA = "A"

varA = varB
varB = varC
varC = newVarA

console.log(varA, varB, varC)

// outra forma por array

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);