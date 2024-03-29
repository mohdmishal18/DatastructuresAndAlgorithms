//1.
// First Approach $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let arr = [7,5,8,0,6,2,0,9,3,4,0]

// for(let left = 0,right = arr.length - 1; left < arr.length/2,right >= arr.length/2; left++,right--)
// {
//     let temp = 0;
//     temp = arr[left];
//     arr[left] = arr[right] ;
//     arr[right] = temp;
// }

// console.log(arr);

//2.
// Second Approach $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let arr = [1,2,3,4,5]

// for(let index = 0; index < arr.length/2; index++)
// {
//     let temp = 0; 
//     temp = arr[index];
//     arr[index] = arr[(arr.length - 1) - index] ;
//     arr[(arr.length - 1) - index] = temp;
// }

// console.log(arr);

