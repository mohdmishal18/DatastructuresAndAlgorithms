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

    }

    poll()
    {

    }

    heapifyUp()
    {
        
    }

    heapifyDown()
    {
        
    }
}