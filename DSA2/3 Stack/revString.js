function reverseString(string)
{
    let stack = []
    for(let i = 0; i < string.length; i++)
    {
        stack.push(string[i])
    }

    string = ""
    while(stack.length)
    {
        string += stack.pop()
    }

    return string;
}

let string = "Mohammed Mishal"
console.log(reverseString(string))