//Max heap
// in this the value of parent node is greater than the child nodes

// To find the parent :  (i - 1) / 2 >> 0
// to find the left child : 2i + 1                // i = no of node
// to find the right child : 2i + 2        

class MaxHeap
{
    constructor()
    {
        this.heap = []
        this.size = 0
    }

    isEmpty()
    {
        return this.size === 0
    }

    getSize()
    {
        return this.size
    }

    parent(index)
    {
        return this.heap[Math.floor((index - 1) / 2)]
    }

    leftChild(index)
    {
        return this.heap[index * 2 + 1]
    }

    rightChild(index)
    {
        return this.head[index * 2 + 2]
    }

    getParentIndex(index)
    {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index)
    {
        return index * 2 + 1
    }

    getRightChildIndex(index)
    {
        return index * 2 + 1
    }

    hasLeftChild(index)
    {
        if(this.heap[Math.floor((index * 2) + 1)])return true
        return false
    }

    hasRightChild(index)
    {
        if(this.heap[Math.floor((index * 2) + 2)])return true
        return false
    }

    hasParent(index)
    {
        if(this.getParentIndex(index) < 0)return false
        return true
    }
    
    add(val)
    {
        this.heap.push(val)
        this.size++
        this.heapifyUp()
    }

    heapifyUp()
    {
        let index = this.size - 1
        while(this.hasParent(index) && this.parent(index) < this.heap[index])
        {
            [this.heap[this.getParentIndex(index)], this.heap[index]] = [this.heap[index] , this.heap[this.getParentIndex(index)]]
            index = this.getParentIndex(index)
        }
    }

    display()
    {
        console.log(this.heap)
    }
}

const maxHeap = new MaxHeap()

maxHeap.add(5)
maxHeap.add(6)
maxHeap.add(8)
maxHeap.add(34)
maxHeap.add(21)
maxHeap.add(45)
maxHeap.add(56)

maxHeap.display()