// steps to reduce a number to zero;

// Big-O = O(n)
function reduce(n)
{
    let steps = 0;

    while(n > 0)
    {
       if(n % 2 === 0)n = n / 2;
       else n = n - 1;

       steps++
    }

    return steps;
}

console.log(reduce(56));