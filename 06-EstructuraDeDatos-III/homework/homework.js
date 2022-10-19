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
function BinarySearchTree() {
	this.value = value;
	this.right = null;
	this.left = null;
}

let bst = new BinarySearchTree();
bst.insert(6);

BinarySearchTree.prototype.insert = function (value) {
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
		if (this.right === null) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}

	if (value < this.value) {
		if (this.right === null) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};
