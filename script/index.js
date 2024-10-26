const btnIniciarSesion = document.querySelector('#btn-inicio-sesion');

btnIniciarSesion.addEventListener('click', iniciarSesion);

function iniciarSesion() {
  let intentos = 3;

  const usuario = 'admin';
  const password = '1234';

  do {
    intentos -= 1;

    let usuarioPrompt = prompt('Ingrese el usuario').toLocaleLowerCase();
    let passwordPrompt = prompt('Ingrese la contraseña').toLocaleLowerCase();

    if( usuarioPrompt === usuario && passwordPrompt ===  password ) {
      capturarDatosFinanciamiento();
      return;
    }

    if( intentos == 0 ) {
      const mensaje = document.createElement('H1');
      mensaje.textContent = '';

      document.querySelector('body').innerHTML = `
        <h1>El sistema se ha bloqueado!!</h1>
        <p>Recargue la página</p>
      `
    }

  } while(intentos > 0);
}

function capturarDatosFinanciamiento() {
  console.log('otra funcion')
}