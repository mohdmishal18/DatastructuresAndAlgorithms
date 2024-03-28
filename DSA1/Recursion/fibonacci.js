
//1. $$$$$$$$$$ RESURSIVE FIBONACCI SEQUENCE $$$$$$$$$$$

// It is a sequence in which each number is the sum of the two preceeding ones.
//if F represents a function to calculate the fibunacci number,then
//Fn = Fn-1 + Fn-2
//F0 = 0 and F1 = 1

//F2 = F1 + F0
//F2 = 1 + 0
//F2 = 1

// function recursiveFibonacci(n)
// {
//    if(n < 2)return n
   
//    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // O(2^n)
// }

// console.log(recursiveFibonacci(3))