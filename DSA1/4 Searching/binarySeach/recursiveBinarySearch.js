// Problem : Given a sorted array of 'n' elements and a target element 't', 
// find the index of 't' in the array. Return -1 if the target element is not found.

//NOTE : Binary search algorithm can only applied in a sorted array. !!!

//pseudo code.
//# if the array is empty return -1 as the element can not be found.
//# if the array has elements,find the middle element of the array,
//  if the middle element is equal to the target return the middle element index.
//# if the target is less than the middle element ,binary search the left half of the array.
//# if the target is greater than the middle element ,binary search the right half of the array.

let array = [1,2,3,4,5,6,7];
let target = 1;

function recursiveBinarySearch(arr,t)
{
   return recursiveSearch(arr, t , 0 , arr.length - 1)
}

function recursiveSearch( arr , t , leftIndex , rightIndex)
{
    if(leftIndex > rightIndex)return -1

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);   // Big O = O(logn)

    if(t === arr[middleIndex])return middleIndex;

    if(t < arr[middleIndex])return recursiveSearch(arr, t , leftIndex , middleIndex - 1)
    else return recursiveSearch(arr, t , middleIndex + 1, rightIndex);
}

console.log(recursiveBinarySearch(array , target));