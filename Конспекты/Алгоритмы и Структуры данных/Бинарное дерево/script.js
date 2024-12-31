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
  1) каждый вновь добавляемый элемент - если он меньше root, то добавляется в левую часть,
   если больше - то в правую. При этом проверка проходит на каждом имеющемся уровне дерева, пока 
   элемент не найдет свое место.
*/
class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
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
        // in order - спустились до листа ветки - сделали действие 
        // pre order - действие с node и идем в глубину
        // post order - идем в левую ветку, потом в правую и делаем действие с node 
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

tree.add(8);
tree.add(7);
tree.add(9);
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(2);
tree.add(11);

console.log(tree);

//tree.traverseDFS('_postOrder', (node) => console.log(node.value));
tree.traverseBFS((node) => console.log(node.value));