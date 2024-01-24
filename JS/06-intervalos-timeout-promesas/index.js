function operacionAsincronica(mensaje, tiempo) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando operación: ${mensaje}`);
    const numeroRandom = Math.round(Math.random() * 50);
    console.log(`NUMERO: ${numeroRandom}`);

    setTimeout(() => {
      if (numeroRandom % 2 !== 0) {
        console.log(`Operación rechazada paso 2: ${mensaje}`);
        reject(`Numero impar: ${numeroRandom}`);
      } else {
        console.log(`Operación completada paso 2: ${mensaje}`);
        resolve(numeroRandom);
      }
    }, tiempo);
  });
}

async function ejecutarOperaciones() {
  const promesa = operacionAsincronica('rana', 1000)
    .then((resultado) => {
      console.log(`Resultado de la operación: ${resultado}`);
      return resultado;
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Bootcamp Adviters');
    });

  console.log(promesa);
}

ejecutarOperaciones();
