// 1 - Tengo una lista de productos para comprar, pero tengo que cambiar el orden: tiene que ser de menos caracteres a mayores
// 2 - También tengo que agregar 2 productos, uno al inicio y otro al final.
// 3 - Pero me arrepentí, quiero sacar el último.
// Extra:
// 4 - Quiero que al finalizar ese array sea un objeto, con la siguiente estructura::
// listaDecompras = {
//   producto: { // que el nombre del atributo, sea el tipo de comida: fruta, lacteo, harinas, etc...
//     nombre: "pera",
//     cantidad: 4 // que sea la cantidad de caracteres de la palabra
//   }
// }

let listaCompras = ["Manzanas", "Plátanos", "Leche", "Pan"];

// let listacomprasordenada = listaCompras.reverse();

let listacomprasordenada = [];
listaCompras.forEach((producto) => {
 let lengths = producto.length;

 for (let i = 0; i < producto.length; i++) {
  const element = producto[i];
 }

 console.log(lengths);
});

console.log(listacomprasordenada);
