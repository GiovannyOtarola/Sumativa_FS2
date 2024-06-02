document.addEventListener("DOMContentLoaded", function() {
    const mostrarPasswordBtn = document.getElementById('mostrarPasswordBtn');
    const usuarioEmail = document.getElementById('usuarioEmail');

    mostrarPasswordBtn.addEventListener('click', function(){
        const userEmail = usuarioEmail.value.trim(); 

        // Verificar si se ha ingresado un correo electrónico
        if (!userEmail) {
            alert('Por favor ingresa tu correo electrónico.');
            return;
        }

        // Obtener el usuario del localStorage usando el correo electrónico como clave
        const usuario = JSON.parse(localStorage.getItem('user'));

        // Verificar si se encontró el usuario y su contraseña asociada
        if (usuario.email === userEmail) {
            alert(`La contraseña asociada al correo ${userEmail} es: ${usuario.password}`);
        } else {
            alert(`No se encontró ninguna contraseña asociada al correo ${userEmail}`);
        }
    })
});