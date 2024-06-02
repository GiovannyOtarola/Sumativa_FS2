document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', () => {
        const form = document.getElementById('formulario');
        const nombre_completo = document.getElementById('nombre-completo');
        const usuario = document.getElementById('usuario');
        const email = document.getElementById('email');
        const fecha_nacimiento = document.getElementById('fecha-nacimiento');
        const direccion_despacho = document.getElementById('direccion-despacho');
        const password = document.getElementById('password');
        const confirm_password = document.getElementById('confirm-password');

        const errorNombreCompleto = document.getElementById('error-nombre-completo');
        const errorUsuario = document.getElementById('error-usuario');
        const errorEmail = document.getElementById('error-email');
        const errorFechaNacimiento = document.getElementById('error-fecha-nacimiento');
        const errorDireccionDespacho = document.getElementById('error-direccion-despacho');
        const errorPassword = document.getElementById('error-password');
        const errorConfirmPassword = document.getElementById('error-confirm-password');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            // Limpiar mensajes de error
            errorNombreCompleto.innerHTML = '';
            errorUsuario.innerHTML = '';
            errorEmail.innerHTML = '';
            errorFechaNacimiento.innerHTML = '';
            errorDireccionDespacho.innerHTML = '';
            errorPassword.innerHTML = '';
            errorConfirmPassword.innerHTML = '';

            // Validar campos vacíos
            if (!nombre_completo.value.trim()) {
                isValid = false;
                errorNombreCompleto.innerHTML = 'El nombre completo es obligatorio.';
            }
            if (!usuario.value.trim()) {
                isValid = false;
                errorUsuario.innerHTML = 'El nombre de usuario es obligatorio.';
            }
            if (!email.value.trim()) {
                isValid = false;
                errorEmail.innerHTML = 'El correo electrónico es obligatorio.';
            }
            if (!fecha_nacimiento.value.trim()) {
                isValid = false;
                errorFechaNacimiento.innerHTML = 'La fecha de nacimiento es obligatoria.';
            }
            if (!direccion_despacho.value.trim()) {
                isValid = false;
                errorDireccionDespacho.innerHTML = 'La dirección es obligatoria.';
            }
            if (!password.value.trim()) {
                isValid = false;
                errorPassword.innerHTML = 'La contraseña es obligatoria.';
            }

            // Validar formato del correo electrónico
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value && !emailPattern.test(email.value)) {
                isValid = false;
                errorEmail.innerHTML = 'El correo electrónico no es válido.';
            }

            // Validar que las contraseñas sean iguales
            if (password.value !== confirm_password.value) {
                isValid = false;
                errorConfirmPassword.innerHTML = 'Las contraseñas no coinciden.';
            }

            // Validar que la contraseña contenga al menos un número y una letra mayúscula
            const passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])/;
            if (password.value && !passwordPattern.test(password.value)) {
                isValid = false;
                errorPassword.innerHTML = 'La contraseña debe contener al menos un número y una letra mayúscula.';
            }

            // Validar longitud de la contraseña
            if (password.value && (password.value.length < 6 || password.value.length > 18)) {
                isValid = false;
                errorPassword.innerHTML = 'La contraseña debe tener entre 6 y 18 caracteres.';
            }

            // Validar edad mínima de 13 años
            const today = new Date();
            const birthDate = new Date(fecha_nacimiento.value);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 13) {
                isValid = false;
                errorFechaNacimiento.innerHTML = 'Debe tener al menos 13 años para registrarse.';
            }

            if (isValid) {
                // Recuperar usuarios del localStorage
                let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            
                // Crear nuevo usuario
                const user = {
                    nombreCompleto: nombre_completo.value,
                    nombreUsuario: usuario.value,
                    email: email.value,
                    fechaNacimiento: fecha_nacimiento.value,
                    direccionDespacho: direccion_despacho.value,
                    password: password.value
                };
            
                // Añadir nuevo usuario al array de usuarios
                usuarios.push(user);
            
                // Guardar en localStorage
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('Registro exitoso');
            
                // Redirigir al login
                window.location.href = 'login.html';
            }
        });
    });
});
