// Trie

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
            if(!node.children[char])node.children[char] = new Node()
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word)
    {
        let node = this.root;
        for(let char of word)
        {
            if(!node.children[char])return false
            node = node.children[char]
        }
        return node.isEnd
    }
}

const myTrie = new Trie()

myTrie.insert("cat")
myTrie.insert("car")
console.log(myTrie.search("car"))