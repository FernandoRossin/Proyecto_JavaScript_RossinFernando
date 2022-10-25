

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

// función para ver productos

function ver_productos(){
    for (const producto of bus) {
        let div = document.createElement('div');
        div.className = "col-12 col-md-6 col-xl-3 contenido";
        div.innerHTML =  `
            <h3 class="titulo1">Nombre del producto: ${producto.nombre}</h3>
            <p class="titulo1">el precio es de: $ ${producto.precio}</p>
            <button class="boton_compra btn btn-primary" onclick="comprar_producto('${producto.id}')">Comprar</button>
            `
        impri_prod.appendChild(div);  
        }
}

// función para buscar productos

function filtrar_producto(arr,filtro){
    const filtrado = arr.filter((el)=>{
        return el.nombre.includes(filtro);
    });
        return filtrado;
} 

// función para agregar productos al carrito

function comprar_producto(id){
    let producto = productos.find(p => p.id == id);
    carrito.push(producto);
    let carrito_storage = JSON.stringify(carrito)
    localStorage.setItem('carrito',carrito_storage);
    mostrar_carrito();
} 

// función para mostrar el carrito

function mostrar_carrito(){
    if(JSON.parse(localStorage.getItem('carrito')) == null){
        impri_carr.innerHTML = `<p class="titulo text-center">El carrito está vacío.</p>`;        
    }else{
    carrito_storage = JSON.parse(localStorage.getItem('carrito'));
    impri_carr.innerHTML = ``;
    let total = 0;
    for (const producto of carrito_storage) {
        let li = document.createElement('li');
            li.innerHTML = `
            <h3 class="titulo1">Nombre del producto: ${producto.nombre}</h3>
            <p class="titulo1">el precio es de: $ ${producto.precio}</p>
            `
        impri_carr.appendChild(li);
        total = total + producto.precio;  
        }
    let p = document.createElement('p');
    p.innerHTML = `<p class="titulo">Total: $ ${total}</p>`
    impri_carr.appendChild(p);
    }
}


// declaracion de variables

const productos = [];

let carrito = [];

if(JSON.parse(localStorage.getItem('carrito')) == null){
    carrito = [];
}else{
    carrito = JSON.parse(localStorage.getItem('carrito'));
}
console.log(carrito);

let bus = productos;

let continuar = 's';

const producto1 = new Producto(1,'remera',1500);
const producto2 = new Producto(2,'pantalon',3000);
const producto3 = new Producto(3,'zapatillas',2500);
const producto4 = new Producto(4,'buzo',2000);

cargar_producto(productos,producto1);
cargar_producto(productos,producto2);
cargar_producto(productos,producto3);
cargar_producto(productos,producto4);

// Buscar productos

const boton_buscar = document.querySelector('#boton_buscar');
const input = document.getElementById('buscar');
const impri_prod = document.getElementById("impri_prod");

// ver productos

boton_buscar.addEventListener('click',()=>{
    impri_prod.innerHTML = ``
    bus = filtrar_producto(productos,input.value.toLowerCase());
    return ver_productos(bus)
})


ver_productos(bus);
mostrar_carrito();


    





