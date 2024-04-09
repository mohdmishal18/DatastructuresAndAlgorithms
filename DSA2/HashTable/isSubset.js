//Find whether an array is subset of another array.


//Normal Method
// Time Complexity: O(m*n)
// Auxiliary Space: O(1)
// let arr1 = [1,9,2,6,2,9,3,5,4];
// let arr2 = [1,3,5,88];
// function isSubset(arr1,arr2)
// {
//     for(let i = 0; i < arr2.length; i++)
//     {
//         for(let j = 0; j < arr1.length; j++) 
//         {
//             if(arr1[j] === arr2[i])break

//             if(j === arr1.length - 1)return false
//         }
//     }

//     return true
// }
// console.log(isSubset(arr1, arr2));
