'use strict';

let Tree = require('../../src/index.js');
// let serialize = require('../../src/index.js').serialize;


describe('TREE Module', () => {

  it('INSERT method test', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(15);
    newTree.insert(6);

    // Tree.fizzbuzztree(newTree);
    expect(newTree.head.value).toEqual(3);
    expect(newTree.head.right.value).toEqual(15);
    expect(newTree.head.right.left.value).toEqual(6);

  });

  it('REMOVE method test', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(15);
    newTree.insert(6);

    expect(newTree.head.right.left.value).toEqual(6);

    newTree.remove(6);

    expect(newTree.head.right.left).toEqual(null);

  });

  it('FIND method test', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(15);
    newTree.insert(6);

    // expect(newTree.head.right.left.value).toEqual(6);
    // console.log(newTree);
    let search = newTree.find(6);
    // console.log(newTree.head.right.left.value);

    expect(search.value).toEqual(6);

  });

  it('SERIALIZE method test', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(15);
    newTree.insert(6);

    // expect(newTree.head.right.left.value).toEqual(6);
    // console.log(newTree);
    let seriTree = Tree.serialize(newTree);//?

    // let seriTree = newTree.serialize();
    // console.log(newTree.head.right.left.value);
    let string = '3 - 15 - 6';
    expect(seriTree).toEqual(string);

  });

  it('DESERIALIZE method test', () => {
    let newTree = new Tree();
    newTree.insert(3);
    newTree.insert(15);
    newTree.insert(6);

    // expect(newTree.head.right.left.value).toEqual(6);
    // console.log(newTree);
    let seriTree = newTree.deserialize();
    // console.log(newTree.head.right.left.value);
    let string = '3 - 15 - 6';
    expect(seriTree).toEqual(string);

  });

  
});