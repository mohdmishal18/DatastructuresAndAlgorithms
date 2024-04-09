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

    printReverse()
    {
        if(!this.head)return console.log("the list is empty")
        
        let last = this.tail
        let reverse = ""
        while(last)
        {
            reverse += `${last.data} ->`
            last = last.prev
        }
        return console.log(reverse)
    }

    singlyToDoubly(singlyList)
    {
        if (!singlyList.head) return null;

        let doublyHead = null;
        let prevDoubly = null;
        let currentSingly = singlyList.head;
        let prevNode = null;

        while (currentSingly) {
            const newNode = new Node(currentSingly.data);
            if (!doublyHead) {
                doublyHead = newNode;
            } else {
                prevDoubly.next = newNode;
                newNode.prev = prevDoubly;
            }
            prevDoubly = newNode;

            // Update the prev pointer of the current singly linked list node
            currentSingly.prev = prevNode;
            prevNode = currentSingly;

            currentSingly = currentSingly.next;
        }

        this.tail = prevDoubly; // Update the tail pointer of the doubly linked list
        return console.log(doublyHead)
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

    append(data)
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
    prepend(data)
    {
        const node = new Node(data);
        if(this.isEmpty())
        {
            this.head = node
            this.tail = node
        }
        else
        {
            node.next = this.head
            this.head = node;
        }
        this.size++
    }    
    middleValue()
    {
        let fast = this.head;
        let slow = this.head;

        while(fast && fast.next)
        {
            slow = slow.next;
            fast = fast.next.next
        }
        return console.log(slow.data);
    }
}
const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print();

list.singlyToDoubly(list)
list.printReverse()