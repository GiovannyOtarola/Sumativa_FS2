document.addEventListener("DOMContentLoaded", function() {
    const perfilForm = document.getElementById('perfilForm');
    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const nombreUsuarioInput = document.getElementById('nombreUsuario');
    const emailInput = document.getElementById('email');
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const direccionDespachoInput = document.getElementById('direccionDespacho');
    const passwordInput = document.getElementById('password');
    const btnVolver = document.getElementById('btn-volver');
    // Cargar datos del usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('user'));

    // Mostrar datos del usuario en el formulario
    if (usuario) {
        nombreCompletoInput.value = usuario.nombreCompleto;
        nombreUsuarioInput.value = usuario.nombreUsuario;
        emailInput.value = usuario.email;
        fechaNacimientoInput.value = usuario.fechaNacimiento;
        direccionDespachoInput.value = usuario.direccionDespacho;
        passwordInput.value = usuario.password;
    }

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

        // Guardar los nuevos datos del usuario en el localStorage
        localStorage.setItem('user', JSON.stringify(nuevoUsuario));
        alert('Cambios guardados correctamente.');
    });

    btnVolver.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});