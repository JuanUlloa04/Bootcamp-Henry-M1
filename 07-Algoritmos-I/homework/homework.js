'use strict';
// No cambies los nombres de las funciones.

function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:

	let array = [1];
	let i = 2;
	while (num !== 1) {
		if (num % i === 0) {
			array.push(i);
			num = num / i;
		} else {
			i++;
		}
	}
	return array;
}

function bubbleSort(array) {
	// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:

	// ejm:
	// [7,6,5,4,3,2,1]
	// arrancamos con la primera burbuja 7 - 6 , etc

	let cambio = true; // para que entre al while por primera vez

	while (cambio) {
		//mientras haya un cambio
		// hagamos esto:
		cambio = false; // para que salga del while
		for (let i = 0; i < array.length - 1; i++) {
			// para avanzar en cada posicion
			// comparamos si el valor es mayor que el que sigue
			if (array[i] > array[i + 1]) {
				let aux = array[i]; // Guardamos el valor      //7
				array[i] = array[i + 1]; // lo piso                 //5
				array[i + 1] = aux; // lo reemplazo            //7
				cambio = true; // para que vuelva a entrar al while
			}
		}
	}
	return array; // [1,2,3,4,5,6,7]
}

function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:

	for (let i = 1; i < array.length; i++) {
		let j = i - 1;
		let aux = array[i]; // guardamos el valor que iremos moviendo
		// mientras sea menor que el anterior
		while (j >= 0 && aux < array[j]) {
			array[j + 1] = array[j]; //
			j--; //ira retrocediendo dejando un lugar imaginario para el aux
			// cuando j llegue a '- 1' saldra del while ya que j >= 0
		}
		array[j + 1] = aux;
	}
	return array;
}

function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:

	//  i
	// min
	// [3, 44, 38, 5, 2, 10]
	//    j

	// 	           min
	// [3, 44, 38, 5, 2, 10]
	//    j   j j j j j   j

	//     i
	//    min
	// [2, 44, 38, 5, 3, 10]
	//         j   j  j   j

	//                 i
	//               min
	// [2, 44, 38, 5, 3, 10]
	//         j   j  j   j

	//        i
	//       min
	// [2, 3, 38, 5, 44, 10]
	//            j  j   j

	//            i
	//           min
	// [2, 3, 38, 5, 44, 10]
	//            j  j   j

	//           i
	//          min
	// [2, 3, 5, 38, 44, 10]
	//               j   j

	// iteramos en bloques
	// para que no llegue hasta la ultima posicion -> 'array.length - 1'
	for (let i = 0; i < array.length - 1; i++) {
		let min = i; // sera nuestra indice de referencia como el menor numero a intercambiar
		// recorrido para saber el numero mas chico
		for (let j = i + 1; j < array.length; j++) {
			if (array[min] > array[j]) {
				min = j; // encontro el indice numero mas chico
			}
		}
		// aca tenemos el indice del numero mas chico
		// hacemos el intercambio
		if (i !== min) {
			let aux = array[i];
			array[i] = array[min];
			array[min] = aux;
		}
	}

	return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort,
};
