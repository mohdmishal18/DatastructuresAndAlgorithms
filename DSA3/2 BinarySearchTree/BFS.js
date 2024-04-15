// BFS Traversal Approach

// 1. create a queue
// 2. Enqueue the root node
// 3. As long as a node exists in the queue
// a.Dequeue the node from the front
// b.Read the node's value
// c.Enqueue the node's left child if it exists
// d.Enqueue the node's right child if it exists


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
            this.insertNode(this.root, newNode)
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
                return this.insertNode(root.left , newNode)
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
                return this.insertNode(root.right , newNode)
            }
        }
    }

    search(root, val)
    {
        
    }
}

const bst = new BST()