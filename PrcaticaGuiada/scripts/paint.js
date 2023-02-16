'use strict'
import { checkAvg } from "./validate.js";
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCard = (typ)=>{
    typ= typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector
    ('#templateEstudiante').content;

    if (typ === 'ESTUDIANTE'){
        for ( let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: 
            ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML =`${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    }else{

    }
    cardE.appendChild(fragment);
}
const addStudent = (name,lastName,avg)=> {
    //objeto literal de JS
    let student = {
        nom : name, 
        ape : lastName,
        prom : avg
    }
    students.push(student);
    alert('Se agregó estudiante');
};
const modalAlert = (cad) =>{
    const alerta = document.createElement(`div`);
    const texto = document.createElement(`P`);
    const img = document.createElement(`img`);
    img.src = '../img/x.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }


}
export{paintCard, addStudent, modalAlert}