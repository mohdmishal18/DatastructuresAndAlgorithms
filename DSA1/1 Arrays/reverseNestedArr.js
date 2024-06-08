let reverseNestedArray = (arr) =>
    {
        for (let i = 0; i < arr.length / 2; i++) {
            if (Array.isArray(arr[i])) {
                arr[i] = reverseNestedArray(arr[i]);
            }
            if (Array.isArray(arr[arr.length - 1 - i])) {
                arr[arr.length - 1 - i] = reverseNestedArray(arr[arr.length - 1 - i]);
            }
            
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }
        return arr;
    }
    
    let array = [1, [2, [3, [4,[5]]], 6, 7]];
    console.log(reverseNestedArray(array).flat(2))