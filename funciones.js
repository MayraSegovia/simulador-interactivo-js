function discountApplication( price){
    let discount = 0.15;
        alert('Al anotarse con un amigo/familiar se le aplica 15% de descuento')
        price -=(price * discount)  
    return price;
}

let priceInput = () =>{
    const language = parseInt(prompt('Seleccione el curso que desea realizar : 1 Ingles - 2- Alemean - 3 - Frances')) 
    let price;
    switch(language){
        case 1: price = 15000
        break;
        case 2: price = 50000
        break;
        case 3: price = 25000
        break;
        default: price = 0
        break;
    }
    return price
}

const pricePlusIva = (totalPrice) => totalPrice *= 1.15

const inscriptionForm = () => {
    let quantityInput = 0

    const initialAnswer = prompt('Se inscribe solo usted?  Y/N')
    if(initialAnswer == 'n' || initialAnswer == 'N'){
        while(quantityInput == 0){
            quantityInput = 1 +  parseInt(prompt('Ingrese un numero de la cantidad de personas que se inscriben con usted')) 
            if(quantityInput > 0){
                continue;
            }
            alert('debe agregar un numero mayor a 0')
        }
    }else{
        quantityInput = 1;
    }
   

    let totalPrice;
    if(quantityInput > 1 ){
        totalPrice = discountApplication(priceInput())
    }else{
        totalPrice = priceInput()
    }

    alert('El precio final de su curso es de : $' + pricePlusIva(totalPrice))
}