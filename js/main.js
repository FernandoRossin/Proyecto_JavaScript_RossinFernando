
// funcion mensaje de despedida

function despedida(){

    alert('Gracias por visitar nuestra página \n'+'   '+'    Te esperamos pronto!');

}

// función para buscar productos

function filtrar_producto(arr,filtro){
    const filtrado = arr.filter((el)=>{
        return el.nombre.includes(filtro);
    });
        return filtrado;
} 

// función para crear productos

function Producto(id,nombre,precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

// función para agregar producto nuevo

function cargar_producto(array,prod){
    array.push(prod)
}



// declaracion de variables

const productos = [];

const carrito = [];

let continuar = 's';

const producto1 = new Producto(1,'remera',1500);
const producto2 = new Producto(2,'pantalon',3000);
const producto3 = new Producto(3,'zapatillas',2500);
const producto4 = new Producto(4,'buzo',2000);

cargar_producto(productos,producto1);
cargar_producto(productos,producto2);
cargar_producto(productos,producto3);
cargar_producto(productos,producto4);


let inicio_sesion = prompt('Bienvenido, desea ingresar a la tienda? \n SI- ingrese s \n NO- ingrese n')

if(inicio_sesion == 's'){

    do{    
        let ingreso = prompt('Que operación desea realizar: \n 1-Búscar un producto \n 2-Compra un producto \n 3-Ver el carrito');
        
    // Opciones del menú: 

        switch (ingreso) {
            case '1':
                let buscar = prompt('Ingrese el producto que desea buscar')
                let bus = filtrar_producto(productos,buscar);
                for (const prod of bus) {
                    alert('Se encontró: ' + prod.nombre + '-> Precio: '+ prod.precio);
                }
                break;
            case '2':
                do{    
                    let ingreso = prompt('Que producto desea adquirir: \n 1-Remera \n 2-Pantalón \n 3-Zapatillas \n 4-Buzo');
                    let cant = parseInt(prompt('¿Cuantos desea comprar?'));
                    switch (ingreso) {
                        case '1':
                            carrito.push({id: productos[0].id,nombre: productos[0].nombre, precio: productos[0].precio, cantidad: cant});
                            break;
                        case '2':
                            carrito.push({id: productos[1].id,nombre: productos[1].nombre, precio: productos[1].precio, cantidad: cant});
                            break;
                        case '3':
                            carrito.push({id: productos[2].id,nombre: productos[2].nombre, precio: productos[2].precio, cantidad: cant});
                            break;
                        case '4':
                            carrito.push({id: productos[3].id,nombre: productos[3].nombre, precio: productos[3].precio, cantidad: cant});
                            break;
                        default:
                            break; 
                        }
                    continuar = prompt('desea agregar otro producto? \n SI- ingrese s \n NO- ingrese n');
                }while(continuar != 'n');
                break;
            case '3':
                if (carrito.length > 0){                
                for (const prod of carrito) {
                    alert('El carrito contiene: ' + prod.nombre + '-> Cantidad: '+ prod.cantidad);
                }
                break;
                }else{
                    alert('El carrito se encuentra vacío')
                }
                break;
            default:
                break; 
            }
        continuar = prompt('desea realizar otra consulta? \n SI- ingrese s \n NO- ingrese n');
    }while(continuar != 'n');
    
    despedida();
    
}else if(inicio_sesion == 'n'){
        despedida();
        
}else{
        alert('opcion invalida');
}





