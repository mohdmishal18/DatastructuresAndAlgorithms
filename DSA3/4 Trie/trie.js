// // Trie

// class Node
// {
//     constructor()
//     {
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie
// {
//     constructor()
//     {
//         this.root = new Node()
//     }

//     insert(word)
//     {
//         let node = this.root

//         for(let char of word)
//         {
//             if(!node.children[char])node.children[char] = new Node()
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }

//     startsWith(prefix)
//     {
//         let node = this.root
//         for(let i = 0; i < prefix.length; i++)
//         {
//             const char = prefix[i]
//             if(!node.children.get(char))
//             return false
//         }
//         return true
//     }

//     findAllWords(word , node = this.root , index = 0)
//     {
//         if(node.end === true)
//         {
//             return node.children[index]
//         }
//     }

//     search(word)
//     {
//         let node = this.root;
//         for(let char of word)
//         {
//             if(!node.children[char])return false
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }

// const myTrie = new Trie()

// myTrie.insert("cat")
// myTrie.insert("car")
// console.log(myTrie.search("car"))

class Node
{
    constructor()
    {
        this.children = {}
        this.isEnd = false
    }
}

class Trie
{
    constructor()
    {
        this.root = new Node()
    }

    insert(word)
    {
        let node = this.root
        for(let char of word)
        {
            if(!node.children[char]) node.children[char] = new newNode
            node = node.children[char]
        }
    }

    delete(root , word)
    {
        
    }

    search(word)
    {
        let node = this.root
        for(let char of word)
        {
            if(!node.children[char])return false
            node = node.children[char]
        }
        return node.isEnd
    }
}