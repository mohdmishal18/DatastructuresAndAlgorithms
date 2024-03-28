//Problem : Give an integer "n", find the factorial of that interger

// In Mahtmatics , the factorial of a non-negative integer 'n',denoted n!
// is the product of all positive intergers less than or equal to 'n'.

// NOTE : factorial of zero is 1.
//        factorial(4) = 4*3*2*1 = 24;

function factorial(n)
{
    let result = 1;
    for(let i = 2; i <= n; i++)
    {
        result *= i;
    }

    return result;
}

console.log(factorial(3));

// Big-O Guide.

//calculation not depend on input size - O(1)
// 1 loop - O(n)
// nested loops - O(n^2)
// Input size reduced by half - O(logn)