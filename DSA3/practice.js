// binary search tree

class Node
{
    constructor(val)
    {
        this.left = null
        this.val = val
        this.right = null
    }
}

class BST
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
                root.left = newNode
            }
            else
            {
                this.insertNode(root.right , newNode)
            }
        }
    }

    search(root , val)
    {
        if(!root)return false
        else
        {
            if(val === root.val)return true
            else
            {
                if(val < root.val)
                {
                    return this.search(root.left , val)
                }
                else
                {
                    return this.search(root.right , val)
                }
            }
        }
    }
}

const bst = new BST()
bst.insert(20)
bst.insert(15)
bst.insert(10)
bst.insert(5)
bst.insert(2)

console.log(bst.search(bst.root , 5))