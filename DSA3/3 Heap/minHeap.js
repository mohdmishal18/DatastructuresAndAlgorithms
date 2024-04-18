// Min head
// in min heap , the values of parent nodes are smaller than hte child node

class MinHeap
{
    constructor()
    {
        this.heap = []
        this.size = 0
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
        return this.heap[index * 2 + 2]
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
        return index * 2 + 2
    }

    hasParent(index)
    {
        if(this.getParentIndex(index) < 0)return false
        else return true
    }

    hasLeftChild(index)
    {
        if(this.heap[index * 2 + 1])return true
        else return false
    }

    hasRightChild(index)
    {
        if(this.heap[index * 2 + 2])return true
        else return false
    }

    add(val)
    {
        this.heap.push(val)
        this.size++
        this.heapifyUp()
    }

    poll()
    {
        this.heap[0] = this.heap.pop() 
        this.size--
        this.heapifyDown()
    }

    heapifyUp()
    {
        let index = this.size - 1
        while(this.hasParent(index) && this.parent(index) > this.heap[index])
        {
            [this.heap[index] , this.heap[this.getParentIndex(index)]]  = [this.heap[this.getParentIndex(index)] , this.heap[index]]
            index = this.getParentIndex(index)
        }       
    }

    heapifyDown()
    {
        let index = 0
        while(this.hasLeftChild(index))
        {
            let smallerChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
            {
                smallerChildIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index] > this.heap[smallerChildIndex])
            {
                [this.heap[index] , this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex] , this.heap[index]]
            }
            else break

            index = smallerChildIndex
        }
    }

    heapSort()
    {
        let sortedArray = []
        while(this.size > 0)
        {
            sortedArray.push(this.heap[0])
            this.poll()
        }
        return sortedArray
    }

    display()
    {
        console.log(this.heap)
    }
}

const minHeap = new MinHeap()

minHeap.add(10)
minHeap.add(20)
minHeap.add(40)
minHeap.add(30)
minHeap.add(35)
minHeap.add(60)
minHeap.add(80)
minHeap.add(5)

minHeap.display()

console.log(minHeap.heapSort())
