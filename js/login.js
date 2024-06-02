document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const usuarioEmail = document.getElementById('usuarioEmail');
    const usuarioPassword = document.getElementById('usuarioPassword');

    // Verificar si el usuario ya ha iniciado sesión
    if (localStorage.getItem('sessionActive')) {
        window.location.href = 'index.html';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener datos del localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Verificar si el usuario existe en localStorage
        if (user) {
            // Validar credenciales
            if (user.email === usuarioEmail.value && user.password === usuarioPassword.value) {
                alert('Inicio de sesión exitoso');
                // Guardar indicación de sesión activa en localStorage
                localStorage.setItem('sessionActive', true);
                // Redirigir a la página de inicio
                window.location.href = 'index.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
        } else {
            alert('No hay usuarios registrados');
        }
    });
});