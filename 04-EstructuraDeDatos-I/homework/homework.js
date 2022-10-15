'use strict';

// EJERCICIO 1
function nFactorial(n) {
	// n != -número ---> no existe el factorial de un número negativo
	if (n === 0 || n === 1) return 1;
	if (n < 0) return 0;
	return n * nFactorial(n - 1);
}

/*
function decimalToBinary(num){
   if(num === 1) return '1';
   return decimalToBinary(Math.floor(num / 2)) + (num % 2)
}
*/

// EJERCICIO 2
function nFibonacci(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return nFibonacci(n - 2) + nFibonacci(n - 1);
	// const fib = [0, 1];
	// for (let i = 2; i <= n; i++) {
	// 	fib[i] = fib[i - 2] + fib[i - 1];
	// }
	// return fib[n];
}

// EJERCICIO 3

/*
    Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
    - enqueue: agrega un valor respetando el orden.
    - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
    - size: retorna el tamaño (cantidad de elementos) de la queue.
    Pueden utilizar class o función constructora.
  */
//Esta estructura de datos no venia nativa en JS
//Debiamos generar una clase

//funcion contrutora
//Debemos crear nuestra propia clase
///Tienen el mismo funcionalidades a las funciones de clase.
function Queue() {
	this.array = []; //this apuntaba al objeto.
}

//¿Cómo haciamos para agregar un método?
Queue.prototype.enqueue = function (value) {
	//encargado de agregar valores a la cola
	this.array.push(value);
};

Queue.prototype.dequeue = function () {
	//Si yo se lo pusheo, ¿Cómo se los saco?
	//lo retornamos para que nos muestre ese valor
	//método shift: Si el array está vacío retorna"undefined"
	return this.array.shift();
};

Queue.prototype.size = function () {
	//¿Cuando tenemos array que podemos usar para saber el tamaño?
	return this.array.length;
};

//Probar lo siguiente:

// var queue = new Queue();
// console.log(queue)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue)

// queue.dequeue()
// console.log(queue)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Queue,
	nFactorial,
	nFibonacci,
};
