// Insertion Sort.
// Big-O = O(n^2)

function InsertionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let numberToInsert = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > numberToInsert)
        {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = numberToInsert
    }
}

const arr = [8,7,1,1,0,-3,4,-3,2,4,7,2,9];
console.log(arr);
InsertionSort(arr);
console.log(arr);