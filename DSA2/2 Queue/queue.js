class Node
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

class LLQueue
{
    constructor()
    {
        this.front = null
        this.rear = null
        this.size = 0
    }

    getSize()
    {
        return this.size
    }

    isEmpty()
    {
        return this.size === 0
    }

    peek()
    {
        return console.log(this.front.data)
    }

    enqueue(data)
    {
        const newNode = new Node(data)
        if(this.isEmpty())
        {
            this.front = newNode
            this.rear = newNode
        }
        else
        {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            return console.log("The queue is emtpy !!!")
        }
        else
        {
            let removedNode = this.front
            this.front = removedNode.next
            this.size--
            return console.log(removedNode.data)
        }
    }

    print()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty !!!");
        }
        else
        {
            let curr = this.front
            let queueData = ""
            while(curr)
            {
                queueData += curr.data + " <- "
                curr = curr.next
            }
            return console.log("queue : " + queueData);
        }
    }
}

const queue = new LLQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()

queue.dequeue()
queue.print()