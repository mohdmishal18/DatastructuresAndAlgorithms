class TrieNode {
    constructor() {
      this.children = {};
      this.end = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.end = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.end;
    }
  
    startsWith(prefixx) {
      let node = this.root;
      for (let i = 0; i < prefixx.length; i++) {
        const char = prefixx[i];
        if (!node.children.get(char)) {
          return false;
        }
      }
      return true;
    }
    
    findAllwords(word, node = this.root, index = 0) {
      if (node.end === true) {
        return node.children[index];
      }
    }

    deleteWord(root, word) {
      console.log('root',root)
      if (!root) {
        console.log('1')
        return null;
        
      }
      if (word.length === 0) {
          // If we are at the end of the word and it is the end of a word
          if (root.end) {
              root.end = false;
          }
          // If the root does not have any children and is not the end of another word, delete it
          if (Object.keys(root.children).length === 0 && !root.end) {
              root = null;
              return root;
          }
      } else {
          let char = word[0];
          if (root.children[char]) {
              root.children[char] = this.deleteWord(root.children[char], word.slice(1));
  
              // If the child node is null and the current node is not the end of a word, delete the child node
              if (root.children[char] === null && !root.end) {
                  delete root.children[char];
              }
          }
      }
      return root;
  }
  }

  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("application");
  console.log(trie.search("apple"));
  trie.deleteWord(trie.root, 'app')
  console.log(trie.search('app'))
  console.log(trie.search('apple'))
  