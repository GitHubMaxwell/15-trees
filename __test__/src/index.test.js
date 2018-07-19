'use strict';

let Tree = require('../../src/index.js');

describe('TREE Module', () => {

  it('POL', () => {
    let newTree = new Tree();
    newTree.add(3);
    newTree.add(15);
    newTree.add(6);

    // Tree.fizzbuzztree(newTree);
    expect(newTree.head.value).toEqual(3);
    expect(newTree.head.right.value).toEqual(15);
    expect(newTree.head.right.left.value).toEqual(6);

  });

  
});