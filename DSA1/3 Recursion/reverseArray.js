// Reverse an array with recursion.


//1. 
function reverseArr(arr)
{
    if(arr.length <= 0)return arr;

    return reverseArr(arr.slice(1)).concat(arr[0]);
}


//2.

function reverseArr2(arr)
{
    function recurseHelper(arr, start , end)
    {
        if(start >= end)return;

        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp;

        return recurseHelper(arr,start + 1, end - 1);
    }

    recurseHelper(arr, 0 , arr.length - 1)

    return arr;
}

console.log(reverseArr2([5,4,3,2,1]));