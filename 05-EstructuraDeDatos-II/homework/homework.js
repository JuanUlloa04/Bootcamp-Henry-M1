'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
	this.head = null;
}

function Node(value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.add = function (data) {
	let node = new Node(data);
	let current = this.head;

	if (!current) {
		this.head = node;
		return;
	}

	while (current.next) {
		current = current.next;
	}

	current.next = node;
};

/* 
var lista1 = new LinkedList();
lista1.add('Henry');
lista1.add([0, 2, 3, 4, 5]);
console.log(lista1);
*/

LinkedList.prototype.remove = function () {
	// pseudo codigo:
	// me fijo si hay head, o si solo tiene un nodo
	// recorrer hasta llegar al penultimo nodo
	// a este nodo le digo que apunte a null, asi pierdo la referencia del que tenia antes

	let current = this.head;

	//* si no hay nodos:
	if (!current) return null;

	//* una lista de un solo nodo:
	//this.head.next === null
	if (!current.next) {
		let aux1 = current.value; // guardo el nodo porque necesito retornar su valor antes que se elimine
		this.head = null; // elimina el último nodo de la lista
		return aux1; //y retorna su valor
	} else {
		//* si tiene mas nodos hay que recorrer:
		//let current = this.head;
		//(!current.next.next) es igual a (current.next.next !== null)
		while (current.next.next) {
			current = current.next; // aqui estoy diciendole que avance una posicion más
		}

		// al salir del while se ejecuta esto
		let aux2 = current.next.value; // nos guardamos SOLO EL VALOR del nodo a eliminar
		current.next = null;
		//this._length--; ---> podria no estar
		return aux2; // lo retorno
	}
};
/* 
var lista1 = new LinkedList();
lista1.add('Henry');
lista1.add([1, 4, 44, 66, 1]);
console.log(lista1);
console.log(lista1.remove());
console.log(lista1);
console.log(lista1.remove());
console.log(lista1);
console.log(lista1.remove());
console.log(lista1);
*/

LinkedList.prototype.search = function (algo) {
	// Lo busco y si no tiene ningun nodo:
	if (!this.head) return null;

	let current = this.head;
	//analizo la posicion donde estoy
	// en 'while (current)' le pregunto si current no es igual a null
	// si da algun 'return' se corta el bucle
	while (current) {
		// Verifico si el valor dado es igual al valor del current
		if (current.value === algo) {
			return current.value;
			// Verifico si es una funcion
		} else if (typeof algo == 'function') {
			// si es funcion le aplico al current.value
			// y si esa funcion da true
			// retornara el current.value osea el valor de esa posicion
			// ejm:
			//search(function(value) value*2 === 4 ? true : false )
			if (algo(current.value)) {
				return current.value;
			}
		}
		// Si no se cumple ninguna de las condiciones de arriba
		// se hará nuevamente el recorrido :
		current = current.next;
	}

	return null;

	/* if (!this.head) return null;
	var callBack;
	//* si el argumento que recibimos NO ES UNA FUNCION
	if (typeof algo !== 'function') {
		callBack = function (data) {
			return data === algo;
		};
	} else {
		//* aca entra si SI es una funcion
		callBack = algo;
	}

	let current = this.head;
	while (current) {
		if (callBack(current.value)) {
			return current.value;
		} else {
			//*sino sigo avanzando
			current = current.next;
		}
	}

	return null;

 */
};

/* 
var lista1 = new LinkedList();
lista1.add('Henry');
lista1.add(1111);
lista1.add(7);
lista1.add(5);
lista1.add(3);
lista1.add(123);
lista1.add(4);
console.log(lista1.search(123));
console.log(
	lista1.search(function (dato) {
		if (dato % 2 === 0) {
			return true;
		}
		return false;
	})
);
*/

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// Contactos de Telefono
// key: nombre
// value: n° telefono

//set
// pirulo pirulita -> 749390375
// 7 consonantes -> van a ir a parar a la pagina 7
// pagina 7 -> pirulo pirulita: 749390375

// get
// pirulo pirulita
// hash(pirulo pirulita) = 7
// voy a la pagina 7 -> obtengo el numero de pirulo pirulita

// key -> donde guardarlo y donde ir a buscarlo!
// value -> es el valor asociado a ese key

function HashTable() {
	this.buckets = []; // [{},{},{},{}]
	this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
	var sum = 0;
	for (let i = 0; i < key.length; i++) {
		// suma los codigo ascii de cada letra del string
		sum = sum + key.charCodeAt(i);
	}
	// se retorna el resto que sera la posicion de bucket donde se guardara
	return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
	if (typeof key !== 'string') throw TypeError('debe ser un string');

	// Aplicamos la funcion hash en 'key' y lo guardamos en la posicion 'i'
	let i = this.hash(key);

	// Revisamos y si no hay nada en la posicion 'i' creamos un obj vacio
	// esto sera para evitar futuras colisiones cuando los hashkey sean iguales
	if (this.buckets[i] === undefined) {
		this.buckets[i] = {}; // Tambien puede ser un arreglo , una lista , cualquier estructura de datos para almacenarlos.
	}
	this.buckets[i][key] = value;
	// this.buckets = []
	// i = 3
	// this.buckets[3] = [ , , ,{}]
	// this.buckets[3][hola] = [ , , ,{hola: value}];
	// this.buckets[3][henry] = [ , , ,{hola: value, henry: value}];

	// error comun:
	// this.buckets[3].key -> NO usar para la key 'dot notation' porque es un valor variable sino usar 'bracket notation'
};

HashTable.prototype.get = function (key) {
	let i = this.hash(key); // 3
	// this.buckets[3][hola] = [ , , ,{hola: value}];
	return this.buckets[i][key];
};

HashTable.prototype.hasKey = function (key) {
	// Esta funcion 'haskey' es para saber si existe o no esa 'key'
	let i = this.hash(key);
	// this.buckets[3] = [ , , ,{hola: value, chau: value2, bye: value3}]
	return this.buckets[i].hasOwnProperty(key);
	// key = chau -> true
	// key = ahdhjkasbn -> false
};

/* 
let dato1 = new HashTable();
console.log(dato1);
dato1.set('nombre', 'alfonso');
dato1.set('ads', 'segundo');
dato1.set('asd', 'pepity');
dato1.set('ads', 'tercero');
console.log(dato1);
console.log(dato1.buckets[32]);
console.log(dato1.buckets[27]);
console.log(dato1.hasKey('ads'));
console.log(dato1.hasKey('nombre'));
console.log(dato1.hasKey('ddd')); */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable,
};
