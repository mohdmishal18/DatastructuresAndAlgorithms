// 1.
// First Approach $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function reverse1(arr) {

    for(let left = 0,right = arr.length - 1; left < arr.length/2,right >= arr.length/2; left++,right--)
    {
        let temp = 0;
        temp = arr[left];
        arr[left] = arr[right] ;
        arr[right] = temp;
    }

    return arr;
}


// 2.
// Second Approach $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


function reverse2(arr)
{
    for(let index = 0; index < arr.length/2; index++)
    {
        let temp = 0; 
        temp = arr[index];
        arr[index] = arr[(arr.length - 1) - index] ;
        arr[(arr.length - 1) - index] = temp;
    }
    return arr;
}

// 3.
// Third Approach $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function reverse3(arr)
{
    let last = arr.length - 1;

    for(let i = 0; i < arr.length / 2; i++)  // Big-O = O(n / 2) || O(n);
    {
        let temp = 0;
        temp = arr[i];
        arr[i] = arr[last - i];
        arr[last - i] = temp;
    }
    
    return arr;
}


