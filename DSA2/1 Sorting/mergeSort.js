// Merge Sort
//Theory
// Merge sort is one of the sorting techniques that work on the divide and conquer approach.
// The Given array is divided in half again and again and those parts are arranged in sorted order
// and merged back to form the complete sorted array.


//Approach
// First create a recursive function mergeSort the divide the array into halves again and again by findiing the middle index and call mergesort again for left and right halves.
// Define a function merge that will be called to sort and merge the subarrays and will be called after the mergeSort function returns.
// Inside merge function take new subarrays divided by mergeSort and start the merge process
// Merge the subarrays in a way that the smallar element is put first in the array on every iteration and after one is finished push the second subarray completely.
// It process starting from the unit subarray will continue till the whole array is merged and sorted completely.

function mergeSort(arr)
{
    if(arr.length < 2)return arr

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0 , mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr , rightArr)
{
    const sortedArr = []
    while(leftArr.length && rightArr.length)
    {
        if(leftArr[0] <= rightArr[0])
        {
            sortedArr.push(leftArr.shift())
        }
        else
        {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr , ...leftArr , ...rightArr]
}

const arr = [9,3,6,4,7,0,9,1,0,4,8,5,4]
console.log("original array")
console.log(arr)
console.log("sorted array using merge sort")
console.log(mergeSort(arr))