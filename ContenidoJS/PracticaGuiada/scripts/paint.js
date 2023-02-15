import {checkAvg} from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCard = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment(); // Sirve como un array y guarda elementos que luego solo tiene que ser reacomodados una vez
    const templateStudent = document.querySelector('#templateEstudiante').textContent;
    if(typ==='ESTUDIANTE'){
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('title-card').innerHTML = "Datos del <i> Estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellidos.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.promedio}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.promedio)}`;
            fragment.appendChild(cloneTemp);
        }
    }else{

    }
    cardE.appendChild(fragment);
}
const addStudent = (name,lastname,avg) => {
    //Objeto literal de JS
}