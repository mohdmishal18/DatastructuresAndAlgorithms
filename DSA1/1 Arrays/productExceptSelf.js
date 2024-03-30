// calculate the product of all elements in the array except the element at the current index;

// Big-O = O(n) // the array iterates through all the elements to find the product;
function productExceptSeft(arr)
{
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        let sum = 1;
        for(let j = 0; j < arr.length; j++)
        {
            if(i != j) sum *= arr[j]
        }
        result.push(sum);
    }

    return result
}


// Big-O = O(n)
function efficientWay(arr)
{

}

console.log(productExceptSeft([3,1,2,2,3,1,2,2,3]));