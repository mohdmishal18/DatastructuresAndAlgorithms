// linked list.
class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList
{
    constructor()
    {
        this.head = null
        this.size = 0
    }
    
    getSize()
    {
        return this.size;
    }
    
    isEmpty()
    {
        return this.size === 0;
    }
    
    append(data)
    {
        const node = new Node(data)
        if(this.isEmpty())
        {
            this.head = node;
        }
        else
        {
            let prev = this.head
            while(prev.next)
            {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++
    }
    
    prepend(data)
    {
        const node = new Node(data)
        if(this.isEmpty())
        {
            this.head = node
        }
        else
        {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    insert(data, index)
    {
        if(index < 0 || index > this.size)
        {
            return console.log(null)
        }
        if(index === 0)
        {
            this.prepend(data)
        }
        else
        {
           const node = new Node(data);
           let prev = this.head
           for(let i = 0; i < index - 1; i++)
           {
               prev = prev.next
           }
           node.next = prev.next;
           prev.next = node;
           this.size++
        }
    }
    
    shift()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty !! no elements to remove")
        }
        else if(this.getSize() === 1)
        {
            this.head = null;
            this.size--;
            return console.log("head node removed")
        }
        else
        {
            let removedNode = this.head;
            this.head = this.head.next
            this.size--;
            return console.log("Node " + removedNode.data + " removed")
        }
    }
    
    pop()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty !! no elements to remove")
        }
        else if(this.getSize() === 1)
        {
            this.head = null;
            this.size--;
            return console.log("head node removed")
        }
        else
        {
           let prev = this.head;
           for(let i = 0; i < this.size - 2; i++)
           {
               prev = prev.next
           }
           prev.next = null
           this.size--;
        }
    }
    
    removeFrom(index)
    {
        if(index < 0 || index > this.size - 1)
        {
            return console.log("please enter a valid index")
        }
        
        if(index === 0)
        {
            this.head = this.head.next;
        }
        else
        {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++)
            {
                prev = prev.next
            }
            // let removedNode = prev.next
            // prev.next = removedNode.next;
            prev.next = prev.next.next
        }
        this.size--
    }

    removeData(data)
    {
        if(this.isEmpty())
        {
            return null
        }
        
        if(this.head.data === data)
        {
            this.head = this.head.next
        }
        else
        {
            let prev = this.head
            while(prev.next && prev.next.data !== data)
            {
                prev = prev.next
            }
            if(prev.next)
            {
                // const removedNode = prev.next
                // prev.next = removedNode.next
                prev.next = prev.next.next
            }
        }
        this.size--;
    }

    search(data)
    {
        if(this.isEmpty())
        {
            return -1
        }

        let prev = this.head
        let i = 0;
        while(prev)
        {
            if(prev.data === data)
            {
                return i;
            }
            i++
            prev = prev.next
        }
        return -1
    }

    reverse()
    {
        let prev = null
        let curr = this.head
        while(curr)
        {
            let next = curr.next
            curr.next = prev

            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    print()
    {
        if(this.isEmpty())
        {
            console.log("The list is empty !!!")
        }
        else
        {
            let curr = this.head;
            let listData = ''
            while(curr)
            {
                listData += curr.data + " -> "
                curr = curr.next
            }
            console.log("list : " + listData)
        }
    }
}

const list = new SinglyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()

list.reverse();
console.log("Reversed list ");
list.print()