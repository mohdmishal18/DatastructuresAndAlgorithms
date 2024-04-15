// Binary Search Tree

class Node
{
    constructor(val)
    {
        this.val = val
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

    insert(val)
    {
        const newNode = new Node(val)
        if(this.isEmpty())
        {
            this.root = newNode
        }
        else
        {
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode)
    {
        if(newNode.val < root.val)
        {
            if(root.left === null)
            {
                root.left = newNode
            }
            else
            {
                this.insertNode(root.left , newNode)
            }
        }
        else
        {
            if(root.right === null)
            {
                root.right = newNode
            }
            else
            {
                this.insertNode(root.right , newNode)
            }
        }
    }

    search(root , val)
    {
        if(!root)
        {
            return false
        }
        else
        {
            if(root.val === val)
            {
                return true
            }
            else if(val < root.val)
            {
                return this.search(root.left , val)
            }
            else return this.search(root.right , val)
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log();
console.log(bst.isEmpty())

console.log()
console.log(bst.search(bst.root , 43));