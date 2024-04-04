
//Delete the middle node of a linked list(is a leetcode question that i got it for review)



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
        return this.size
    }

    isEmpty()
    {
        return this.size === 0
    }

    append(data)
    {
        const newNode = new Node(data)
        if(this.isEmpty())
        {
            this.head = newNode
        }
        else
        {
            let curr = this.head;
            while(curr.next)
            {
                curr = curr.next;
            }
            curr.next = newNode
        }
        this.size++
        return this
    }

    print()
    {
        if(this.isEmpty())
        {
            return console.log("the list is empty");
        }
        else
        {
            let curr = this.head
            let listData = ""
            while(curr)
            {
                listData += curr.data + " -> "
                curr = curr.next
            }
            console.log("list : " + listData);
        }
    }

    delMiddle()
    {
        if(this.isEmpty())
        {
            return console.log("the list is emtpy");
        }
        else if(this.size === 1)
        {
            this.head = null
        }
        else
        {
            let slow = this.head
            let fast = this.head
            let prevSlow = null

            while(fast && fast.next)
            {
                fast = fast.next.next
                prevSlow = slow
                slow = slow.next
            }
            prevSlow.next = slow.next
            this.size--
            return this
        }
    }
}

const list = new SinglyLinkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
list.delMiddle()
list.print()