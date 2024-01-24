const obtenerDatosDeAPI = async (url) => {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error al obtener los datos. Código de estado: ${response.status}`
      );
    }
    return response.json();
  });
};

// async function funcion () {
// }

// const funcion1 = async () => {
// }

const main = async () => {
  // const url = "https://jsonplaceholder.typicode.com/todos/1";
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  console.log("Iniciando la solicitud de datos...");

  const pokemons = await obtenerDatosDeAPI(url)
    .then((data) => {
      console.log("Datos obtenidos con éxito:", JSON.stringify(data, null, 2));
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
    });

  console.log("Solicitud de datos en progreso...");
  console.log(pokemons.results);

  console.log(
    pokemons.results.map(({ name }, index) => ({
      [`Pokemon-${index}`]: `Hola soy el pokemon ${name}`,
    }))
  );
};

main();

// API -->  Aplication Program Interface --> conexión entre el cliente (front-end) y servidor (back-end) --> establece un conjunto de solicitudes (con el protocolo HTTP) --> establece un modelo de datos --> y una forma de comunicación entre servicios

// front-end -----> back-end ---> base de datos
