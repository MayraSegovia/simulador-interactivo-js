function aplicarDescuento(precio){
    let descuento = 0.15;
        alert('Al anotarse con un amigo/familiar se le aplica 15% de descuento')
        precio -=(precio * descuento)  
    return precio;
}

let precioInput = () =>{
    const opcion = parseInt(prompt('Seleccione el curso que desea realizar : 1- Adultos - 2- Adolescentes - 3 - Niños -4 Empresas')) 
    let precio;
    switch(opcion){
        case 1: precio = 50000
        break;
        case 2: precio = 40000
        break;
        case 3: precio = 30000
        break;
        case 4: precio = 60000
        break;
        default: precio = 0
        break;
    }
    return precio
}

const precioMasIva = (precioTotal) => precioTotal *= 1.15

const formularioDeInscripcion = () => {
    let quantityInput = 0

    const primerRespuesta = prompt('Se inscribe solo usted?  Si/No')
    if(primerRespuesta == 'No' || primerRespuesta == 'No'){
        while(quantityInput == 0){
            quantityInput = 1 +  parseInt(prompt('Ingrese un numero de personas que se inscriben con usted')) 
            if(quantityInput > 0){
                continue;
            }
            alert('Se debe ingresar un numero mayor que 0')
        }
    }else{
        quantityInput = 1;
    }
   

    let precioTotal;
    if(quantityInput > 1 ){
        precioTotal = aplicarDescuento(precioInput())
    }else{
        precioTotal = precioInput()
    }

    alert('El precio final a pagar es: $' + precioMasIva(precioTotal))
}