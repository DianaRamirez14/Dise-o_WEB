fetch ('https://jsonplaceholder.typicode.com/todos') //Promesas metodo 
.then((response)=> response.json())
.then((json)=>{
    for(jet obj of json){
        console.info(obj);
    }
})
.catch((error)=> console.error(error))
.finally(console.info("Ha finalizado la petición"));