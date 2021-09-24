// Una sentencia lógica nos permite ver si una expresión es verdadera o falsa con valores booleanos (true o false)

// Los operadores más usados son
// AND &&
// OR ||
// NOT !
// Igualdad parcial ==
// Igualdad estricta ===
// Mayor que >
// Menor que <
// Mayor igual >=
// Menor igual <=

// Se utilizan las reglas de lógica para evaluar la expresión

// AND &&
// true && true -> true
// ture && false -> false
// false && true -> false
// false && false -> false

// OR ||
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// ---- Ejemplos ----

console.log(5 === 2); // Devuelve false 

console.log(10 >= 3); // Devuelve true

console.log("Hola" === "hola"); // Devuelve false

// El operador not se utiliza acompañado de un símbolo de =
// != parcial
// !== estricto
console.log(5 !== 6); // Devuelve true, 5 es diferente a 6

// Al usar una comparación parcial == ambos valores, aunque de diferentes tipos, son similares
console.log(5 == "5"); // Devuelve true


// Sentencias if
// La sentencia if nos permite ejecutar un bloque de código si la expresión que evalua es verdadera (true)
// Se utiliza la palabra reservada if seguida de paréntesis y llaves. Dentro de los paréntesis va la expresión que se va a evaluar

if(4 > 1) {
    console.log("cuatro es mayor que uno");
}

// else
// Cuando queremos utilizar un bloque de código en caso de que la expresión haya resultado falsa, podemos ocupar un bloque else

if(5 === 6) {
    
    console.log("Esto no se va a ejecutar");

} else {

    console.log("cinco es diferente de seis");

}

// else if
// Podemos enlistar una serie de sentencias alternativas de la siguiente manera

let a = 3;
let b = 4;

if(a > b) {

    console.log("No se ejecuta porque a no mayor que b");

} else if(a === b) {

    console.log("No se ejecuta porque a no es igual a b");

} else if(a < b) {

    console.log("a es < b");

} else {

    console.log("Todos los demás casos");

}


// Sentencias switch
// Podemos ocupar sentencias switch como alternativa para enlistar diferentes casos

// Se utiliza la palabra switch seguida de paréntesis y llaves. Dentro del paréntesis va la expresión a evaluar.
// Dentro de las llaves se enlistan los casos usando la palabra case seguida del valor y dos puntos. Siempre se cierra el bloque con la palabra break.
// La palabra default se utiliza para indicar que ese bloque se ejecuta en todos los casos no considerados.

let x = "Juan";

// Evalua el valor de x
switch(x) {

    // x == "Lisa"
    case "Lisa":
        console.log("Hola, soy Lisa!");
        break;

    // x == "María"
    case "María":
        console.log("Hola, soy María!");
        break;

    // x == "Juan"
    case "Juan":
        console.log("Hola, soy Juan!");
        break;

    // Este sería el equivalente a un else
    default: {
        console.log("Hola?!");
    }

}








