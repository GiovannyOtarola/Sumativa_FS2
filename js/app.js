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

function cargarJuegos() {
    juegos.forEach(juego => {
        const div = document.createElement("div");
        div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4"); // Clases de Bootstrap para diseño responsivo
        div.innerHTML = `
            <div class="h-100">
                <img class="card-img-top img-fluid" src="${juego.Image}" alt="${juego.titulo}">
                <div class="card-body text-center">
                    <h3 class="card-title">${juego.titulo}</h3>
                    <p class="card-text">${juego.precio}</p>
                    <button class="btn btn-primary" id="${juego.id}">Agregar</button>
                </div>
            </div>
        `;
        contenedorJuegos.append(div);
    });
}

cargarJuegos();