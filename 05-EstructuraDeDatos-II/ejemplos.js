function Node(data) {
	this.data = data;
	this.next = null;
}

function List() {
	this._length = 0;
	this.head = null;
}

List.prototype.add = function (data) {
	var node = new Node(data);
	var current = this.head; // this hace referencia a quien lo llama

	//* Si esta vacia:
	// if (current === null)
	if (!current) {
		// puede o no tener informacion en el head
		// aca estoy en el caso de que no tengo un nodo asociado al head
		// por lo tsnto list: -> null
		this.head = node;
		this._length++; // sumar 1 mas
		return node; // opcional solo para ver si se agrego el node
	}

	//* Si no esta vacia, recorro hasta encontrar el ultimo:
	// while(current.next !== null)
	while (current.next) {
		current = current.next;
	}

	//* Despues del while el current.next ya no apuntara a null sino al nuevo node
	current.next = node;
	this._length++;
	return node;
};

var listita = new List();
console.log(listita);

listita.add(5);
listita.add('PEPE');
listita.add(true);
listita.add(['asd', (asd) => console.log(asd)]);

console.log(listita);

// Así se ve la funcion add :
//* https://excalidraw.com/#json=HR2Xwni5SWIKMdrBRvb8U,UNDXf5XVSmgFJzslzg8c-A

List.prototype.getAll = function () {
	current = this.head; //empezamos en la cabeza

	if (!current) {
		console.log('La lista esta vacia!');
		return;
	}

	while (current) {
		console.log(current.data);
		current = current.next;
	}

	return;
};

List.getAll();
