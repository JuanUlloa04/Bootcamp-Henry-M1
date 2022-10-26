function LinkedList() {
	this._length = 0;
	this.head = null;
}

function Node(value) {
	this.value = value;
	this.next = null;
}

let list = new LinkedList();

// ---------- MÉTODOS PARA AGREGAR NODOS A LA LINKED LIST ------------/

// -- INSERTAR UN NUEVO NODO ANTES DE LA CABEZA, "AL PRINCIPIO DE LA LISTA". --/

// En este caso, se agrega un nuevo nodo antes del nodo principal actual.
// Para cumplir con esta operación primero crearemos un nodo.
// El nodo recién creado tendrá dos propiedades definidas
// en la función constructora de la clase Node, data y next.

LinkedList.prototype.insertAtBeginning = function (data) {
	let node = new Node(data);

	node.next = this.head;

	this.head = node;
	this._length++;
	return this.head;
};

list.insertAtBeginning(15);
list.insertAtBeginning(10);

//-----------------------------------------------------------------------------------//

// -----INSERTAR UN NUEVO NODO EN EL MEDIO DE LA LISTA "EN UNA POSICIÓN ALEATORIA DADA".---/

// Para implementar esta operación tendremos que:

// 1. Rcorrer la lista hasta llegar a la posición de nodo deseado.

// 2. A continuación, asignaremos el puntero next del nuevo nodo,
// al siguiente nodo del nodo de posicón. ---newNode.next = previous.next;---

// 3. El puntero next del nodo de posición se puede actualizar
// para que apunte al nuevo nodo. --previous.next = newNode;

// Se define una función auxiliar getAt() para llegar a la posición deseada.
// Esta función también se puede utilizar posteriormente para realizar
// una operación de eliminación desde una posición determinada.

LinkedList.prototype.getAt = function (index) {
	let counter = 0;
	let node = this.head;
	while (node) {
		if (counter === index) {
			return node;
		}
		counter++;
		node = node.next;
	}
	return null;
};
list.getAt();

// La función insertAt() contiene los pasos para insertar un nodo en un índice dado.

LinkedList.prototype.insertAt = function (data, index) {
	// si la lista está vacia, es decir, head = null
	if (!this.head) {
		this.head = new Node(data);
		this._length++;
		return new Node();
	}

	// si es necesario insertar un nuevo nodo al principio de la lista,
	// es decir, antes del encabezado.
	if (index === 0) {
		this.head = new Node(data, this.head);
		this._length++;
		return new Node();
	}

	// de lo contrario, use getAt() para encontrar el nodo anterior.
	// ------Insertar un nodo en una posición aleatoria dada. --------
	const previous = this.getAt(index - 1);
	let node = new Node(data);
	node.next = previous.next; // Asignaremos el puntero next del nuevo nodo, al siguiente nodo del nodo de posicón.
	previous.next = node; // El puntero next del nodo de posición se puede actualizar para que apunte al nuevo nodo.

	this._length++;
	return this.head;
};
list.insertAt(12, 1); // list.insertAt(data,index);

// -----------------------------------------------------------------------------//

// -----INSERTAR UN NUEVO NODO DESPUÉS DE LA COLA, ES DECIR, "AL FINAL DE LA LISTA". ----/

// En este caso, se agrega un nuevo nodo al final de la lista.
// Para implementar esta operación, tendremos que recorrer la lista
// para encontrar el nodo de la cola y modificar el  puntero next de la cola
// para que apunte al nodo recién creado en lugar de null.
LinkedList.prototype.add = function (data) {
	let node = new Node(data);

	let current = this.head;
	if (!current) {
		this.head = node;
		this._length++;
		return node;
	}

	while (current.next) {
		current = current.next;
	}

	current.next = node;
	this._length++;
	return node;
};

list.add(20);
list.add(25);
list.add(30);

//------------------------------------------------------------------------------/

// ------------INSERTAR UN NODO CON UN INDICE ESPECÍFICO ---------------/

LinkedList.prototype.insertAt = function (index, data) {
	// Comprobamos para asegurarnos de que nuestro índice es válido
	if (index < 0 || index > this._length - 1) {
		return console.log('Indice incorrecto');
	} else {
		// Si es así, inicializamos un nuevo nodo.
		let node = new Node(data);

		// Si el index es 0, estamos agregando una nueva cabeza a nuestra lista.
		if (index === 0) {
			// Entonces, asignamos el puntero next de nuestro node al this.head.
			node.next = this.head;
			// luego reasignamos el this.head de la linked List que será el node insertado.
			this.head = node;

			this._length++;
			return this.head;
		} else {
			// De lo contrario, necesitamos iterar a través de nuestra linked List.
			//  Similar a como lo haríamos al eliminar nodos.
			let current = this.head;
			let previous;
			for (let i = 0; i < index; i++) {
				previous = current;
				current = current.next;
			}

			// Una vez que encontramos el nodo anterior al índice en el que queremos insertar,
			// y el nodo que reside actualmente allí,

			previous.next = node; // asignamos el puntero next de  previous a nuestro node
			node.next = current; // y luego asignamos el puntero de nuestro nodo  a current (el nodo que solía estar en ese índice)
		}
		this._length++;
	}
};
list.insertAt(2, 13); // list.insertAt(index,data)
list.insertAt(3, 14);

