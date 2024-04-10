//quick sort

function quickSort(arr)
{
    if(arr.length < 2)return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] < pivot)left.push(arr[i])
        else right.push(arr[i])
    }

    return [...quickSort(left) , pivot , ...quickSort(right)]
}

let arr = [7,8,2,0,4,1,0,8,3,6,5,-5]
console.log(quickSort(arr))