document.addEventListener("DOMContentLoaded", function() {
    const perfilForm = document.getElementById('perfilForm');
    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const nombreUsuarioInput = document.getElementById('nombreUsuario');
    const emailInput = document.getElementById('email');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const direccionDespachoInput = document.getElementById('direccionDespacho');
    const passwordInput = document.getElementById('password');
    const btnVolver = document.getElementById('btn-volver');

    // Obtener el correo electrónico del usuario activo desde el localStorage
    const activeUserEmail = localStorage.getItem('activeUserEmail');
    if (!activeUserEmail) {
        console.error("No hay un usuario activo.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario activo en la lista de usuarios
    const usuario = usuarios.find(user => user.email === activeUserEmail);

    // Verifica si el usuario fue encontrado
    if (!usuario) {
        console.error("Usuario no encontrado en el localStorage.");
        return;
    }

    // Mostrar datos del usuario en el formulario
    nombreCompletoInput.value = usuario.nombreCompleto;
    nombreUsuarioInput.value = usuario.nombreUsuario;
    emailInput.value = usuario.email;
    fechaNacimientoInput.value = usuario.fechaNacimiento;
    direccionDespachoInput.value = usuario.direccionDespacho;
    passwordInput.value = usuario.password;

    // Agregar evento de envío del formulario para guardar cambios
    perfilForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los nuevos valores de los campos
        const nuevoUsuario = {
            nombreCompleto: nombreCompletoInput.value,
            nombreUsuario: nombreUsuarioInput.value,
            email: emailInput.value,
            fechaNacimiento: fechaNacimientoInput.value,
            direccionDespacho: direccionDespachoInput.value,
            password: passwordInput.value
        };

        // Actualizar el usuario en la lista de usuarios
        const userIndex = usuarios.findIndex(user => user.email === activeUserEmail);
        if (userIndex !== -1) {
            usuarios[userIndex] = nuevoUsuario;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Cambios guardados correctamente.');
        } else {
            console.error("No se pudo encontrar el usuario para actualizar.");
        }
    });

    btnVolver.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});