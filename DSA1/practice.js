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
        this.size = 0;
    }

    getSize()
    {
        return this.size;
    }

    isEmpty()
    {
        return this.size === 0
    }

    prepend(data)
    {
        const node = new Node(data)

        if(this.isEmpty())
        {
            this.head = node
            this.size++
        }
        else
        {
            node.next = this.head
            this.head = node
            this.size++
        }
    }

    append(data)
    {
        const node = new Node(data)
        if(this.isEmpty())
        {
            this.head = node
            this.size++;
        }
        else
        {
            let curr = this.head
            while(curr.next)
            {
                curr = curr.next
            }
            curr.next = node;
            this.size++
        }
    }

    print()
    {
        if(this.isEmpty())
        {
            return console.log("list is empty !!!");
        }
        else
        {
           let curr = this.head
           let list = ''

           while(curr)
           {
            list += `${curr.data}` + " "
            curr = curr.next
           }

            console.log(list);;
        }
    }
}

const list = new LinkedList();
