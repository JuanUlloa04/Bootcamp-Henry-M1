'use strict';

function BinarioADecimal(num) {
	// let suma = 0;
	// let posicion = 0;
	// for (let i = num.length - 1; i >= 0; i--) {
	// 	suma = suma + num[i] * 2 ** posicion;
	// 	posicion++;
	// }
	// return suma;

	// CODE REVIEW 12/10/2022 :

	// num ---> "10011" ---> 19
	//           01234   ---> i
	//     --->  43210  ---> posiciones de las columnas de derecha a izquierda

	if (!num) return false;
	let numeroDecimal = 0;

	// recorrer el numero en base 2
	for (let i = 0; i < num.length; i++) {
		numeroDecimal = numeroDecimal + num[i] * Math.pow(2, num.length - 1 - i);
	}

	return numeroDecimal;
}

function DecimalABinario(num) {
	// var resultado = '';
	// while (num !== 0) {
	// 	resultado = (num % 2) + resultado;
	// 	num = Math.floor(num / 2);
	// }
	// return resultado;

	// CODE REVIEW 12/10/2022 :

	// ejm ---> 19
	// Podemos mandar los restos de la division a un array y luego convertirlo en un string
	let binario = [];

	// while()  ---> mientras(condicion)
	while (num >= 1) {
		// mientras sea nayor a 1 lo voy a ir dividiendo
		// para guardarme los restos en binario
		binario.unshift(num % 2); // ir agregando al principio
		num = (num - (num % 2)) / 2; // (19-1)/2 ---> 18/2 ---> 9
		// num = Math.floor(num/2)
	}

	return binario.join('');
}

module.exports = {
	BinarioADecimal,
	DecimalABinario,
};
