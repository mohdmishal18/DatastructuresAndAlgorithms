// Problem : Given a sorted array of 'n' elements and a target element 't', 
// find the index of 't' in the array. Return -1 if the target element is not found.

//NOTE : Binary search algorithm can only applied in a sorted array. !!!

let arr = [-3,0,1,2,3,4,5,6,7,8,9];
let target = 7;

function findIndex(arr,  target)
{
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex)         // Big O = O(logn)
    {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if(target === arr[middleIndex])return middleIndex;

        if(target > arr[middleIndex])leftIndex = middleIndex + 1;
        else rightIndex = middleIndex - 1;
    }
    
    return -1;
}
console.log(findIndex(arr,target));