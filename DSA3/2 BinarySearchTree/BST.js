// Binary Search Tree

class Node
{
    constructor(data)
    {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null
    }

    isEmpty()
    {
        return this.root === null
    }
}

const bst = new BinarySearchTree()

console.log("tree is empty ? ", bst.isEmpty())