let arr = [1,1,1,2,2,3,3,4];
let target = 1;

// this will return the last occurance of the target.

// function binarySearch(arr , target)
// {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while(leftIndex <= rightIndex)
//     {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if(target === arr[middleIndex] && target === arr[middleIndex + 1])
//         {
//             leftIndex = middleIndex + 1
//         }
//         else if(target === arr[middleIndex])return middleIndex;
//         else
//         {
//             if(target < arr[middleIndex]) rightIndex = middleIndex - 1;
//             else leftIndex = middleIndex + 1;
//         }
//     }
// }

//this will return the first occurance of the target.

// function binarySearch(arr , target)
// {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while(leftIndex <= rightIndex)
//     {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if(target === arr[middleIndex] && target === arr[middleIndex - 1])
//         {
//             rightIndex = middleIndex - 1
//         }
//         else if(target === arr[middleIndex])return middleIndex;
//         else
//         {
//             if(target < arr[middleIndex]) rightIndex = middleIndex - 1;
//             else leftIndex = middleIndex - 1;
//         }
//     }
// }
// console.log(binarySearch(arr , target));