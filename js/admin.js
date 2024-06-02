document.addEventListener('DOMContentLoaded', () => {
    const tablaUsuarios = document.getElementById('tabla-usuarios');

    // Recuperar los datos del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Función para cargar usuarios en la tabla
    function cargarUsuarios() {
        tablaUsuarios.innerHTML = ''; // Limpiar tabla antes de cargar

        usuarios.forEach(usuario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${usuario.nombreCompleto}</td>
                <td>${usuario.nombreUsuario}</td>
                <td>${usuario.email}</td>
                <td>${usuario.direccionDespacho}</td>
                <td>${usuario.fechaNacimiento}</td>
                <td>${usuario.password}</td>
            `;
            tablaUsuarios.appendChild(tr);
        });
    }

    cargarUsuarios();
});