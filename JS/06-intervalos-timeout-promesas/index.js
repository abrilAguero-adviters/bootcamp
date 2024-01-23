// function operacionAsincronica(mensaje, tiempo) {
//   return new Promise((resolve, reject) => {
//     console.log(`Iniciando operación: ${mensaje}`);
//     const random = Math.round(Math.random() * 50);
//     console.log(`NUMERO: ${random}`);

//     setTimeout(() => {
//       if (random % 2 !== 0) {
//         console.log(`Operación rechazada paso 2: ${mensaje}`);
//         reject(`Numero par: ${random}`);
//       } else {
//         console.log(`Operación completada paso 2: ${mensaje}`);
//         resolve(random);
//       }
//     }, tiempo);
//   });
// }

// function ejecutarOperaciones() {
//   operacionAsincronica('rana', 3000)
//     .then((resultado) => {
//       console.log(`Resultado de la operación: ${resultado}`);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// ejecutarOperaciones();
