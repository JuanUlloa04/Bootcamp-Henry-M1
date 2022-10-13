# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
	//a = 8
	//b = 9
	//c= 10
	var x = 10;
	console.log(x); // 10
	console.log(a); // 8
	var f = function (a, b, c) {
		//a = 8
		//b = 9
		//c= 10
		b = a; //b = 8
		console.log(b); // 8
		b = c; //b = 10
		var x = 5;
	};
	f(a, b, c); //8,9,10
	console.log(b); //9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); //1
```

```javascript
console.log(bar); //undefined
console.log(baz); //baz is not defined
foo(); //Hola!
function foo() {
	console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
	var instructor = 'Franco';
}
console.log(instructor); //Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); //Tony
//(Sí hay algo entre parentesis se ejecuta)
//function autoinvocada o IIFE crea su propio contexto no se las puede invocar desde afuera
(function () {
	if (true) {
		var instructor = 'Franco';
		console.log(instructor); //Franco
	}
})();
console.log(instructor); //Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
	var instructor = 'The Flash';
	let pm = 'Reverse Flash';
	console.log(instructor); //The Flash
	console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  //2
//Numero 6 - FUNCTION DIVIDIR - STRING "3"
// 6  /  Number("3")
// 6 /  3
// 2 ---> "number"

"2" * "3"       //6
4 + 5 + "px"    //9px    por asociatividad va de izquierda a derecha comienza con Number
"$" + 4 + 5     //$45    por asociatividad va de izquierda a derecha comienza con String los concatena
"4" - 2         // 2     por asociatividad
"4px" - 2       //NaN (es un tipo de dato Number que te dice "este dato un numero no es" )
5  - NaN        // NaN
typeof NaN      // Number
7 / 0           //Infinity

{}[0]           //undefined   se intenta acceder a la posicion [0]  del {} vacio dara undefined
parseInt("09")  //9
5 && 2          //2    arroja lo ultimo que evaluo el and &&
2 && 5          //5    arroja lo ultimo que evaluo el and &&
5 || 0          //5    el primer valor lo toma como true
0 || 5          //5    el 0 lo toma como false por eso arroja 5
1 || 5          //1
[3]+[3]-[10]    //23
// [3]         +           [3]
// decena concatena a la unidad
// por asociatividad de izq a derec
3>2>1           //false    el 3>2 ? es true  ----> pero true > 1? no, entonces false
true >= 1       //true
true === 1      //false       boolean = Number ?
true == 1       //true
[] == ![]       //true
// []  vs ![]
// []  vs  false
// "" vs  0
//  0 vs  0
//   true
// la COHERCION DE DATOS busca transformar a tipo de dato primitivo y de ahi a lenguaje para poder compararlo.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
	console.log(a); //undefined
	console.log(foo()); //2

	var a = 1;
	function foo() {
		return 2;
	}
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
	//HOISTING var snack aqui esta declarado mas no asignado
	if (food) {
		// false
		var snack = 'Friskies'; ///sube
		// si lo cambio a let si toma 'Meow Mix'
		return snack; //
	}
	return snack; //lo busca
}

getFood(false); //undefined

/*
CONTEXTO GLOBAL [
​
	CONTEXTO GET FOOD {
        HOISTING --> VAR SNACK
        LEXICAL --> SNACK
      
        codigo -> return snack
    }

]
*/
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
	fullname: 'Natalia Nerea',
	prop: {
		fullname: 'Aurelio De Rosa',
		getFullname: function () {
			return this.fullname; // 'Aurelio De Rosa'
			// this = prop
			// cuando this esta dentro de una funcion apunta al objeto
		},
	},
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname; // esta copiando
//                  function () {
//  	                  return this.fullname;
//		                     }

console.log(test()); // undefined
// pero en el navegador da 'Juan Perez'

/*
    test = function(){
	        return this.fullname;
        }
*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
	console.log(1); // se muestra 1ro
	setTimeout(function () {
		console.log(2);
	}, 1000); // se muestra 4to
	setTimeout(function () {
		console.log(3);
	}, 0); // se muestra 3ro
	console.log(4); // se muestra 2do
}

printing();
```
