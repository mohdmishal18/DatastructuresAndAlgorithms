// practice binary search tree

class Node
{
    constructor(val)
    {
        this.val = val
        this.right = null
        this.left = null
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
            return this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , val)
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

    //traverals
    //preorder
    preOrder(root)
    {
        if(root)
        {
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    //inorder
    inOrder(root)
    {
        if(root)
        {
            this.inOrder(root.left)
            console.log(root.val)
            this.inOrder(root.right)
        }
    }

    //postorder
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
console.log(bst.search(bst.root , 19));