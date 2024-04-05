// Bubble sort algorithm.
//Big-O = O(n^2);

let arr = [1,0,3,5,2,-8,9,3,6,2,0,1];

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
}

console.log(arr);
bubbleSort(arr);
console.log(arr);
