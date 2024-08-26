
let nombre=prompt("Ingrese su nombre")
alert("Hola " + nombre + " me alegro verte");




let menu=prompt("Ingresa lo que quieras hacer:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia ");

function Menu (menu){
switch(menu){
    case "1":
        AdivinaNumero();
        break;
    case "2":
         PalabraLarga();
         break;
    case "3":
        PreguntaHistoria();
         break;

        default:
            alert("Numero de menú no válido");
            menu = prompt("Ingrese un valor correcto del menu:\n1: Adivinar Número\n2: Largo de tu palabra\n3: Pregunta de historia")
            Menu(menu);
            break;
        }


}
Menu(menu);


function AdivinaNumero(){
    let numero = 30;
    let dato = parseInt(prompt("Ingrese un numero del 1 al 50:"));
    while(dato != numero){
        dato = prompt("Numero equivocado, ingresalo nuevamente");
    }
    alert("Felicidades, Acertaste el mumero!!, Era 30")

}


function PalabraLarga(){
    let palabra= prompt("Ingrese una palabra");
    alert("La palabra ingresada tiene un largo de " + palabra.length + " caracteres")
}


function PreguntaHistoria(){
    let pregunta=prompt("En que año se descubrio america?")
    while(pregunta != 1492){
        alert("Respuesta incorrecta")
        pregunta=prompt("En que año se descubrio america?")
    }
    alert("Respuesta correcta!!")
}