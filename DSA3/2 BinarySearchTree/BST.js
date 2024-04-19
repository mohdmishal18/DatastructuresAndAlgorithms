// Binary Search Tree
// A binary search tree (BST) is a type of binary tree where each node has at most two children, 
// commonly referred to as the left child and the right child.
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

    min(root)
    {
        if(!root.left)return root.val
        else return this.min(root.left)
    }

    max(root)
    {
        if(!root.right)return root.val
        else return this.max(root.right)
    }
    
    delete(val)
    {
        this.root = this.deleteNode(this.root , val)
    }

    deleteNode(root , val)
    {
        if(!root)return null

        if(val < root.val)root.left = this.deleteNode(root.left , val)
        else if(val > root.val)root.right = this.deleteNode(root.right , val)
        else
        {
            if(!root.left && !root.right)return null
            else if(!root.left)return root.right
            else if(!root.right)return root.left
            
            root.val = this.min(root.right)
            root.right = ths.deleteNode(root.right , root.val)
        }
        return root
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(15)
bst.insert(43)

console.log("The minimum value is : " ,bst.min(bst.root))
console.log("The maximum value is : " ,bst.max(bst.root))