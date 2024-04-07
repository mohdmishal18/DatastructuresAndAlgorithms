//Quick Sort

function quickSort(arr)
{
    if(arr.length < 2)return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] <= pivot)left.push(arr[i])
        else right.push(arr[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [7,9,1,3,4,5,2,0,9,3,5,2,8,7]

console.log(quickSort(arr))

// Big-O
// worst case = O(n ^ 2)
// average case = O(n log n)

