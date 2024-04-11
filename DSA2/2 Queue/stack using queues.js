// implement queue using stacks

class Stack
{
    constructor()
    {
        this.queue1 = []
        this.queue2 = []
    }

    push(data)
    {
        this.queue2.push(data)

        while(this.queue1.length != 0)
        {
            this.queue2.push(this.queue1.shift())
        }

        this.temp = this.queue1
        this.queue1 = this.queue2
        this.queue2 = this.temp
    }

    pop()
    {
        if(this.queue1.length != 0)return this.queue1.shift()
        else return null
    }

    peek()
    {
        if(this.queue1.length != 0)return this.queue1[0]
        else return null
    }

    print()
    {
        if(this.queue1.length === 0)return console.log("the stack is empty");
        else 
        {
            let stack = ""
            for(let i = 0; i < this.queue1.length; i++)
            {
                stack += this.queue1[i] + " "
            }
            return console.log("stack : " + stack)
        }
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()

stack.pop()
stack.print()