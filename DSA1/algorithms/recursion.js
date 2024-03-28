// RECURSION.

//WHAT IS RECURSION ?
//Ans : Recursion is a problem solving technique where the solution depends
// on solution to smaller instances of the same problem

// Basically Recursion is when a function calls itself.

//Why using Recursion ? 
// Great technique to simplify the solution.
// if you find yourself breakdown your problem into smaller versions of the 
//same problem, recursion is very useful.

//NOTE : Every recursive solution needs to have a base case - a condition to 
                                                            // to terminate the recursoin.


//1. $$$$$$$$$$ RESURSIVE FIBONACCI SEQUENCE $$$$$$$$$$$

// It is a sequence in which each number is the sum of the two preceeding ones.
//if F represents a function to calculate the fibunacci number,then
//Fn = Fn-1 + Fn-2
//F0 = 0 and F1 = 1

//F2 = F1 + F0
//F2 = 1 + 0
//F2 = 1

function recursiveFibonacci(n)
{
   if(n < 2)return n
   
   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(3))