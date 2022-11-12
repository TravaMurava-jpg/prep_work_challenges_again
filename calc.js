//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations

// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

//Example:

function calc(param1, param2, param3) {
    if (arguments.length == 3) {
        if (param3 == "+") return param1 + param2;
        if (param3 == "-") return param1 - param2;
        if (param3 == "*") return param1 * param2;
        if (param3 == "/") return param1 / param2;
    }
    else {
        if (param2 == "/") {
            param2 = 1;
            return param1 / param2;
        }
        if (param2 == "*") {
            param2 = 1;
            return param1 * param2;
        }
        if (param2 == "+") {
            param2 = 0;
            return param1 + param2;
        }
        if (param2 == "-") {
            param2 = 0;
            return param1 - param2;
        } 
    }
}
console.log(calc(10,5,'+')) //15
console.log(calc(10,"/"))   //10
console.log(calc (30,"*"))  //30
console.log(calc (2,"+"))   //2
console.log(calc (3,"-"))   //3

