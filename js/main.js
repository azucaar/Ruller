

// let PreguntaHistoria = [
//     { pregunta:"¿En que año se descubrio america?" , respuesta: 1492},
//     { pregunta:"¿En qué año se produjo la Revolución Francesa?", respuesta: 1789 },
//     { pregunta:"¿Cuando empezó la Primera Guerra Mundial?", respuesta: 1914 },
//     { pregunta:"¿En qué país se usó la primera bomba atómica?", respuesta: "japon"}
//     ];


// let puntaje=0;

// let usuarios=
//     {
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: parseInt(prompt("Ingrese su edad")),
//     puntaje: puntaje
// }


// alert("Hola " + usuarios.nombre + " " + usuarios.apellido + " ¿Como estas?");

// function Menu (){
// let menu;
// do{
// menu= prompt("Ingresa lo que quieras hacer:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia \n4:Buscar Pregunta \n5: Ver Puntaje \n6: Cuanto falta para tu cumpleaños \n7: Salir");


// switch(menu){
//     case "1":
//         AdivinaNumero();
//         break;
//     case "2":
//          PalabraLarga();
//          break;
//     case "3":
//         Preguntas();
//          break;
//          case "4":
//             buscarpregunta();
//         break;
//     case "5":
//         Verpuntaje();
//         break;   
//         case "6":
//             CuantoFaltaCumpleaños();
//         break;
//         case "7":
//             alert("Saliendo del simulador.")
//         break;
            

//         default:
//             alert("Numero de menú no válido");
//             menu = prompt("Ingrese un valor correcto del menu:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia \n4:Buscar Pregunta \n5: Ver Puntaje \n6: Cuanto falta para tu cumpleaños \n7: Salir")
//             Menu(menu);
//             break;
        
//         }

//     } while(menu!=7);
// } 
// Menu();



// function Verpuntaje(){
//     if(puntaje==0){
//     alert("Tu puntaje es: 0" );
//     }
//     else{
//         alert("Tu puntaje es: " + puntaje);
//     }
    
// }


// function AdivinaNumero(){

//     let numero = Math.floor(Math.random() * 50) + 1;
//     let dato = parseInt(prompt("Ingrese un numero del 1 al 50:"));
//     while(dato != numero){
//         if(dato>numero){
//             alert("El numero es menor que " + dato);
//         }
//         else if(dato<numero){
//             alert("El numero es mayor que " + dato);
//         }
//         dato = parseInt(prompt("Numero equivocado, ingresalo nuevamente"));

//     }
//     alert("Felicidades, Acertaste el mumero!!, era: " + numero);
//     puntaje = puntaje + 10;
//     Verpuntaje();

// }


// function PalabraLarga(){
//     let palabra= prompt("Ingrese una palabra");
//     alert("La palabra ingresada tiene un largo de " + palabra.length + " caracteres")
// }








// function Preguntas(){

//     for(i=0;i<PreguntaHistoria.length;i++){
//     let preguntaSelec = PreguntaHistoria[i]
//     let respuestaSelec= prompt(preguntaSelec.pregunta)
//     while(respuestaSelec.toLowerCase() != preguntaSelec.respuesta){
//         alert("Respuesta incorrecta");
//         puntaje -=2
//         respuestaSelec = prompt(preguntaSelec.pregunta);
//     }
//     alert("Respuesta correcta!!")
//     puntaje += 10
//     Verpuntaje();
//     if(puntaje==40){
//         alert("Felicidades, alcanzaste la puntuacion máxima!!")
//     }


//     }
// }



// function CuantoFaltaCumpleaños(){
//     let fechahoy = new Date();

//     let mes=prompt("Ingresa tu mes de nacimiento 0=Enero, 11=Diciembre");
//     let dia=prompt("Ingresa tu dia de nacimiento");

//     let proximocumpleaños = new Date(fechahoy.getFullYear(),mes,dia)


//     let CuantoFalta =proximocumpleaños - fechahoy
    
//     let diasfaltantes = Math.ceil(CuantoFalta / (86400000));

//     if(proximocumpleaños<fechahoy)
//         diasfaltantes= (diasfaltantes + 365);
    
//     alert("Faltan " + diasfaltantes + " Dias")
// }



// function buscarpregunta(){
// let respuestaingresada = prompt("Ingrese una respuesta para ver si hay una pregunta que la contenga: ")
// let esta=PreguntaHistoria.find((el) => el.respuesta==respuestaingresada);
// if (esta) {
//     alert("Pregunta encontrada: " + esta.pregunta);
// } else {
//     alert("No se encontró ninguna pregunta con la respuesta " + respuestaingresada);
// }
// }

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
        imagen:"./img/samsung-galaxy-s23-ultra-512-gb-5g-phantom-black.jpg" ,
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




function cargarProductos(){
    productos.forEach(producto =>{
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
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
    actualizarTotal();
    mostrarProductosEnCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarTotal(){
    let contadorH= carrito.reduce((acc, producto)=> acc+ producto.cantidad, 0);
    contador.innerText=contadorH;


    let precioTotal = carrito.reduce((acc, producto) => acc + Math.ceil(producto.precio * producto.cantidad), 0);
    document.getElementById("total").innerText = precioTotal;

}

vacio.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarProductosEnCarrito();
    actualizarTotal();
}


function mostrarProductosEnCarrito() {

    const listaCarrito = document.getElementById("listaCarrito");

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `
        ${producto.nombre} - Precio: $${producto.precio.toFixed(2)} - Cantidad: ${producto.cantidad}
        `;
        listaCarrito.append(li);
    });
}

window.onload = function() {
    mostrarProductosEnCarrito();
    actualizarTotal();
};


