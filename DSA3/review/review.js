// class Node
// {
//     constructor(val)
//     {
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }

// class BST
// {
//     constructor()
//     {
//         this.root = null
//     }

//     isEmpty()
//     {
//         return this.root === null
//     }

//     insert(arr)
//     {
//         for(let i = 0; i < arr.length; i++)
//         {
//             const newNode = new Node(arr[i])
//             if(this.isEmpty())
//             {
//                 this.root = newNode
//             }
//             else
//             {
//                 return this.insertNode(this.root, newNode)
//             }
//         }
       
//     }

//     insertNode(root , newNode)
//     {
//         if(newNode.val < root.val)
//         {
//             if(root.left === null)
//             {
//                 root.left = newNode
//             }
//             else
//             {
//                 return this.insertNode(root.left , newNode)
//             }
//         }
//         else
//         {
//             if(root.right === null)
//             {
//                 root.right = newNode
//             }
//             else
//             {
//                 return this.insertNode(root.right , newNode)
//             }
//         }
//     }

//     postOrder(root)
//     {
//         let arr = []
//         const preOrderHelper = (root) =>
//         {
//         if(!root)return null
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             return arr.push(root.val)
//         }
//         return preOrderHelper(root)
//     }
   
// }

// let arr = [8,3,7,8,3,6,2,9,0]

// const bst = new BST()

// bst.insert(arr)
// console.log(bst.postOrder(bst.root))


// class TrieNode
// {
//     constructor()
//     {
//         this.children = {} 
//         this.end = false
//     }
// }

// class Trie
// {
//     constructor()
//     {
//         this.root = new TrieNode()
//     }

//     insert(word)
//     {
//         let node = this.root
//         for(let char of word)
//         {
//             if(!node.children[char])
//             {
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         this.end = true
//     }

//     search(word)
//     {
//         let node = this.root
//         for(let char of word)
//         {
//             if(!node.children[char])return false

//             node = node.children[char]
//         }

//         return this.end
//     }
// }

// const trie = new Trie()

// trie.insert("apple")

// console.log(trie.search("apple"))
// console.log(trie.search("apple2"));


// class minHeap
// {
//     constructor()
//     {
//         this.heap = []
//         this.size = 0
//     }

//     parent(index)
//     {
//         return this.heap[Math.floor(index - 1) / 2]
//     }

//     leftChild(index)
//     {
//         return this.heap[index * 2 + 1]
//     }

//     rightChild(index)
//     {
//         return this.heap[index * 2 + 2]
//     }

//     getParentIndex(index)
//     {
//         return Math.floor((index - 1) / 2)
//     }

//     isEmpty()
//     {
//         return this.size === 0
//     }

//     add(val)
//     {
//         this.heap.push(val)
//         this.size++
//         this.heapifyUp()
//     }

//     heapifyUp()
//     {
//         let index = this.size - 1
        
//         if(this.parent(index) && this.parent(index) < this.heap[index])
//         {
//             [this.heap[this.getParentIndex(index) , this.heap[index]]] = [this.heap[index] , this.heap[this.getParentIndex(index)]]
//             index = this.getParentIndex(index)
//         }
//     }

//     poll()
//     {
//         this.heap[0] = this.heap.pop()
//         this.size--
//         this.heap
//     }
// }

