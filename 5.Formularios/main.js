'use strict'
let myH1 = document.getElementsByTagName('h1');
let boton = document.getElementById("enviar"); //document: representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
//getElementById: El método getElementById permite, como su nombre indica, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado. 
//getElementsByTagName: Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.
console.log(myH1);

/*const formulario = document.getElementById("form");
formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(e.target[1].value);

});

/* boton.addEventListener("click", (e)=>{ //Recibe los datos en "e"
    e.preventDefault();
    console.log(formulario[0].value); // ejecutar consola
    console.log(formulario[1].value); 
    console.log(formulario[2].value); 
    console.log(formulario[3].value); 
    console.log(formulario[5].value); 

 }
 )
//addEventListener: es un escuchador que indica al navegador que este atento a la interacción del usuario. La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML.
//preventDefault: llamar en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá. (Es este caso, evitar que se refresque la pag)

/*Variables o contenedores: Se usan para guardar un valor, es un espacio de memoria. Variable: Espacio de memoria que puede cambiar en el tiempo de ejecucion de memoria; Constante: Espacio de memoria que no cambia en el tiempo de ejecucion de memoria
var numero1 = 13; //variable, caracter global
let numero2 = 25; //caracter local
const IVA = 19.1; //constante

console.log(numero1);*/
(Hola);

