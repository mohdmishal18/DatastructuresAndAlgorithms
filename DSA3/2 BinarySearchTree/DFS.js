// we can traverse throught a tree in different ways 
// 1.DFS - Depth First Search
// 2.BFS - Breadth First Search

// ========= DFS ================
// in DFS we can search in three methods.
// 1. pre-order
// 2. in-order
// 3. post-order

class Node
{
    constructor(val)
    {
        this.val = val
        this.left = null
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
        if(!root)return false
        else
        {
            if(root.val === val) return true
            else if(val < root.val) return this.search(root.left , val)
            else return this.search(root.right , val)
        }
    }

    // Pre-order Traversal
    preOrder(root)
    {
        if()
    }
}

const bst = new BST()

