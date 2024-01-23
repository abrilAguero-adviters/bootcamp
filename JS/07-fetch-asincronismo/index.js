const obtenerDatosDeAPI = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error al obtener los datos. Código de estado: ${response.status}`
      );
    }
    return response.json();
  });
};

const main = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  console.log('Iniciando la solicitud de datos...');

  obtenerDatosDeAPI(url)
    .then((data) => {
      console.log('Datos obtenidos con éxito:', JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });

  console.log('Solicitud de datos en progreso...');
};

main();
