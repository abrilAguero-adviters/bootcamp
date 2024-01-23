// EJEMPLO DE ARRAY
// const arr = [1, 2, 4, 5, 6, 7]; // posiciones son de 0 a n
// const arrprueba = [];

// const arr2 = arr.forEach((number) => {
//   console.log(number);
//   return number;
// });

// console.log(arr2);

// Crear un objeto persona con varios atributos, y uno en particular que sea una función
// la cual retorne el nombre y su edad.

const persona = {
  nombre: "manu",
  edad: 36,
  extranjero: true,
  documento: {
    numero: 123456,
    tipo: "dni",
  },
  devolver: function () {
    console.log(this);
    return `hola soy ${this.nombre} y tengo ${this.edad} años de edad`;
  },
  devolver2: (funcion = () => {
    return `hola soy ${persona.nombre} y tengo ${persona.edad} años de edad`;
  }),
};
const { nombre } = persona;
const {
  documento: { numero },
} = persona;
console.log(nombre);
console.log(numero);
console.log({ ...persona });
