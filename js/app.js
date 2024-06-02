const juegos = [
    //Juegos play5
    {
        id:"play5-01",
        titulo:"Play5 01",
        Image: "../img/play5/play51.png",
        categoria:{
            nombre:"Play5",
            id:"play5"
        },
        precio: 100,
    },
    {
        id:"play5-02",
        titulo:"Play5 02",
        Image: "../img/play5/play52.png",
        categoria:{
            nombre:"Play5",
            id:"play5"
        },
        precio: 100,
    },
    {
        id:"play5-03",
        titulo:"Play5 03",
        Image: "../img/play5/play53.png",
        categoria:{
            nombre:"Play5",
            id:"play5"
        },
        precio: 100,
    },
    {
        id:"play5-04",
        titulo:"Play5 04",
        Image: "../img/play5/play54.png",
        categoria:{
            nombre:"Play5",
            id:"play5"
        },
        precio: 100,
    },
    // Juegos Switch
    {
        id:"switch-01",
        titulo:"switch 01",
        Image: "../img/switch/switch1.png",
        categoria:{
            nombre:"Switch",
            id:"switch"
        },
        precio: 100,
    },
    {
        id:"switch-02",
        titulo:"switch 02",
        Image: "../img/switch/switch2.png",
        categoria:{
            nombre:"Switch",
            id:"switch"
        },
        precio: 100,
    },
    {
        id:"switch-03",
        titulo:"switch 03",
        Image: "../img/switch/switch3.png",
        categoria:{
            nombre:"Switch",
            id:"switch"
        },
        precio: 100,
    },
    {
        id:"switch-04",
        titulo:"switch 04",
        Image: "../img/switch/switch4.png",
        categoria:{
            nombre:"Switch",
            id:"switch"
        },
        precio: 100,
    },
    //juegos xbox
    {
        id:"xbox-01",
        titulo:"xbox 01",
        Image: "../img/xbox/xbox1.png",
        categoria:{
            nombre:"Xbox",
            id:"xbox"
        },
        precio: 100,
    },
    {
        id:"xbox-02",
        titulo:"xbox 02",
        Image: "../img/xbox/xbox2.png",
        categoria:{
            nombre:"Xbox",
            id:"xbox"
        },
        precio: 100,
    },
    {
        id:"xbox-03",
        titulo:"xbox 03",
        Image: "../img/xbox/xbox3.png",
        categoria:{
            nombre:"Xbox",
            id:"xbox"
        },
        precio: 100,
    },
    {
        id:"xbox-04",
        titulo:"xbox 04",
        Image: "../img/xbox/xbox4.png",
        categoria:{
            nombre:"Xbox",
            id:"xbox"
        },
        precio: 100,
    },
    //juegos PC
    {
        id:"pc-01",
        titulo:"pc 01",
        Image: "../img/pc/pc1.png",
        categoria:{
            nombre:"Pc",
            id:"pc"
        },
        precio: 100,
    },
    {
        id:"pc-02",
        titulo:"pc 02",
        Image: "../img/pc/pc2.png",
        categoria:{
            nombre:"Pc",
            id:"pc"
        },
        precio: 100,
    },
    {
        id:"pc-03",
        titulo:"pc 03",
        Image: "../img/pc/pc3.png",
        categoria:{
            nombre:"Pc",
            id:"pc"
        },
        precio: 100,
    },
    {
        id:"pc-04",
        titulo:"pc 04",
        Image: "../img/pc/pc4.png",
        categoria:{
            nombre:"Pc",
            id:"pc"
        },
        precio: 100,
    },

];


    const contenedorJuegos = document.querySelector("#contenedor-juegos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    let botonesAgregar = document.querySelectorAll(".juego-agregar");
    const numCarrito = document.querySelector("#numcarrito");

    const btnLogin = document.getElementById('btn-login');
    const btnPerfil = document.getElementById('btn-perfil');
    const btnLogout = document.getElementById('btn-logout');

    function cargarJuegos(juegosElegidos) {
        contenedorJuegos.innerHTML = ""; // Limpia el contenido anterior antes de cargar los nuevos juegos

        juegosElegidos.forEach(juego => {
            const div = document.createElement("div");
            div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4"); 
            div.innerHTML = `
                <div class="h-100">
                    <img class="card-img-top img-fluid" src="${juego.Image}" alt="${juego.titulo}">
                    <div class="card-body text-center">
                        <h3 class="card-title">${juego.titulo}</h3>
                        <p class="card-text">${juego.precio}</p>
                        <button class="btn btn-primary juego-agregar" id="${juego.id}">Agregar</button>
                    </div>
                </div>
            `;
            contenedorJuegos.append(div);
        });

        actualizarBotonesAgregar();
        console.log(botonesAgregar);
    }

    cargarJuegos(juegos);

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
            if(e.currentTarget.id !="todos"){
                const productoCategoria = juegos.find(juego => juego.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;

                const juegosBoton = juegos.filter(juego => juego.categoria.id === e.currentTarget.id);
                cargarJuegos(juegosBoton);
            }else{
                tituloPrincipal.innerText="Todos los Juegos"
                cargarJuegos(juegos);
            }
        });
    })

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".juego-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let juegosEnCarrito;
let juegosEnCarritoLS =localStorage.getItem("juegos-en-carrito");

if(juegosEnCarritoLS){
    juegosEnCarrito = JSON.parse(juegosEnCarritoLS);
    actualizarNumero();
}else{
    juegosEnCarrito = [];
}


function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const juegoAgregado = juegos.find(juego => juego.id === idBoton);

    if(juegosEnCarrito.some(juego => juego.id === idBoton)){

        const index = juegosEnCarrito.findIndex(juego => juego.id === idBoton);
        juegosEnCarrito[index].cantidad++;
    }else{
        juegoAgregado.cantidad = 1;
        juegosEnCarrito.push(juegoAgregado);  
    } 

    actualizarNumero();

    localStorage.setItem("juegos-en-carrito", JSON.stringify(juegosEnCarrito));
}

function actualizarNumero(){
    let nuevoNumero = juegosEnCarrito.reduce((acc, juego) => acc + juego.cantidad, 0);
    numcarrito.innerText = nuevoNumero;
}

document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "../vista_usuario/login.html"; 
});

  // Verificar si el usuario ha iniciado sesión
  const sessionActive = localStorage.getItem('sessionActive');

  if (sessionActive) {
      // Ocultar botón de Logearse
      btnLogin.classList.add('d-none');
      // Mostrar botón de Mi perfil
      btnPerfil.classList.remove('d-none');
      // Mostrar botón de Cerrar sesión
      btnLogout.classList.remove('d-none');
  }

  // Redirigir a la página de perfil al hacer clic en el botón de Mi perfil
  btnPerfil.addEventListener('click', function() {
      window.location.href = 'perfil.html';
  });

  // Cerrar sesión
  btnLogout.addEventListener('click', function() {
      localStorage.removeItem('sessionActive');
      window.location.reload(); // Recargar la página para aplicar cambios
  });

  // Redirigir a la página de login al hacer clic en el botón de Logearse
  btnLogin.addEventListener('click', function() {
      window.location.href = 'login.html';
  });