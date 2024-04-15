// find Min and Max value in a BS tree

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

    search(root , val)
    {
        if(!root)return false
        else
        {
            if(root.val === val)return true
            else if(val < root.val)return this.search(root.left , val)
            else return this.search(root.right , val)
        }
    }

    Min(root)
    {
       if(!root.left)return root.val
       else return this.Min(root.left)
    }

    Max(root)
    {
        if(!root.right)return root.val
        else return this.Max(root.right)
    }
}

const bst = new BST()
bst.insert(40)
bst.insert(50)
bst.insert(45)
bst.insert(55)
bst.insert(20)
bst.insert(25)
bst.insert(10)

console.log(bst.Max(bst.root))