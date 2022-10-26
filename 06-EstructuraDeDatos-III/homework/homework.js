'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
  */
function BinarySearchTree(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BinarySearchTree.prototype.size = function () {
	let count = 0;
	count++;
	if (this.left) count += this.left.size();
	if (this.right) count += this.right.size();
	return count;

	// otra forma:
	// if (this.left === null && this.right === null) return 1;
	// if (this.left !== null && this.right === null) return 1 + this.left.size();
	// if (this.right !== null && this.left === null) return 1 + this.right.size();
	// if (this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();

	// ejm:
	// let bst = new BinarySearchTree (5)
	// bst.insert(2)
	// bst.insert(6)
	// bst.insert(7)
	// bst.insert(6.5)

	//          (5)
	//       /      \
	//    (2)       (6)
	//   /  \       /  \
	// null null null   (7)
	//                 /   \
	//              (6.5)  null
	//              /  \
	//           null null

	// leer de abajo hacia arriba como en el callstack se apila:
	// primero por la IZQUIERDA:
	// bst.left.size();             ---> retorna 1                           ↑ ↓
	// bst.size();                  ---> retorna 1  + this.left.size()  = 2  ↑ ↓
	// STACK

	// luego por la DERECHA:
	// bst.right.right.left.size(); ---> retorna 1                           ↑ ↓
	// bst.right.right.left.size(); ---> retorna 1 + this.left.size() = 2    ↑ ↓
	// bst.right.size();            ---> retorna 1 + this.left.size() = 3    ↑ ↓
	// bst.size();                  ---> retorna 2 + this.left.size() = 5    ↑ ↓
	// STACK
};

BinarySearchTree.prototype.insert = function (value) {
	// menores -> izq
	// mayores -> der
	if (value > this.value) {
		if (this.right === null) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}

	if (value < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function (value) {
	if (this.value === value) return true;

	if (value > this.value) {
		// busca en la derecha
		if (this.right === null) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}

	if (value < this.value) {
		// busca en la izquierda
		if (this.left === null) {
			return false;
		} else {
			return this.left.contains(value);
		}
	}
	//ejm:
	//				5
	//			  /   \
	//			null   6
	//				/    \
	//			null      7
	//					/   \
	//				6.5     null

	// bst.contains(6.5) ---> ? ---> true

	// bst.right.right.left.contains(6.5); // this.value = 6.5  --> ↑ true ↓
	// bst.right.right.contains(6.5); // this.value = 7             ↑      ↓
	// bst.right.contains(6.5); // this.value = 6                   ↑      ↓
	// bst.contains(6.5); // this.value = 5                         ↑      ↓ true
	// STACK

	// Tambien puede ser asi:
	// if (this.value === value) return true;
	// if (this.left && this.left.contains(value)) return true;
	// if (this.right && this.right.contains(value)) return true;
	// return false;

	// O sino así:
	// if (this.value === value) return true;
	// if (this.left) {
	// 	if (this.left.contains(value)) return true;
	// }
	// if (this.right) {
	// 	if (this.right.contains(value)) return true;
	// }
	// return false;
};

// Aqui no me interesa lo que hara la callback solo debo saber guiarla:
BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
	switch (type) {
		case 'pre-order': // root - left - right
			cb(this.value);
			if (this.left) this.left.depthFirstForEach(cb, type);
			if (this.right) this.right.depthFirstForEach(cb, type);
			// this.left && this.left.depthFirstForEach(cb, type);
			// this.right && this.right.depthFirstForEach(cb, type);
			break;
		case 'post-order': //left - right - root
			this.left && this.left.depthFirstForEach(cb, type);
			this.right && this.right.depthFirstForEach(cb, type);
			cb(this.value);
			break;
		default:
			// in  order
			// left - root - right
			this.left && this.left.depthFirstForEach(cb, type);
			cb(this.value);
			this.right && this.right.depthFirstForEach(cb, type);
			break;
	}
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
	if (!array) {
		var array = [];
	}
	// (this.left !== null)
	if (this.left) array.push(this.left);
	// (this.left !== null)
	if (this.right) array.push(this.right);
	cb(this.value);
	if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};
