
//1. $$$$$$$$$$ RESURSIVE FACTORIAL OF A NUMBER $$$$$$$$$$$

//5! = 5*4*3*2*1  || 5 * 4!
//4! = 4*3*2*1 || 4 * 3!          $$ n! = n * (n - 1)! $$
//3! = 3*2*1 || 3 * 2!

// function recursiveFactrorial(n)           
// {
//    if(n === 0)return 1
//    return n * recursiveFactrorial(n - 1)  //Big O = O(n).
// }

// console.log(recursiveFactrorial(8));