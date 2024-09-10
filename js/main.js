

let PreguntaHistoria = [
    { pregunta:"¿En que año se descubrio america?" , respuesta: 1492},
    { pregunta:"¿En qué año se produjo la Revolución Francesa?", respuesta: 1789 },
    { pregunta:"¿Cuando empezó la Primera Guerra Mundial?", respuesta: 1914 },
    { pregunta:"¿En qué país se usó la primera bomba atómica?", respuesta: "japon"}
    ];


let puntaje=0;

let usuarios=
    {
    nombre: prompt("Ingrese su nombre"),
    apellido: prompt("Ingrese su apellido"),
    edad: parseInt(prompt("Ingrese su edad")),
    puntaje: puntaje
}


alert("Hola " + usuarios.nombre + " " + usuarios.apellido + " ¿Como estas?");

function Menu (){
let menu;
do{
menu= prompt("Ingresa lo que quieras hacer:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia \n4:Buscar Pregunta \n5: Ver Puntaje \n6: Cuanto falta para tu cumpleaños \n7: Salir");


switch(menu){
    case "1":
        AdivinaNumero();
        break;
    case "2":
         PalabraLarga();
         break;
    case "3":
        Preguntas();
         break;
         case "4":
            buscarpregunta();
        break;
    case "5":
        Verpuntaje();
        break;   
        case "6":
            CuantoFaltaCumpleaños();
        break;
        case "7":
            alert("Saliendo del simulador.")
        break;
            

        default:
            alert("Numero de menú no válido");
            menu = prompt("Ingrese un valor correcto del menu:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia \n4:Buscar Pregunta \n5: Ver Puntaje \n6: Cuanto falta para tu cumpleaños \n7: Salir")
            Menu(menu);
            break;
        
        }

    } while(menu!=7);
} 
Menu();



function Verpuntaje(){
    if(puntaje==0){
    alert("Tu puntaje es: 0" );
    }
    else{
        alert("Tu puntaje es: " + puntaje);
    }
    
}


function AdivinaNumero(){

    let numero = Math.floor(Math.random() * 50) + 1;
    let dato = parseInt(prompt("Ingrese un numero del 1 al 50:"));
    while(dato != numero){
        if(dato>numero){
            alert("El numero es menor que " + dato);
        }
        else if(dato<numero){
            alert("El numero es mayor que " + dato);
        }
        dato = parseInt(prompt("Numero equivocado, ingresalo nuevamente"));

    }
    alert("Felicidades, Acertaste el mumero!!, era: " + numero);
    puntaje = puntaje + 10;
    Verpuntaje();

}


function PalabraLarga(){
    let palabra= prompt("Ingrese una palabra");
    alert("La palabra ingresada tiene un largo de " + palabra.length + " caracteres")
}








function Preguntas(){

    for(i=0;i<PreguntaHistoria.length;i++){
    let preguntaSelec = PreguntaHistoria[i]
    let respuestaSelec= prompt(preguntaSelec.pregunta)
    while(respuestaSelec.toLowerCase() != preguntaSelec.respuesta){
        alert("Respuesta incorrecta");
        puntaje -=2
        respuestaSelec = prompt(preguntaSelec.pregunta);
    }
    alert("Respuesta correcta!!")
    puntaje += 10
    Verpuntaje();
    if(puntaje==40){
        alert("Felicidades, alcanzaste la puntuacion máxima!!")
    }


    }
}



function CuantoFaltaCumpleaños(){
    let fechahoy = new Date();

    let mes=prompt("Ingresa tu mes de nacimiento 0=Enero, 11=Diciembre");
    let dia=prompt("Ingresa tu dia de nacimiento");

    let proximocumpleaños = new Date(fechahoy.getFullYear(),mes,dia)


    let CuantoFalta =proximocumpleaños - fechahoy
    
    let diasfaltantes = Math.ceil(CuantoFalta / (86400000));

    if(proximocumpleaños<fechahoy)
        diasfaltantes= (diasfaltantes + 365);
    
    alert("Faltan " + diasfaltantes + "Dias")
}



function buscarpregunta(){
let respuestaingresada = prompt("Ingrese una respuesta para ver si hay una pregunta que la contenga: ")
let esta=PreguntaHistoria.find((el) => el.respuesta==respuestaingresada);
if (esta) {
    alert("Pregunta encontrada: " + esta.pregunta);
} else {
    alert("No se encontró ninguna pregunta con la respuesta " + respuestaingresada);
}
}