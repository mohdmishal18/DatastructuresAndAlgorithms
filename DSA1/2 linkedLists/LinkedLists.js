// Linked List .

class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    isEmpty()
    {
        return this.size === 0;
    }

    getSize()
    {
        return this.size;
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

    print()
    {
        if(this.isEmpty())
        {
            console.log("the list is empty")
        }
        else 
        {
            
        }
    }
}

const list = new LinkedList();
console.log("list is empty : ",list.isEmpty());
console.log('list size : ', list.getSize());
list.prepend(10)
list.prepend(45)