// ------------ MÉTODOS PARA ELIMINAR NODOS DE LA LINKED LIST ---------------/

// ------------ ELIMINAR PRIMER NODO DE LA LINKED LIST ---------------/

LinkedList.prototype.deleteFirstNode = function () {
	if (!this.head) {
		return;
	}
	this.head = this.head.next;

	this._length--;
	return this.head;
};
list.deleteFirstNode();

// ----- ELIMINAR UN NODO DEL MEDIO DE LA LISTA (EN  UNA POCISIÓN ALEATORIA DADA). ------/

LinkedList.prototype.deleteAt = function (index) {
	// Cuando la lista está vacía, es decir, head = null
	if (!this.head) {
		this.head = new Node(data);
		return;
	}
	// Si el nodo debe eliminarse del principio de la lista, es decir, antes del head.
	if (index === 0) {
		this.head = this.head.next;
		this._length--;
		return;
	}
	// De lo contrario, use getAt() para encontrar el nodo anterior.
	const previous = this.getAt(index - 1);

	if (!previous || !previous.next) {
		return;
	}

	previous.next = previous.next.next;
	this._length--;
	return this.head;
};
list.deleteAt(1); // list.deleteAt(index);

// ------------ ELIMINAR EL ÚLTIMO NODO DE LA LINKED LIST ---------------/

LinkedList.prototype.deleteLastNode = function () {
	// Eliminar el último nodo de la lista

	//
	// head -> null
	// EN EL CASO QUE NI LILSTA NO TENGA NODOS ASOCIADOS
	let current = this.head;
	if (current === null) return null;
	// if(this._length === 0) return null;
	// -> head -> 1 -> null
	//            ^
	// EN EL CASO QUE MI LISTA TENGA UN SOLO NODO
	else if (current && !current.next) {
		// else if(current !== null && current.next === null)
		let aux = current.value; // aux = 1.  Guardamos este valor antes de eliminarlo para poder retornarlo. Esta es la única función de esta variable auxiliar
		this.head = null; // -> head = null
		this._length--;
		return aux; // 1
	}

	// else if(this._length === 1){
	// let aux = this.head.value;
	// this.head = null;
	// this._length--;
	// return aux;
	// }

	// EN CASO QUE MI LISTA TENGA "N" CANTIDAD DE NODOS

	// Objetivo: -> head -> 1 -> 4 -> 2 -> null
	//   Tengo: -> head -> 1 -> 4 -> 2 -> 6 -> null
	//                               ^
	//                               c  c.next c.next.next
	// Si current.next.next === null Significa que current.next es el ultimo, el que queremos eliminar.
	while (current.next.next) {
		current = current.next;
	}
	let aux = current.next.value; // me guardo el valor para retornarlo 6
	current.next = null; // Eliminamos el nodo con el value de 6
	this._length--;
	return aux; // retornamos el 6 guardado en la variable auxiliar
};
list.deleteLastNode();

// -------------------------- MÉTODO SEARCH DE LINKED LIST ----------------------------/

LinkedList.prototype.search = function (value) {
	// PRIMERO COMPROBAMOS SI LA LISTA ESTA VACIA
	if (this.head === null) return null;
	// SI QUIERO ENCONTRAR UN VALOR EN PARTICULAR
	let current = this.head;
	while (current) {
		// Mientras current sea algo
		// current ? Nodo = {value, next}
		if (current.value === value)
			return current.value; // AQUI SE PREGUNTA SI CURRENT.VALUE ES EL VALOR QUE ESTOY BUSCANDO. Si esncuentro, lo devuelvo.
		else if (typeof value == 'function') {
			// Si value es una función ej: search(function(value) value*2 === 4 ? true: false)
			// ej: search(function(value) value*2 === 4 ? true: false)
			if (value(current.value)) {
				// Invoco la función
				return current.value; // retorno current.value
			}
		}
		current = current.next;
	}
	return null;
};
//list.search();         // list.search(value);

// ---------------------- ELIMINAR LA LINKED LIST-----------------------------/

LinkedList.prototype.deleteList = function () {
	this.head = null;
	this._length = 0;
};
//list.deleteList();

// -------------------- ITERAR SOBRE LA LINKED LIST -------------------/

// getAll recorre la lista viendo sus elementos
// o hasta encontrar el elemento deseado
LinkedList.prototype.getAll = function () {
	let current = this.head;
	if (!current) {
		console.log('La lista está vacia');
		return;
	}
	while (current) {
		console.log(current.value);
		current = current.next;
	}
	return;
};
list.getAll();
console.log(list);
