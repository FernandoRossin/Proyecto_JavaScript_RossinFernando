
// funcion de incremento de cantidad

function conteo_de_cantidad(cant_prod,cant){
        cant_prod = cant_prod + cant;
        return cant_prod;
}

// funcion mensaje de despedida

function despedida(){

    alert('Gracias por visitar nuestra página \n'+'   '+'    Te esperamos pronto!');

}

// declaracion de variables

let cant_remera = 0;
let cant_pantalon = 0;
let cant_zapatillas = 0;
let cant_buzo = 0;
let continuar = 's';


let inicio_sesion = prompt('Bienvenido a la tienda, desea realizar una compra? \n SI- ingrese s \n NO- ingrese n')

if(inicio_sesion == 's'){

    do{    
        let ingreso = prompt('Que producto desea adquirir: \n 1-Remera \n 2-Pantalón \n 3-Zapatillas \n 4-Buzo');
        let cantidad = parseInt(prompt('¿Cuantos desea comprar?'));

    // Incremento de la cantidad de productos a adquirir 

        switch (ingreso) {
            case '1':
                cant_remera = conteo_de_cantidad(cant_remera,cantidad);
                break;
            case '2':
                cant_pantalon = conteo_de_cantidad(cant_pantalon,cantidad);
                break;
            case '3':
                cant_zapatillas = conteo_de_cantidad(cant_zapatillas,cantidad);
                break;
            case '4':
                cant_buzo = conteo_de_cantidad(cant_buzo,cantidad);
                break;
            default:
                break; 
            }
        continuar = prompt('desea agregar otro producto? \n SI- ingrese s \n NO- ingrese n');
    }while(continuar != 'n');
    
    alert('Carrito: \n Producto: Remera----Cantidad: '+ cant_remera + '\n Producto: pantalon---Cantidad: '+ cant_pantalon + '\n Producto: zapatillas--Cantidad: '+ cant_zapatillas + '\n Producto: buzo-------Cantidad: '+ cant_buzo);
    
    despedida();
    
}else if(inicio_sesion == 'n'){
        despedida();
        
}else{
        alert('opcion invalida');
}





