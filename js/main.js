
class Productos{
    constructor(id, nombre, descripcion, precio, cantidad){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion
        this.precio=precio;
        this.cantidad=cantidad;

    }
}

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {   id: "1", 
        nombre: "Smartphone", 
        imagen:"../img/samsung-galaxy-s23-ultra-512-gb-5g-phantom-black.jpg" ,
        descripcion:"Samsung Galaxy S23 Ultra." ,
        precio: 999.99,
        cantidad:1 },
    {   id: "2", 
        nombre: "Laptop", 
        imagen:"./img/apple-macbook-air-13-6-chip-m2-256gb-ssd-8gb-ram-2022-espanol-silver.jpg" ,
        descripcion:"Apple MacBook Air con chip M2." ,
        precio: 1299.99,
        cantidad:1 },
    {   id: "3", 
        nombre: "Tablet", 
        imagen:"./img/159801-800-auto.webp" ,
        descripcion:"Samsung Galaxy Tab S9 Ultra." ,
        precio: 799.99,
        cantidad:1 },
    {   id: "4", 
        nombre: "Smartwatch", 
        imagen:"./img/1366_2000.jpeg" ,
        descripcion:"Apple Watch Ultra 2.",
        precio: 399.99,
        cantidad:1 },
    {   id: "5", 
        nombre: "Auriculares", 
        imagen:"./img/41iw2zKsohL._AC_SL1100_.jpg" ,
        descripcion:"Sony WF-1000XM5.",
        precio: 199.99,
        cantidad:1 },
    {   id: "6", 
        nombre: "Consola de videojuegos", 
        imagen:"./img/D_803086-MLA47920649105_102021-F-600x378.jpg" ,
        descripcion:"Nintendo Switch." ,
        precio: 299.99,
        cantidad:1 },
    {   id: "7", 
        nombre: "Televisor", 
        imagen:"./img/OLED65G3PSA_PTO_1100x730_NoAppleTV_NoControl_toCheck.jpg" ,
        descripcion:" LG OLED evo G3." ,
        precio: 1599.99,
        cantidad:1 },
    {       id: "8", 
        nombre: "Robot aspirador", 
        imagen:"./img/C975840_11.webp" ,
        descripcion:"iRobot Roomba Combo j9+." ,
        precio: 499.99,
        cantidad:1 },
    {   id: "9", 
        nombre: "Monitor", 
        imagen:"./img/61QSUZYl+dL._AC_SL1500_.jpg" ,
        descripcion:" Samsung Odyssey Neo G9." ,
        precio: 799.99,
        cantidad:1 },
    {   id: "10", 
        nombre: "Tarjeta gráfica", 
        imagen:"./img/D_NQ_NP_707177-MLA53776548777_022023-O.webp" ,
        descripcion:"NVIDIA GeForce RTX 4070 Ti." ,
        precio: 599.99,
        cantidad:1 },
];



const divProductos = document.querySelector(".cuadros");
let BotonesAgregar = document.querySelectorAll(".agregar-productos");
const contador=document.querySelector("#totalProductos");
const vacio=document.querySelector("#vaciarCarrito");
const modonegroc=document.querySelector(".botondark");




function cargarProductos(){
    productos.forEach(producto =>{
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
        <div class="card modo-dark-card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="producto-precio">${producto.precio}</p>
          <button class="agregar-productos" id="${producto.id}">Comprar</button>
        </div>
        `;
        divProductos.append(div);

    })
 actualizar();
}
cargarProductos();


function actualizar(){
    BotonesAgregar = document.querySelectorAll(".agregar-productos");
    BotonesAgregar.forEach(producto => {
        producto.addEventListener("click", agregarcarrito)
    });
}

function agregarcarrito(e){
    const idbutton= e.currentTarget.id;
    const productoA = productos.find((producto => producto.id === idbutton));

    const productoEnCarrito = carrito.find(function(producto) {
        return producto.id === idbutton;
    });

    if(productoEnCarrito){
        productoEnCarrito.cantidad+=1;
    }else{
        productoA.cantidad=1;
        carrito.push(productoA);
        
    }
    agregado();
    actualizarTotal();
    // mostrarProductosEnCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarTotal(){
    let contadorH= carrito.reduce((acc, producto)=> acc+ producto.cantidad, 0);
    contador.innerText=contadorH;
    if(contadorH===0){
        contador.innerText="";
    }



    // let precioTotal = carrito.reduce((acc, producto) => acc + Math.ceil(producto.precio * producto.cantidad), 0);
    // document.getElementById("total").innerText = precioTotal;

}
// vacio.addEventListener("click", icono);
// vacio.addEventListener("click", vaciarCarrito);


// function vaciarCarrito() {
//     carrito.length = 0;
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     mostrarProductosEnCarrito();
//     actualizarTotal();
// }


// function mostrarProductosEnCarrito() {

//     const listaCarrito = document.getElementById("listaCarrito");

//     listaCarrito.innerHTML = "";

//     if (carrito.length === 0) {
//         listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
//         return;
//     }

//     carrito.forEach((producto) => {
//         const li = document.createElement("li");
//         li.textContent = `
//         ${producto.nombre} - Precio: $${producto.precio.toFixed(2)} - Cantidad: ${producto.cantidad}
//         `;
//         listaCarrito.append(li);
//     });
// }

window.onload = function() {
    actualizarTotal();
};

modonegroc.addEventListener("click", modonegro );

let botondark = document.querySelector(".botondark");
let cards = document.querySelectorAll(".card");
const navbar = document.querySelector(".navbar");
const iconoCarrito = document.querySelector(".modo-dark-carrito");
const canvas=document.querySelector("#offcanvasNavbar");
const canvasTi=document.querySelector(".offcanvas-title");

function modonegro() {
    if (document.body.classList.contains("modoDark")) {
        document.body.classList.remove("modoDark");

        if(navbar.classList.contains("navbar-dark")){
            navbar.classList.remove("navbar-dark");
        }
        if(navbar.classList.contains("bg-dark")){
            navbar.classList.remove("bg-dark");
        }
        if (iconoCarrito) {
            iconoCarrito.setAttribute("fill", "dark");
        }

        if(canvas.classList.contains("bg-dark")){
            canvas.classList.remove("bg-dark");
        }
        if(canvasTi.classList.contains("text-white")){
            canvasTi.classList.remove("text-white");
        }
        

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.remove("modo-dark-card");
        });

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

        botondark.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
      </svg>
      `
    }
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




function agregado(){
Toastify({
    text: "Producto Agregado",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "left",
    style:{
        backgroundColor: "#6be65a", 
    },
    
    }).showToast();
}