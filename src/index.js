
'use strict';

class Node {
  //assigning defaults
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = this.head;
    //right away assign the variable node to the contextual this.head of the tree we have instantiated and are running the add method on / if theres nothing in it add the data as the value of the head
    if(node === null) {
      this.head = new Node(value);
      //   console.log('HEAD NULL');
      return;

    } else {
    //   console.log('START searchTree');

      const searchTree = function(node) {
        // declaring the recursive function BUT NOT calling it (way below)
        // console.log('INSIDE searchTree');

        // going down the left side = the data is LESS than
        if(value < node.value) {
        //   console.log('LEFT');
          if(node.left === null) {
            node.left = new Node(value);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
            // recursively continue searching down left
          }
        }

        // going down the right side = the value is GREATER than
        if(value > node.value) {
        //   console.log('RIGHT');

          if(node.right === null) {
            node.right = new Node(value);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right);
            // recursively continue searching down right

          }
        } else {
          return null;
        }
      };
      return searchTree(node);
      // this is where you INITIALLY call the recursive function
    }
  }

  findMin() {
    let current = this.head;
    while(current.left !== null) {
      //keep iterating to the left while theres still a value / because trees are sorted
      current = current.left;
    }
    //then return the value from teh leftmost node
    return current.value;
  }

  findMax() {
    let current = this.head;
    while(current.right !== null) {
      //keep iterating to the right while theres still a value / because trees are sorted
      current = current.right;
    }
    //then return the value from teh rightmost node
    return current.value;
  }

  find(value) {
    let current = this.head;
    while(value !== current.value) {
      if(value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
      if(current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(value) {
    let current = this.head;
    // while loop are less expensive than recurision
    while(current) {
      if(value === current.value) {
        return true;
        //maybe return the node
      }
      if(value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    //if you dont find the matching value in the while loop then return false
  }

  remove(value) {
    const removeNode = function(node, value) {
      if(node === null) {
        //so if the the tree doesnt have anything in it then return null
        return null;
      }

      if(value === node.value) {
        if(node.left === null && node.right === null) {
          //if the search value matches BUT the tree doesnt have any children
          // return the reset reference to the node we are on to null instead of its value
          return null;
        }
        if(node.left === null) {
          //if right has no children the answer must be the right node because its the only thing left
          return node.right;
        }
        if(node.right === null) {
          //if right has no children the answer must be the left node because its the only thing left
          return node.left;
        }

        var tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;

      } else if(value < node.value){
        node.left = removeNode(node.right, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.head = removeNode(this.head, value);
  }
}

module.exports = Tree;