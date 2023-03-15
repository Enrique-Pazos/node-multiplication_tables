const fs=require('fs')

const crearArchivo=(base=5)=>{

    console.log('========='.rainbow)
    console.log('Tabla del '.rainbow,base)
    console.log('========='.rainbow)


    let salida=''

    for(let i=1;i<=10;i++){
        salida+=(`${base}*${i}=${base*i}\n`)                
    } 
    fs.writeFileSync(`tabla-${base}.txt`,salida) 
    console.log(salida.rainbow)
    console.log(`tabla-${base}.txt creado`.rainbow) 
}

module.exports= {
    crearArchivo
}