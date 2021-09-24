// ---- Declaración de variables ----

// caso 1 var
// Es una variable que se puede sobrescribir y existe de manera global
var miVariable = 1;

// caso 2 let
// Es una variable que se puede sobrescribir pero solo existe en el bloque de codigo en el que se declaró
let otraVariable = "Hola";

// caso 3 const
// Es una variable que no se puede sobrescribir y existe de manera global
const miConstante = true;


// ----- Tipos de datos -----

// number -> Todos los números reales
let miNumero = 5;

// string -> Cadena de texto delimitada por comillas dobles "" o comillas sencillas  ''
let miText = "Esto es una cadena de texto en comillas dobles";
let otroTexto = 'Esto es un texto en comillas sencillas'

// boolean -> true, false
let miBooleano = false;

// array -> colección ordenada de datos
// Se puede declarar con corchetes [] o instanciando el objeto new Array();
// Los arreglos en js pueden tener diferentes tipos de datos y no están limitados a un tamaño inicial

let miArreglo = ["John", "Doe", "Suzie", "Q"];
let otroArreglo = new Array(1, 2, 3, 4);

// Para leer un dato de un arreglo se utilizan los corchetes y la posición del valor (el orden va del 0 en adelante)

console.log(miArreglo[0]); //Esto regresa el valor "John"
console.log(miArreglo[3]); //Esto regresa el valor "Q"

// object -> Es una colección de datos definidos por pares de nombres y valores
// Se declara usando llaves y los datos van separados por comas

let miObjeto = {
    alumno: "Juan Hernandez",
    calificaion: 10,
    materia: "Matemáticas"
};

// undefined -> Cuando un valor no existe se dice que está indefinido y trae el tipo de datos undefined
let x; // Aquí el valor implícito de x es undefined
let y = undefined; // Aquí se declara explícitamente el valor undefined


// null -> Quiere decir que no existe un valor, pero no hay que confundirlo con undefined
// Se usa poco y generalmente es para compatibilidad con datos externos
let z = null;


// Date -> Genera una instancia del objeto date que facilita trabajar con fechas
let miFecha = new Date();



// ---- Operaciones ----

// Los tipos de datos permiten hacer operaciones con ellos

console.log( 5 + 5 ); // Devuelve 10
console.log( 7 - 3 ); // Devuelve 4
console.log( 3 * 2 ); // Devuelve 6
console.log( 9 / 3 ); // Devuelve 3
// El operador módulo (%) regresa el residuo de la división
console.log( 7 % 2 ); // Devuelve 1

// Suma de cadenas de texto CONCATENACIÓN
console.log("Esto" + " es" + " un" + " texto");


// Otros operadores

// ++, --  suma o resta 1 al valor
let num = 5;
num++;
console.log(num); // Devuelve 6

num--;
console.log(num); // Devuelve 5

// +=, -=, *=, /=
// Realizan la operación y almacenan el resultado en la misma variable

let a = 5;
a += 3;
console.log(a); // Devuelve 8

let b = 3;
b -= 2;
console.log(b); // Devuelve 1

let c = 4;
c *= 3;
console.log(c); // Devuelve 12

let d = 10;
d /= 5;
console.log(d); // Devuelve 2












