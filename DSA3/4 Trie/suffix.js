
class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;

    }
}

class SuffixTrie {
    constructor(){
        this.root = new TrieNode();

    }

 insert(words){
    for(let i = 0; i < words.length; i++) {
       this.build(i, words);
    }
 }
  build(index, words) {
    let node = this.root;
    for(let i = index; i < words.length; i++) {
        const char = words[i];
        if(!node.children.get(char)) {
            node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);  
    }
    
    node.end = true;
  }


  contains(words) {
    let node = this.root;
    for(let i = 0; i < words.length; i++) {
        const char = words[i]
       if(!node.children.get(char)) {
         return false;
       }
       node = node.children.get(char);
    }
  
    return node.end;
  }
}

const trie = new SuffixTrie()
trie.insert('najin');
console.log(trie.contains('ajin'));
console.log(trie.contains('jin'));
console.log(trie.contains('in'));