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
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Verificar si el usuario es el administrador
        if (usuarioEmail.value === 'admin@gmail.com' && usuarioPassword.value === 'admin12') {
            alert('Inicio de sesión como administrador exitoso');
            // Guardar indicación de sesión activa en localStorage
            localStorage.setItem('sessionActive', true);
            // Guardar email del administrador como usuario activo
            localStorage.setItem('activeUserEmail', usuarioEmail.value);
            // Redirigir a la página de administrador
            window.location.href = 'admin.html';
            return; // Salir de la función después de redirigir al administrador
        }

        // Verificar si el usuario existe en localStorage
        const usuario = usuarios.find(user => user.email === usuarioEmail.value && user.password === usuarioPassword.value);
        if (usuario) {
            alert('Inicio de sesión exitoso');
            // Guardar indicación de sesión activa en localStorage
            localStorage.setItem('sessionActive', true);
            // Guardar email del usuario activo
            localStorage.setItem('activeUserEmail', usuario.email);
            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });
});