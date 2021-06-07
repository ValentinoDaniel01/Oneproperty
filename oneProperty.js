const array = [{nombre : "valentino", edad : 18},{nombre : "santiago", edad : 19}]

function oneProperty(lista, string){
    if(string === "nombre"){
       const nombres = lista.map(item => item.nombre)
       console.log(nombres)
    }else if(string === "edad"){
        const edades = lista.map(item => item.edad)
        console.log(edades)
    }
}    
oneProperty(array, "nombre")
