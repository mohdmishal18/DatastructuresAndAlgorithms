// POWER OF 2

// Problem : Give a positive Integer 'n', determine if the number is a power
// of 2 or not

// NOTE : An integer is a power of two if there exists an integer 'x' such that
// 'n' === 2^x
// isPowerOfTwo(1) = true (2^0)   (Anything raised to zero is one)
// isPowerOfTwo(2) = true(2^1)
// isPowerOfTwo(5) = false

// function isPowerOfTwo(n)
// {
//     if(n < 1)return false

//     while(n > 1)
//     {
//         if(n % 2 !== 0)return false // O(logn)
        
//         n = n / 2;
//     }
//     return true
// }

// console.log(isPowerOfTwo(32));

// Big-O Guide.

//calculation not depend on input size - O(1)
// 1 loop - O(n)
// nested loops - O(n^2)
// Input size reduced by half - O(logn)


//efficient way.
// function isPowerOfTwo(n)
// {
//     if(n < 1)return false

//     return (n & (n - 1)) === 0; // O(1)
// }

// console.log(isPowerOfTwo(5));