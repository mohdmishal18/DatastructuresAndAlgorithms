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
                  
        }
    }
}

const list = new LinkedList()
console.log(list);
