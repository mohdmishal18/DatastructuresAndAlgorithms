class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null
        this.tail = null
        this.size = 0;
    }

    getSize()
    {
        return this.size
    }

    isEmpty()
    {
        return this.size === 0
    }

    push(data)
    {
        const node = new Node(data)
        if(this.isEmpty())
        {
            this.head = node;
            this.tail = node;
        }
        else
        {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    pop()
    {
        if(this.isEmpty())return console.log("empty")

        if(this.getSize() === 1)
        {
            this.head = null
            this.tail = null
        }
        else
        {
           let prev = this.head
           while(prev.next !== this.tail)
           {
            prev = prev.next
           }

           prev.next = null
           this.tail = prev
        }
        this.size--
    }

    print()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty")
        }
        else
        {
            let listData = ''
            let curr = this.head
            while(curr)
            {
                listData += curr.data + ' -> '
                curr = curr.next
            }
            console.log(listData);
        }
    }
}

const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.print()

list.pop()
list.print()