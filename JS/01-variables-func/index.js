// //EJEMPLO 1
var saludar = "hey, hola";

function nuevaFuncion() {
  var saludar = "hola";
}

// // const nuevaFuencion1 = () => {
// //   var saludar = "hola2";
// // };

// console.log(saludar);

//EJEMPLO 2
// var saludar = "hey, hola";
// var tiempos = 4;

// if (tiempos > 3) {
//   //   let saludar = "";
//   var saludar = "dice Hola tambien"; // redeclaración
// }

// console.log(saludar); // "dice Hola tambien"

// // EJEMPLO 3 - TDZ -> zona de tiempo muerto

// console.log(varNumber); // undefined
// console.log(letNumber); // No se registra, lanza un "ReferenceError letNumber is not defined" (Cannot access 'letNumber' before initialization)

// var varNumber = 1;
// let letNumber = 1;

// EJEMPLO 4 --> TDZ --> (Todo lo que está antes, dentro de su scop)
{
  // ¡Esta es la Zona Muerta Temporal para la variable age!
  // ¡Esta es la Zona Muerta Temporal para la variable age!
  // ¡Esta es la Zona Muerta Temporal para la variable age!
  // ¡Esta es la Zona Muerta Temporal para la variable age!
  console.log(age);
  let age = 25; // Cuando llegamos aquí, se acabó la TDZ
}

// DIFERENCIAS ENTRE VAR, LET Y CONST:
// https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
// LINK DE REFERENCIA CON LOS EJEMPLOS Y UNA EXPLICACIÓN DETALLADA DE TDZ:
// https://www.freecodecamp.org/espanol/news/que-es-la-zona-muerta-temporal-temporal-dead-zone-tdz/

// let hola = ""; // scope global

// const holaFunction = () => {
//   //   hola = "ola";
//   return hola; // scope de función
// };

// let resultado = holaFunction();

// console.log(hola);
// console.log(resultado);
