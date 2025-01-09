// BinarySearchTree
// https://rutube.ru/video/f2cefc40b11b82920b54fc7aa82e5ec7/?r=wd
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*
  1) каждый вновь добавляемый элемент - если он меньше currentNode.value, то добавляется в левую часть,
   если больше - то в правую. При этом проверка проходит на каждом имеющемся уровне дерева, пока 
   элемент не найдет свое место.
*/
class BinaryTree {
    constructor() {
        this.root = null;
    }

    addSearch(value) {
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    add(value) {
        const newNode = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        let queue = [];
        
        // когда элемент добавился - цикл прерывается
        while (currentNode) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                // есть левый и правый узел
                queue.push(currentNode.left, currentNode.right);
                currentNode = queue.shift();
            }
        }
    }


    _preOrder(node, callback) {
        if (!node) {
            return;
        }

        callback(node);

        this._preOrder(node.left, callback);

        this._preOrder(node.right, callback);
    }

    _inOrder(node, callback) {
        if (!node) {
            return;
        }

        this._inOrder(node.left, callback);

        callback(node);

        this._inOrder(node.right, callback);
    }

    _postOrder(node, callback) {
        if (!node) {
            return;
        }

        this._postOrder(node.left, callback);

        this._postOrder(node.right, callback);

        callback(node);
    }

    traverseDFS(method, callback) {
        /*
            Pre-order means that we
            1.) Visit the root (callback).
            2.) Traverse the left subtree (left node.)
            3.) Traverse the right subtree (right node.)

            In-order means that we
            1.) Traverse the left subtree (left node.)
            2.) Visit the root (callback).
            3.) Traverse the right subtree (right node.)

            Post-order means that we
            1.) Traverse the left subtree (left node.)
            2.) Traverse the right subtree (right node.)
            3.) Visit the root (callback). 
        */ 
        this[method](this.root, callback);
    }

    traverseBFS(callback) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            callback(node);

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right);
            }

        }
    }
}

const tree = new BinaryTree();  
/*
tree.addSearch(8);
tree.addSearch(7);
tree.addSearch(9);
tree.addSearch(5);
tree.addSearch(10);
tree.addSearch(20);
tree.addSearch(6);
tree.addSearch(2);
tree.addSearch(11);
*/

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);

console.log(tree);

//tree.traverseDFS('_postOrder', (node) => console.log(node.value));
//tree.traverseBFS((node) => console.log(node.value));