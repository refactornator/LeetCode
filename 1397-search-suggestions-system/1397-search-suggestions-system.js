class TrieNode {
  constructor() {
    this.children = {};
    this.words = [];
  }
}

function insert(product, node) {
  let currentNode = node;
  for (let char of product) {
    if (!currentNode.children[char]) {
      currentNode.children[char] = new TrieNode();
    }
    currentNode = currentNode.children[char];

    if (currentNode.words.length < 3) {
      currentNode.words.push(product);
    }
  }
}

function search(searchWord, node) {
  let currentNode = node;
  let results = [];

  for (let char of searchWord) {
    if (currentNode) {
      currentNode = currentNode.children[char];
    }

    if (currentNode) {
      results.push(currentNode.words);
    } else {
      results.push([]);
    }
  }

  return results;
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let root = new TrieNode();
  products.sort();

  // Build the Trie
  for (let product of products) {
    insert(product, root);
  }
  
  return search(searchWord, root);
};