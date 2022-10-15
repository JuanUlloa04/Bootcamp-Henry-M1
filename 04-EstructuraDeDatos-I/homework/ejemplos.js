function restando(num) {
	//logica
	if (num === 1) {
		return 'llegue';
	} else {
		return restando(num - 1);
	}
}

restando(5);

/* 
contexto GLOBAL {


    contexto restando(5){

        contexto restando(4){

            contexto restando(3){

                contexto restando(2){

                    contexto restando(1){
                            'llegue'
                    }

                }

            }

        }

    }


} 
 */

function factorial(x) {
	if (x === 0 || x === 1) return 1;
	if (x < 0) return 0;
	return x * factorial(x - 1);
}

factorial(5);

/* 
contexto GLOBAL {


    factorial(5){
            return 5 * factorial(4)

        factorial(4){
                return 5 * factorial(3)

            factorial(3){
                    return 5 * factorial(2)

                factorial(2){
                        return 5 * factorial(1)

                    factorial(1){
                            return 5 * 1
                        }

                }

            }

        }

    }


} 
 */

var arreglo = [
	1,
	2,
	3,
	4,
	4,
	5,
	'algo',
	5,
	'algo',
	true,
	true,
	false,
	false,
	1,
	2,
];
var set1 = new Set(arreglo);
console.log(arreglo); // [ 1, 2, 3, 4, 4, 5, 5, 1, 2 ]
console.log(set1); // Set { 1, 2, 3, 4, 5, true, false, "algo" }

// El Set no tiene posiciones ni comparte los mismos métodos que los arreglos
// viene de la idea de conjuntos del diagrama de Vhen

//
set1.has(20);
//
set1.add(10);
//
set1.delete();
// generar un array sin repetidos:
var array = [];
var arraySinRepetidos = Array.from(new Set(array));
