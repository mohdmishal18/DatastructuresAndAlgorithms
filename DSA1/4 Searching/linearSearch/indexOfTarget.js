// Problem : Given an array of 'n' elements and a target element 't',find the 
// index of 't' in the array.Return -1 if the target element is not found.

let arr = [7,3,9,6,0,4];
let t = 4;

function findIndex(arr , t)
{
    for(let i = 0; i < arr.length; i++) // Big-O = O(n)
    {
        if(arr[i] === t)return i;
    }

    return -1;
}

console.log(findIndex(arr , t));