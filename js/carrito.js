document.addEventListener("DOMContentLoaded", function() {
    let juegosEnCarrito = localStorage.getItem("juegos-en-carrito");
    juegosEnCarrito = JSON.parse(juegosEnCarrito);

    const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
    const contenedorCarritoJuegos = document.querySelector("#carrito-juegos");
    const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
    const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
    let botonesEliminar = document.querySelectorAll(".carrito-juego-eliminar");
    const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
    const contenedorTotal = document.querySelector("#total");
    const botonComprar = document.querySelector("#carrito-acciones-comprar")

    function cargarJuegosCarrito(){

        if (juegosEnCarrito && juegosEnCarrito.length > 0) {

            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoJuegos.classList.remove("disabled");
            contenedorCarritoAcciones.classList.remove("disabled");
            contenedorCarritoComprado.classList.add("disabled");
    
            contenedorCarritoJuegos.innerHTML = "";
    
            juegosEnCarrito.forEach(juego => {
                const div = document.createElement("div");
                div.classList.add("carrito-juegos", "col-12", "d-flex", "align-items-center", "mb-3");
                div.innerHTML = `
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <img class="img-fluid" src="${juego.Image}" alt="${juego.titulo}" width="100">
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <div>
                            <small class="fw-bold">Nombre</small>
                            <h3 class="fw-bold">${juego.titulo}</h3>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <div>
                            <small class="fw-bold">Cantidad</small>
                            <p>${juego.cantidad}</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <div>
                            <small class="fw-bold">Precio</small>
                            <p>${juego.precio}</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <div>
                            <small class="fw-bold">Subtotal</small>
                            <p>${juego.precio * juego.cantidad}</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <button id="${juego.id}" class="btn btn-danger carrito-juego-eliminar">Eliminar</button>
                    </div>
                `;
                contenedorCarritoJuegos.append(div);
            })
        } else {
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorCarritoJuegos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.add("disabled");
        }

        actualizarBotonesEliminar();
        actualizarTotal();
    }
    
    cargarJuegosCarrito();

    

    function actualizarBotonesEliminar(){
        botonesEliminar = document.querySelectorAll(".carrito-juego-eliminar");
    
        botonesEliminar.forEach(boton =>{
            boton.addEventListener("click", eliminarDelCarrito);
        });
    }
    
    function eliminarDelCarrito(e){
        const idBoton = e.currentTarget.id;
        const index = juegosEnCarrito.findIndex(juego => juego.id === idBoton);

        juegosEnCarrito.splice(index, 1);
        cargarJuegosCarrito();

        localStorage.setItem("juegos-en-carrito",JSON.stringify(juegosEnCarrito));
    }

    botonVaciar.addEventListener("click",vaciarCarrito);
    function vaciarCarrito(){

        juegosEnCarrito.length = 0;
        localStorage.setItem("juegos-en-carrito", JSON.stringify(juegosEnCarrito));
        cargarJuegosCarrito();
    }

    function actualizarTotal(){
        const totalCalculado = juegosEnCarrito.reduce((acc, juego) => acc + (juego.precio * juego.cantidad),0);
        total.innerText = `$${totalCalculado}`;
    }

    botonComprar.addEventListener("click",comprarCarrito);
    function comprarCarrito(){

        juegosEnCarrito.length = 0;
        localStorage.setItem("juegos-en-carrito", JSON.stringify(juegosEnCarrito));
        
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoJuegos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
    }
});