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
            return this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode)
    {
        if(newNode.val < root.val)
        {
            if(root.left === null)root.left = newNode
            else return this.insertNode(root.left , newNode)
        }  
        else
        {
            if(root.right === null)root.right = newNode
            else return this.insertNode(root.right , newNode)
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
        if(root === null)return root

        if(val < root.val)root.left = this.deleteNode(root.left , val)
        else if(val > root.val)root.right = this.deleteNode(root.right , val)
        else
        {
            if(!root.left && !root.right)return null
            else if(!root.left)return root.right
            else if(!root.right)return root.left

            root.val = this.min(root.right)
            root.right = this.deleteNode(root.right , root.val)
        }
        return root
    }

    closestVal(root , target)
    {
        let closest = root.val
        let currentNode = root

        while(currentNode)
        {
            if(Math.abs(target - closest) > Math.abs(closest - currentNode.val))
            {
                closest = currentNode.val
            }

            if(target < currentNode.val)currentNode = currentNode.left
            else if(target > currentNode.val)currentNode = currentNode.right
            else break
        }
        return closest
    }
}
const bst = new BST()

bst.insert(6)
bst.insert(32)
bst.insert(45)
bst.insert(9)
bst.insert(87)
bst.insert(43)

console.log(bst.closestVal(bst.root , 46))
console.log(bst.closestVal(bst.root , 10))