// Las funciones permiten encapsular bloques de código, esto permite tener pequeños entornos aislados del resto del programa
// y también ayuda para reusar estos pequeñas funcionalidades en diferentes partes del código.
// Una función tiene datos de entrada llamados parámetros y un dato de regreso (pueden ser varios datos dentro de un arreglo u objeto).

// ---- Declaración ----
// Existen diferentes maneras de declarar funciones

// function
// Se utiliza la palabra reservada function seguida del nombre de la función, parentesis y llaves

function miFuncion() {
    console.log("Esto es una función");
}

// function dentro de una variable
// Se toma la función y se guarda dentro de una variable
// Esto es últil, por ejemplo, para guardar funciones dentro de constantes y evitar que sean sobrescritas

const multiplicarUnoPorDos = function() {
    console.log(1 * 2);
};


// Arrow functions () =>
// Es una manera más moderna que se introdujo en las nuevas versiones de javascript y funcionan de manera similar a la palabra function

const restarCincoMenosUno = () => {
    console.log(5 - 1);
};

// También pueden saltarse las llaves y dar el valor de retorno directamente
const sumarDosMasDos = () => 2 + 2;


// Utilizar una función
// Para ejecutar una función se utilizar su nombre segudio de paréntesis
miFuncion();
multiplicarUnoPorDos();
restarCincoMenosUno();
sumarDosMasDos();



// ---- Parámetros ----
// Para enviar datos a una función se definen los parámetros dentro de los paréntesis y a su vez se envían los valores en los paréntesis al invocar la función

function sumar(a, b) {
    console.log(a + b);
};

// En este caso le damos el valor 2 al parámetro a y 8 al parámetro b
sumar(2, 8); // Imprime 10



// ---- Valores de retorno ----
// Toda función regresa un valor, este se indica con la palabra reservada return
// Implícitamente todas las funciones regresan el valor undefined cuando no existe un valor de retorno definido

// Nótese que en este caso no estoy usando console.log, solamente estoy devolviendo un valor
let restar = function(a, b) {
    return a - b;
};

// La función restar devuelve el valor 6 y este se guarda en la variable x
let x = restar(10, 4);
console.log(x); //Imprime 6


// En este caso la función no especifica valor de retorno así que regresará undefined
let sinRetorno = () => {
    console.log("Mi función");
};

console.log(sinRetorno());


// En el caso de las arrow functions, si se omiten las llaves se puede enviar el valor de retorno directamente
let multiplicar = (a, b) => a * b; // El valor de retorno es a * b

let y = multiplicar(3, 4); // La función devuelve el valor 12 que se almacena en la variable y
console.log(y); // Imprime 12


// ---- Ejemplos ----
function concatenar(palabra1, palabra2) {
    // Inicia una variable con los valores concatenados    
    let texto = palabra1 + " " + palabra2;

    // Devuelve la variable
    return texto;
}

let nombre = concatenar("Andrés", "Manuel");
console.log(nombre); // Imprime "Andrés Manuel"


// ---------------------------------------------

const devuelveResiduo = (a, b) => {
    return a % b;
};

console.log(devuelveResiduo(10, 3)); // Imprime 1


// --------------------------------------------

const elevarAlCuadrado = (a) => a * a;

console.log(elevarAlCuadrado(5)); // Imprime 25















