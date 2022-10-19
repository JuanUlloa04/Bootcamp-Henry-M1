function BinarySearchTree(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

let bst = new BinarySearchTree(5);

BinarySearchTree.prototype.insert = function (value) {
	//mayores // menores
	// mayores ? DERECHA
	// menores ? IZQUIERDA

	//derecha:
	if (value > this.value) {
		if (this.right !== null) {
			this.right.insert(value); // recursion
		} else {
			this.right = new BinarySearchTree(value);
		}
	}

	// izquierda:
	if (value < this.value) {
		if (this.left !== null) {
			this.left.insert(value); // recursion
		} else {
			this.left = new BinarySearchTree(value);
		}
	}
};

/** 
bst.insert(6);
bst.insert(7);
bst.insert(10);
bst.insert(8);

//* bst = {value:5, right: null, left: null}
//* bst = {value:5, right: {value:6, right:null, left:null}, left: null}
//* bst = {value:5, right: {value:6, right:{value:7, right:null, left:null}, left:null}, left: null}
//* bst = {value:5, right: {value:6, right:{value:7, right:{value:10, right:null, left:{value:10, right:null, left:null}, left:null}, left:null}, left: null}

                        5
                      /   \
                    null   6
                        /    \
                    null      7
                            /   \
                        null     10
                                /   \
                                8   null
                              /   \
                            null  null

así funciona:
bst.right.right.right.insert(8);
bst.right.right.insert(8);
bst.right.insert(8);
bst.insert(8);
STACK;

*/
