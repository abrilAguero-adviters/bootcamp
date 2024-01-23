// 1 - Tengo una lista de productos para comprar, pero tengo que cambiar el orden: tiene que ser de menos caracteres a mayores
// 2 - También tengo que agregar 2 productos, uno al inicio y otro al final.
// 3 - Pero me arrepentí, quiero sacar el último.

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
