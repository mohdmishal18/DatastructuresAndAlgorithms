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

    append(data)
    {
        const node = new Node(data)

        if(this.isEmpty())
        {
            this.head = node;
        }
        else
        {
            let prev = this.head;
            while(prev.next)
            {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(data, index)
    {
        if(index < 0 || index > this.size)
        {
            return
        }
        if(index === 0)
        {
            this.prepend(data)
        }
        else
        {
            let node = new Node(data)
            let prev = this.head
            for(let i = 0; i < index - 1; i++)
            {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }

    removeFrom(index)
    {
        if(index < 0 || index >= this.size)
        {
            return null
        }
        let removedNode
        if(index === 0)
        {
            removedNode = this.head
            this.head = this.head.next
        }
        else
        {
            let prev = this.head
            for(let i = 0; i < index - 1; i++)
            {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.data
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
            this.size--
            return data
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
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return data;
            }
            return null
        }
    }

    search(data)
    {
        if(this.isEmpty())
        {
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr)
        {
            if(curr.data === data)
            {
                return i
            }
            curr = curr.next
            i++
        }
        return -1;
    }

    reverse()
    {
        let prev = null;
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
            console.log("the list is empty")
        }
        else 
        {
            let curr = this.head
            let listValues = ''
            while(curr)
            {
                listValues += `${curr.data}` + " "
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();

console.log("list is empty : ",list.isEmpty());
console.log('list size : ', list.getSize());
list.print();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

list.print()

list.reverse()
list.print()