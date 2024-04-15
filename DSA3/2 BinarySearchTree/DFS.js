// we can traverse throught a tree in different ways 
// 1.DFS - Depth First Search
// 2.BFS - Breadth First Search

// ========= DFS ================
// in DFS we can search in three methods.
// 1. pre-order $$$$$$$$$$$$$$$$$$$$
// read the data of the node
// visit the left subtree
// visit the right subtree

// 2. in-order $$$$$$$$$$$$$$$$$$$$
//

// 3. post-order $$$$$$$$$$$$$$$$$$
//

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
        if(root)
        {
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    // In-order Traversal
    inOrder(root)
    {
        if(root)
        {
            this.inOrder(root.left)
            console.log(root.val)
            this.inOrder(root.right)
        }
    }

    postOrder(root)
    {
        if(root)
        {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val)
        }
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root , 10))
console.log(bst.search(bst.root , 5))
console.log(bst.search(bst.root , 15))
console.log(bst.search(bst.root , 20))
console.log(bst.search(bst.root , 3))

bst.postOrder(bst.root)