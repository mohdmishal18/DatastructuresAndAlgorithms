//find all the duplicates in the array.

// Big-O = O(n ^ 2) (Taking the worst case , if there are no duplicates in the 
//array the loop will iterate till the end of the array.);

function findDuplicate(arr)
{
    let result = [];

    for(let i = 0; i < arr.length - 1; i++)
    {
        for(let j = i + 1; j < arr.length - 1; j++) 
        {
            if(arr[i] === arr[j]) result.push(arr[i]);
        }
    }

    return result
}

//Efficient way; (using hash and set)

//Big-O = O(n) = because there is no nested loops the array only interating once.
// because of we are set method we can only one copy of the duplicate element;
function efficientFind(arr)
{
    let seen = new Set();
    let duplicates = new Set();  // in 
    
    for(let i = 0; i < arr.length; i++)
    {
        if(seen.has(arr[i]))duplicates.add(arr[i])
        else seen.add(arr[i]);
    }

    return Array.from(duplicates)
}
console.log(efficientFind([6,6,2,8,2,6,3,8,3,6]))

//if you want all duplicates.
function efficientFind2(arr)
{
    let seen = new Set();
    let duplicate = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(seen.has(arr[i]))duplicate.push(arr[i]);
        else seen.add(arr[i]);
    }

    return duplicate;
}


