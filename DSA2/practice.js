// merge sort

function mergeSort(arr)
{
    if(arr.length < 2)return arr
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0 , mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr , rightArr)
{
    let sorted = []
    while(leftArr.length && rightArr.length)
    {
        if(leftArr[0] < rightArr[0])sorted.push(leftArr.shift())
        else sorted.push(rightArr.shift())
    }

    return [...sorted , ... leftArr , ...rightArr]
}

let arr = [9,8,7,3,5,2,9,8,4,6,5,4,1,0]
console.log(mergeSort(arr))