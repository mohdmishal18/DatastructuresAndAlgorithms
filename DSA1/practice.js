class Node 
{
    constructor(val)
    {
        this.val = val
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

    isEmpty()
    {
        return this.size === 0 || this.head === null
    }

    getSize()
    {
        return this.size
    }

    push(val)
    {
        const node = new Node(val)
        if(this.isEmpty())
        {
            this.head = node
            this.size++
        }
        else
        {
            let curr = this.head
            while(curr.next)
            {
                curr = curr.next
            }
            curr.next = node
            this.size++
        }
    }

    unShift(val)
    {
        const node = new Node(val)
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

    shift()
    {
        if(this.isEmpty())return console.log("the list is empty !!")
        else
        {
            this.head = this.head.next
            this.size--
        }
    }

    pop()
    {
        if(this.isEmpty())return console.log("the list is empty")
        else if(!this.head.next)
        {
            this.head = null
            this.size--;
        }
        else  
        {
            // let curr = this.head
            // for(let i = 0; i < this.getSize() - 2; i++)
            // {
            //     curr = curr.next
            // }
            // curr.next = curr.next.next
            // this.size--

            let fast = this.head.next
            let slow = this.head

            while(fast.next)
            {
                fast = fast.next
                slow = slow.next
            }
            slow.next = slow.next.next
            this.size--
        }
    }

    removeData(val)
    {
        if(this.isEmpty())return console.log("the list is empty")
        else if(this.head.data == val)this.head = this.head.next
        else
        {
            let curr = this.head
            while(curr.next && curr.next.val != val)
            {
                curr = curr.next
            }

            if(curr.next)
            {
                curr.next = curr.next.next
            }
            else
            {
                return console.log("data doesn't exist")
            }

        }
        this.size--
    }

    removeAt(index)
    {
        if(index < 0 || index > this.getSize() - 1)return console.log("please enter a valid index")

        if(this.isEmpty())return console.log("the list is empty")
        else if(index == 0)this.head = this.head.next
        else
        {
            let curr = this.head
            for(let i = 0; i < index - 1; i++)
            {
                curr = curr.next
            }
            curr.next = curr.next.next
        }
        this.size--
    }


    print()
    {
        if(this.isEmpty())return console.log("the list is empty")
        else
        {
            let list = ''
            let curr = this.head
            while(curr)
            {
                list += curr.val + ' -> '
                curr = curr.next
            }
            return console.log(list + 'null')
        }
    }

}

const linkedList = new SinglyLinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
linkedList.push(6)

linkedList.removeAt(6)

linkedList.print();