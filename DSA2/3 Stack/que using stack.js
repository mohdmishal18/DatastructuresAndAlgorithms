class Queue
{
    constructor()
    {
        this.L1 = []
        this.L2 = []
    }
    enqueue(data)
    {
        while(this.L1.length !== 0)
        {
            this.L2.push(this.L1.pop())
        }

        this.L1.push(data)

        while(this.L2.length !== 0)
        {
            this.L1.push(this.L2.pop())
        }
    }
    dequeue()
    {
        if(this.L1.length === 0)return "the queue is empty"
        else
        {
            return this.L1.pop()
        }
    }
    print()
    {
        if(this.L1.length === 0)return console.log("the queue is empty!!")
        else
        {
            let queue = ""
            for(let i = 0; i < this.L1.length; i++)
            {
                queue += this.L1[i] + " "
            }
            return console.log("queue : " + queue);
        }
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()
queue.dequeue()
queue.print()



