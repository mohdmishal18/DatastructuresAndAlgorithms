// Problem = Given a number "n",find the first 'n' elements of the fibonacci sequence.

                                                                            //==========================================================
                                                                            //Fibonacci Sequence : It is a sequence in which each Number
                                                                            //is the sum of two preceeding ones.
                                                                            //==========================================================
                                                                            //note : The first 2 number in the sequence are 0 and 1;
                                                                            //fibonacciSequence(2) = [0,1]
                                                                            //fibonacciSequence(3) = [0,1,1]
                                                                            //fibonacciSequence(7)= [0,1,1,2,3,5,8]
function fibonacciSequence(n)
{
    const fib = [0,1];

    for(let i = 2; i < n; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacciSequence(7));

// Big-O Guide.

//calculation not depend on input size - O(1)
// 1 loop - O(n)
// nested loops - O(n^2)
// Input size reduced by half - O(logn)