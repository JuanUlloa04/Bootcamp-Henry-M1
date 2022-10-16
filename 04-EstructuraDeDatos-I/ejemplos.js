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
	if (x === 0 || x === 1) return 1; // Cuando -1 < x < 2
	// devolvemos 1 puesto que 0! = 1 y 1! = 1
	else if (x < 0) return 0; // Error no existe factorial de números negativos

	return x * factorial(x - 1); // Si x >= 2 devolvemos el producto de x por el factorial de x - 1
}

// 5! = 120
// 5! = 5! * 4!
// 4! = 24
// 3! = 6
// 2! = 2

// factorial(5);

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
console.log(arreglo); // [1,3,4,4,2,5,'algo',5,'algo',true,true,false,false,12,];
console.log(set1); // Set { 1, 2, 3, 4, 5,"algo" , true, false }
// El Set no tiene posiciones ni comparte los mismos métodos que los arreglos
// viene de la idea de conjuntos del diagrama de Vhen

//arreglo[0]
console.log(set1.has(20));
console.log(set1.has(99));

// arreglo.push()
set1.add(10);
set1.add(10);

//borrar
set1.delete();

// generar un array sin repetidos:

var array = [1, 2, 3, 2, 2, 2, 5, 2, 2, 5, 2, 66, 66, 6, 6, 6];
var arraySinRepetidos = Array.from(new Set(array)); // [1,2,3,5,66,6]

// class Persona
// function Persona()

// STACK----> LIFO (Last In First On) como una pila de platos
// var arr = [a,g,y,t]

// arr.push() --- arr.pop()      --> simular el comportamiento de un STACK
// arr.unshift() --- arr.shift() --> simular el comportamiento de un STACK

// QUEUE ----> FIFO (First In First Of) como una cola del banco

// METODOS PARA AGREGAR
// push    --> Agrega un elemento al FINAL del arreglo --> [a,b].push(c) --> [a,b,c]
// unshift --> Agrega un elemento al INICIO del arreglo .. [a,b].unshift(c) --> [c,a,b]

// METODOS PARA ELIMINAR

// pop --> Elimina y retorna un elem del FINAL del arreglo --> [a,b,c].pop() -> [a,b]
// shift --> Elimina y retorna un elem del INICIO del arreglo --> [a,b,c].shift()   --> [b,c]
