// traversing a tree
// depth first search

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    findDFS(val) {
        // use stack data structure
        // stack is going to contain our html element
        const toVisitStack = [this];
        // while there's anything left in the stack
        // we're going to pop something off that stack
        while(toVisitStack.length) {
            const current = toVisitStack.pop();
            console.log('visiting dfs', current.val);
            // then check is this the value i want? 
            if (current.val === val) {
                return current;
            }
            // for each child of this current node,
            // add the to the stack
            for (let child of current.children) {
                toVisitStack.push(child);
            }
        }
    }

    findBFS(val) {
        const toVisitQueue = [this];
        while(toVisitQueue.length) {
            // instead of popping from the end
            // we'll shift from the beginning
            const current = toVisitQueue.shift();
            console.log('visiting bfs', current.val)
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitQueue.push(child); 
            }
        }
    }

}

// really just holds the root
class Tree {
    constructor(root) {
        this.root = root
    }
    findInTreeDFS(val) {
        return this.root.findDFS(val)
    }
    findInTreeBFS(val) {
        return this.root.findBFS(val)
    }
}

const tree = new Tree(htmlEl);
tree.root;
tree.findInTreeBFS('ul');
tree.root.children[1].findBFS('li2')

// find() initial
stack: ['head', 'body']
current: 'html'

htmlEl.findDFS('li')

//             html
//     head            body
//   title                 ul
//                      li    li2

// DOM tree
let htmlEl = new Node("html", [
    new Node("head", [new Node("title")]),
    new Node("body", [new Node("ul", [new Node("li"), new Node("li2")])])
]);




htmlEl.find('li');

// quad trees are used for geographic programs, to keep
// track of N/S/E/W information from a node