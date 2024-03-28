// PRIME NUMBER.

//Problem : Give a natural number 'n',determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product
// of two smaller natural numbers.

// NOTE : isPrime(5) = true (1 * 5 or 5 * 1)
//        isPrime(4) = false(1 * 4 or 2 * 2 or 4 * 1)


// function isPrime(n)
// {
//     if(n < 2)return false;
//     else
//     {
//         for(let i = 2; i < n; i++)
//         {
//             if(n % i == 0)return false
//         }
//     }

//     return true;
// }

// console.log(isPrime(4));

// Big-O Guide.

//calculation not depend on input size - O(1)
// 1 loop - O(n)
// nested loops - O(n^2)
// Input size reduced by half - O(logn)

//optimised solution.
// function isPrime(n)
// {
//     if(n < 2)return false;
//     else
//     {
//         for(let i = 2; i < Math.sqrt(n); i++) // O(sqrt(n)) ,the size won't increase 
//                                               //  increase proportional to the input.
//                                               //  as input size increases the number of 
//                                               // iteration is proportional to the square
//                                               // root of the input number.
//         {
//             if(n % i == 0)return false
//         }
//     }

//     return true;
// }

console.log(isPrime(4));