// class Node
// {
//     constructor(data)
//     {
//         this.data = data
//         this.next = null
//     }
// }

// class Stack
// {
//     constructor()
//     {
//         this.top = null
//         this.size = 0
//     }

//     isEmpty()
//     {
//         return this.size === 0
//     }

//     getSize()
//     {
//         return this.size
//     }

//     peek()
//     {
//         if(this.isEmpty())
//         {
//             return console.log("the stack is empty !!!");
//         }
//         else
//         {
//             return console.log(this.top.data);
//         }
//     }

//     push(data)
//     {
//         const node = new Node(data)
//         if(this.isEmpty())
//         {
//             this.top = node
//         }
//         else
//         {
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//     }

//     pop()
//     {
//         if(this.isEmpty())
//         {
//             return console.log("the stack is empty !!!");
//         }
//         else
//         {
//             this.top = this.top.next
//         }
//         this.size--
//     }

//     print()
//     {
//         if(this.isEmpty())
//         {
//             return console.log("The stack is empty !!!");
//         }
//         else
//         {
//             let curr = this.top
//             let stack = ""
//             while(curr)
//             {
//                 stack += curr.data + " -> "
//                 curr = curr.next            
//             }
//             return console.log("stack : " + stack)
//         }
//     }
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.print()

// stack.pop()
// stack.print()

// console.log("top element");
// stack.peek();

//stack using arrays

class Stack
{
    constructor()
    {
        this.stack = []
    }

    push(data)
    {
        this.stack.push(data)
        return this
    }

    print()
    {
        for(let i = 0; i < this.stack.length; i++)
        {
            console.log(this.stack[i]);
        }
    }
}


const array = new Stack()

array.push(4)
array.print()