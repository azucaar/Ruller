


const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



const vacio=document.querySelector("#vaciarCarrito");
const modonegroc=document.querySelector(".botondark");
const eliminar=document.querySelector(".eliminar");
const contador=document.querySelector("#totalProductos");














// Carrito





function mostrarProductosEnCarrito() {

    const listaCarrito = document.querySelector(".productos");

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
        <p>El carrito está vacío.</p>
        <a href="../index.html" class="volver-comprar">
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-backspace-fill' viewBox='0 0 16 16'>
                <path d='M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z'/>
            </svg>
            Volver a comprar
        </a>
    `;
        return;
    }

    carrito.forEach((producto, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="productosIndv productosIndvDark">
        <img src="../${producto.imagen}" alt="">
            <div class="titulos">
                <h4>Producto</h4>
                <p>${producto.nombre}</p>
              </div>
              <div class="cantidad">
                <h5>Cantidad</h5>
                <p>${producto.cantidad}</p>
              </div>
              <div>
                <h5>Precio</h5>
                <p>$${producto.precio}</p>
              </div>
              <div class="eliminar">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </div>
              </div>

        `;
        listaCarrito.append(div);
        div.querySelector(".eliminar").addEventListener("click", () => {
            EliminarDelCarrito(index); // Llamar la función con el índice
        });

    });
}

mostrarProductosEnCarrito();



vacio.addEventListener("click", icono);
vacio.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarProductosEnCarrito();
    actualizarTotal()
}



function icono() {
    if(carrito.length === 0){
        Swal.fire({
            title: "El carrito ya esta vacio",
            text: "",
            icon: "info"
          });
    }else{
Swal.fire({
    title: "Carrito Vacío",
    text: "El carrito esta vacío",
    icon: "success"
  });

}
}



function actualizarTotal(){
        let precioTotal = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
        document.querySelector(".total").innerText = "Total: $ " + precioTotal.toFixed(2);

    let contadorH= carrito.reduce((acc, producto)=> acc+ producto.cantidad, 0);
    contador.innerText=contadorH;
    if(contadorH===0){
        contador.innerText="";
    }
    
    }



    window.onload = function() {
    mostrarProductosEnCarrito();
    actualizarTotal();
};



function EliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el producto del array
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
    mostrarProductosEnCarrito(); // Actualizar la visualización del carrito
    actualizarTotal();
}


const seccion = document.querySelector(".cotiza");

fetch("https://cl.dolarapi.com/v1/cotizaciones/usd")
  .then((response) => response.json())
  .then((data) => mostrarCH(data));



fetch("https://dolarapi.com/v1/dolares/oficial")
  .then((response) => response.json())
  .then((data) => mostrarAR(data));



fetch("https://uy.dolarapi.com/v1/cotizaciones/usd")
  .then((response) => response.json())
  .then((data) => mostrarUY(data));

function mostrarUY(dolar) {
    let div = document.createElement("div");
    div.className="cotizacion card modo-dark-card"
    div.innerHTML = `
       <h2>Peso Uruguayo</h2>
        <img src="../img/descarga (1).png" class="card-img-top" alt="${dolar.nombre}">
        <p>Compra: ${dolar.compra}</p>
        <p>Venta: ${dolar.venta}</p>
    `;
    seccion.append(div);
}


function mostrarAR(dolar) {
    let div = document.createElement("div");
    div.className="cotizacion card modo-dark-card"
    div.innerHTML = `
        <h2>Peso Argentino</h2>
        <img src="../img/descarga.png" class="card-img-top" alt="${dolar.nombre}">
        <p>Compra: ${dolar.compra}</p>
        <p>Venta: ${dolar.venta}</p>
    `;
    seccion.append(div);
}


function mostrarCH(dolar) {
    let div = document.createElement("div");
    div.className="cotizacion card modo-dark-card"
    div.innerHTML = `
       <h2>Peso Chileno</h2>
        <img src="../img/descarga (2).png" class="card-img-top" alt="${dolar.nombre}">
        <p>Compra: ${dolar.compra}</p>
        <p>Venta: ${dolar.venta}</p>
    `;
    seccion.append(div);
}


{/* <div class="card modo-dark-card" style="width: 18rem;">
<img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
<div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">${producto.descripcion}</p>
  <p class="producto-precio">${producto.precio}</p>
  <button class="agregar-productos" id="${producto.id}">Comprar</button>
</div> */}



// MODO NEGRO


modonegroc.addEventListener("click", modonegro );

let titulo2=document.querySelector(".titulo-carrito");
let titulo=document.querySelector(".titulo-cot");
let cards = document.querySelectorAll(".card");
let botondark = document.querySelector(".botondark");
const navbar = document.querySelector(".navbar");
const iconoCarrito = document.querySelector(".modo-dark-carrito");
const canvas=document.querySelector("#offcanvasNavbar");
const canvasTi=document.querySelector(".offcanvas-title");
const contenedorCarrito=document.querySelector(".carrito");
const contenedorInd=document.querySelector(".productosIndv");
const CostoTotal=document.querySelector(".total");


function modonegro() {
    if (document.body.classList.contains("modoDark")) {
        document.body.classList.remove("modoDark");

        if(titulo.classList.contains("negro")){
            titulo.classList.remove("negro");
        }

        if(CostoTotal.classList.contains("total-dark")){
            CostoTotal.classList.remove("total-dark");
        }


        const contenedorInd = document.querySelectorAll(".productosIndv");
        contenedorInd.forEach(producto => {
            producto.classList.remove("productosIndvDark");
        });

        if(titulo2.classList.contains("negrito")){
            titulo2.classList.remove("negrito");
        }
        if(contenedorCarrito.classList.contains("carritodark")){
            contenedorCarrito.classList.remove("carritodark");
        }



        if(navbar.classList.contains("navbar-dark")){
            navbar.classList.remove("navbar-dark");
        }
        if(navbar.classList.contains("bg-dark")){
            navbar.classList.remove("bg-dark");
        }
        if (iconoCarrito) {
            iconoCarrito.setAttribute("fill", "dark");
        }
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.remove("modo-dark-card");
        });

        if(canvas.classList.contains("bg-dark")){
            canvas.classList.remove("bg-dark");
        }
        if(canvasTi.classList.contains("text-white")){
            canvasTi.classList.remove("text-white");
        }
        


        botondark.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
        `
    } else {
        document.body.classList.add("modoDark");
        navbar.classList.add("navbar-dark");
        navbar.classList.add("bg-dark");
        if (iconoCarrito) {
            iconoCarrito.setAttribute("fill", "white"); 
        }
        canvas.classList.add("bg-dark");
        canvasTi.classList.add("text-white");

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.add("modo-dark-card");
        });

        const contenedorInd = document.querySelectorAll(".productosIndv");
        contenedorInd.forEach(producto => {
            producto.classList.add("productosIndvDark");
        });

        titulo.classList.add("negro");
        titulo2.classList.add("negrito");
        contenedorCarrito.classList.add("carritodark");
        CostoTotal.classList.add("total-dark");
        
        

        botondark.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
      </svg>
      `
    }
}

document.querySelector("#mostrarcoti").addEventListener("click",mostrarcotizacion);


function mostrarcotizacion() {
    const contenedor = document.getElementById("contenedorCotizacion");
    if (contenedor.style.display === "none" || contenedor.style.display === "") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }
}






