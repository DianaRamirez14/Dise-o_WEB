const validateString = (cad) => {
    //Ternario->abreviación del if else
    let response = (cad.lenth>3) ? true: false;
    return response;
}
const validateAvg =()=>{
    let response = (num>=0 && num<=5) ? true: false;
    return response;
}
const checkAvg = (value) => {
    let resul = (value >=3 && value<=5)?"APROBADO": "REPROBADO";
    return resul;
}
export{validateString,validateAvg as vAvg}// Alias para la funcion anterior, para mayor seguridad
