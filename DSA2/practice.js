// Insertion sort


function InsertionSort(arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        let numberToInsert = arr[i]
        for(let j = i - 1; j >= 0; j--)
        {
            if(numberToInsert < arr[j])
            {
                let temp = arr[j]
                arr[j] = numberToInsert
                arr[j + 1] = temp
            }
            else break
        }
    }
    return arr
}
let arr = [7,2,2,7,3,0,8,1,6,4]
console.log(InsertionSort(arr))