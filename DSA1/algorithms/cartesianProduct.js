// cartesian product

let arr1 = [1,2]
let arr2 = [3,4,5]


function cartesianProduct(arr1 , arr2)
{
    let result = []

    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            result.push([arr1[i],arr2[j]])
        }
    }

    return result;
}

console.log(cartesianProduct(arr1 , arr2))