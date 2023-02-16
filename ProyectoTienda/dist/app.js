'use strict';
//Efecto buscador
const buscando = document.querySelector('#buscando');
const inputBuscar = document.querySelector('#input_buscar');
buscando.addEventListener('click', ()=>{
    if(inputBuscar.classList.contains('buscarOculto')){
        inputBuscar.classList.remove('buscarOculto');
        inputBuscar.classList.add('buscarVisible');
    }else if(inputBuscar.classList.contains('buscarVisible')){
        inputBuscar.classList.remove('buscarVisible');
        inputBuscar.classList.add('buscarOculto');
    }
});