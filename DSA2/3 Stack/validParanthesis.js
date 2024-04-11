function check(string)
{
    let stack = []
    for(let i = 0; i < string.length; i++)
    {
        let x = string[i]
        if(x === "(" || x === "{" || x === "[")
        {
            stack.push(x)
            continue
        }
        if(stack.length === 0)return "Not balanced"
        let check;
        switch(x)
        {
            case ")":
                check = stack.pop()
                if(check === "{" || check === "[")return "Not balanced"
                
                break
            
            case "}":
                check = stack.pop()
                if(check === "[" || check === "(")return "Not balanced"
                
                break

            case "]":
                check = stack.pop()
                if(check === "(" || check === "{")return "Not balanced"
                
                break
        }
    }
    return stack.length === 0 ? "balanced" : "Not balanced"
}
let string = '({[hallo],[my name is mishal]]})'
console.log(check(string))