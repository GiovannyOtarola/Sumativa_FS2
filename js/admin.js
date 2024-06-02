document.addEventListener('DOMContentLoaded', () => {
    const tablaUsuarios = document.getElementById('tabla-usuarios');
    const btnLogout = document.getElementById('btn-logout');

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
    // boton cerrar sesion 
    btnLogout.addEventListener('click', function() {
        localStorage.removeItem('sessionActive');
        window.location.href = 'login.html';
    });
});