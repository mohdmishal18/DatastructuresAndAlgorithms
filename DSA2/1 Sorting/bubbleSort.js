// Theory :
// How it works:

// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.

//




// Bubble sort algorithm.
//Big-O = O(n^2);

// efficienet implementation, by implementing a boolean variable if the no elements are swapped we can stop the execution no need to run after the array is sorted
function bubbleSort(arr)
{
    let swapped
    do
    {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++)
        {
            if(arr[i] > arr[i + 1])
            {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

function bubbleSort2(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] > arr[j])
            {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp 
            }
        }
    }

    return arr
}

let arr = [1,0,3,5,2,-8,9,3,6,2,0,1];

console.log(bubbleSort(arr))