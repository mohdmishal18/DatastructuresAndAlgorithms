// bubble Sort
let arr = [0,1,8,3,5,4,9,2,9,2,6]

function bubbleSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[i] < arr[j])
            {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function bubbleSort2(arr)
{
    let swapped = false
    do
    {
        swapped = false
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] > arr[i + 1])
            {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    }
    while(swapped)

    return  arr
}

console.log(bubbleSort2(arr));