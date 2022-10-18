'use strict';

/**  
**Decimal a binario con recursividad:
function decimalToBinary(num){
	if(num === 1) return '1';
	return decimalToBinary(Math.floor(num / 2)) + (num % 2)
}
**/

// EJERCICIO 1
function nFactorial(n) {
	// n != -número ---> no existe el factorial de un número negativo
	if (n === 0 || n === 1) return 1;
	if (n < 0) return 0;
	return n * nFactorial(n - 1);
}

/**
** PILA DE EJECUCION - CALL STACK:
nFactorial(n:1);   --> 1
nFactorial(n:2) = 2 * nFactorial(n:1); --->  2 * 1
nFactorial(n:3) = 3 * nFactorial(n:2); --->  3 * 2
nFactorial(n:4) = 4 * nFactorial(n:3); --->  4 * 6
nFactorial(n:5) = 5 * nFactorial(n:4); --->  5 * 24
**/

// ** sin recursividad iterando :
/* 
function nFactorial(n) {
    let factorial = 1
    for (let i = n; i > 0; i--) {
    	factorial *= i
    }
    return factorial
}
*/

// EJERCICIO 2
function nFibonacci(n) {
	// Secuencia de Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144,...
	// Retorna el enesimo numero de la serie
	//  8            =     5           +       3
	// nFibonacci(n) = nFibonacci(n-1) + nFibonacci(n-2)
	//if (n >= 0 && n < 2) return n;
	if (n === 0 || n === 1) return n;
	return nFibonacci(n - 1) + nFibonacci(n - 2);
	// al entrar en la recursividad primero se resolvera  nFibonacci(n - 1)
	// una vez finalizado todo recien entrara a nFibonacci(n - 2)
	// ver con phytonTutor
}

// *  sin recursividad iterando :
/* 
function nFibonacci(n) {
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2] ;
	}
	return fib[n];
}
*/

// EJERCICIO 3

/*
 *   Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
 *   - enqueue: agrega un valor respetando el orden.
 *  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
 *   - size: retorna el tamaño (cantidad de elementos) de la queue.
 *   Pueden utilizar class o función constructora.
 */
//Esta estructura de datos no venia nativa en JS
//Debiamos generar una clase

//funcion constructora
//Debemos crear nuestra propia clase
///Tienen el mismo funcionalidades a las funciones de clase.

//Generamos la Clase (el nombre siempre inicia con mayuscula para la funcion contructora):
function Queue() {
	this.array = []; //this apuntaba al objeto.
}

//Agregando los métodos al prototype:

Queue.prototype.enqueue = function (elem) {
	this.array.push(elem);
};

//Si yo se lo pusheo, ¿Cómo se los saco?
//lo retornamos para que nos muestre ese valor
//método shift: Si el array está vacío retorna"undefined"
Queue.prototype.dequeue = function () {
	return this.array.shift();
};

//¿Cuando tenemos array que podemos usar para saber el tamaño?
Queue.prototype.size = function () {
	return this.array.length;
};

//Probar lo siguiente para ver como funciona el codigo:
let q1 = new Queue(); //nueva INSTANCIA

console.log(q1.size()); // 0
q1.enqueue(5); // pusheo
q1.enqueue(10); // pusheo
q1.enqueue(2); // pusheo
console.log(q1); // Queue{ array: [5, 10, 2]}
console.log(q1.size()); // 3
console.log(q1.dequeue()); // 5
console.log(q1); // Queue{ array: [10, 2]}
console.log(q1.dequeue()); // 10
console.log(q1); // Queue{ array: [2]}
console.log(q1.dequeue()); // 2
console.log(q1); // Queue{ array: []}
console.log(q1.size()); // 0
console.log(q1.dequeue()); // undefined (ya no tiene más elementos que quitar adentro)

//* Para entender mejor este ejercicio 3:
//* En una Fabrica de autos la funcion constructora seria el modelo como se haran todos los chasis:
function Chasis(day) {
	this.color = 'gris';
	this.width = 5;
	this.day = day;
}

//* chasis1, chasis2, chasis3 son las INSTANCIAS !!!!!

let chasis1 = new Chasis(1); // chasis {color:'gris', width:5, day:1}
let chasis2 = new Chasis(1); // chasis {color:'gris', width:5, day:1}
let chasis3 = new Chasis(2); // chasis {color:'gris', width:5, day:2}

//* Quiero saber el dia que fuiste fabricado (a traves de una funcion):
//* se añade una funcion al prototype de la funcion constructora
//* ya que si se agregara la funcion directamente cada vez que se cree una instancia
//* esa funcion se repetiria en vano por cada nueva instancia
//* ocupando más espacio en el almacenamiento de la computadora

Chasis.prototype.giveMeDay = function () {
	return this.day;
};

chasis1.giveMeDay(); // 1
chasis2.giveMeDay(); // 1
chasis3.giveMeDay(); // 2

// Todo la de arriba (funcion constructora) tambien se puede definir de esta manera (clase):
// (en este caso si defino las funciones adentro porque el constructor aun así no las va a tener asociadas)
/**
class Chasis {
	constructor(day) {
		// puedes agregarle mas parametros
		this.color = 'gris';
		this.width = 5;
		this.day = day;
	}

	giveMeDay() {
		return this.day;
	}
}
*/
// ? Javascript originalmente no estaba hecho para trabajar con clases pero para atraer a mas desarrolladores decidieron agregarle esta funcionalidad

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Queue,
	nFactorial,
	nFibonacci,
};
