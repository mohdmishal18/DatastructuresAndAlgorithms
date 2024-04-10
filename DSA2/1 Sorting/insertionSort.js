//Theory : 
// The algorithm takes one value at a time from the unsorted part of the array
//  and puts it into the right place in the sorted part of the array,
//   until the array is sorted.

// How it works:

// Take the first value from the unsorted part of the array.
// Move the value into the correct place in the sorted part of the array.
// Go through the unsorted part of the array again as many times as there are values.

// Insertion Sort.
// Big-O = O(n^2)

function insertionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let numberToInsert = arr[i];
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert)
        {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numberToInsert
    }
    return arr
}

const arr = [8,7,1,1,0,-3,4,-3,2,4,7,2,9]
console.log(insertionSort(arr))