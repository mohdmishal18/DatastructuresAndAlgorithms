// selection sort

function selectionSort(arr)
{
    let small
    for(let i = 0; i < arr.length; i++)
    {
        small = i
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[small] > arr[j])
            {
                small = j
            }
        }
        [arr[i] , arr[small]] = [arr[small] , arr[i]]
    }

    return arr
}

let arr = [-900,4,1,6,7,434,2,4,677,1,-888]
console.log(selectionSort(arr))