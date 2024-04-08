// insertion sort practice

let arr = [9,3,7,2,0,1,8,4,6,4]
function insertionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let numToinsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numToinsert)
        {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numToinsert
    }

    return arr
}

console.log(arr);
console.log(insertionSort(arr));