'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */

function counter() {
	var contador = 0;
	return function () {
		// contador +=1
		// contador = contador +1
		// contador ++
		contador = contador + 1;
		return contador;
	};
}

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
	var cache = {};

	return function (arg) {
		if (cache.hasOwnProperty(arg)) {
			//true --> si accede al if
			return cache[arg];
			// ERROR comun: No poner cache.arg (dot notation)  sino cache[arg]  (bracket notation) al buscarlo en el objeto.
			// cache.arg buscará literalmente a una propiedad llamada arg.
			// cache[arg] accede a una propiedad que sera variable segun el valor que se le asigne.
		} else {
			cache[arg] = cb(arg);
			return cache[arg];
		}
	};
}

//----------------------------------------

// Bind

var instructor = {
	nombre: 'Franco',
	edad: 25,
};

var alumno = {
	nombre: 'Juan',
	curso: 'FullStack',
};

function getNombre() {
	return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor); // this --> {instructor}
//Este seria el resultado:
// getNombreInstructor = function(){ return instructor.nombre}
// ahora puedo invocar a getNombreInstructor() >> me va a devolver siempre instructor.nombre
let getNombreAlumno = getNombre.bind(alumno); // this --> {alumno}
//Este seria el resultado:
// getNombreAlumno = function(){ return alumno.nombre}

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
	return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind('pepelucho', '*', '*');
// estructura ---> .bind(this,delimitadorfijo,delimitadorfijo)
// xq en la funcion crearCadena no se esta accediendo al valor this y no afecta en nada
// por convencion generalmente se deberia poner 'this' en vez de cualquier valor como 'pepelucho'
// textoAsteriscos('hola');  ---> *hola*
// textoAsteriscos('chau');  ---> *chau*
// textoAsteriscos('Juan');  ---> *Juan*
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(this, '_', '_');
// 'pepelucho' puede ser cualquier valor

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	counter,
	cacheFunction,
	getNombreInstructor,
	getNombreAlumno,
	textoAsteriscos,
	textoGuiones,
	textoUnderscore,
};
