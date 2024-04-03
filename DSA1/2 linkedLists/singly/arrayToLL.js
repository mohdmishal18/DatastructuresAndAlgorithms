class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}
class linkedList 
{
    constructor()
    {
        this.head = null 
        this.tail = null 
        this.size = 0;
    }
    isEmpty()
    {
        return this.size === 0;
    }
    getSize()
    {
        return this.size
    }
    push(data)
    {
        const node = new Node(data);
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
        return this
    }
    print()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty !!!")
        }
        else
        {
            let curr = this.head
            let listData = ''
            while(curr)
            {
                listData += curr.data + " -> "
                curr = curr.next
            }
            return console.log("list : " + listData);
        }
    }
    arrayToLL(array)
    {
        for(let i = 0; i < array.length; i++)
        {
            this.push(array[i])
        }

        return this.print()
    }
}
let arr = [1,2,3,4]
const list = new linkedList()
list.arrayToLL(arr)