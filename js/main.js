
// función para buscar productos

function filtrar_producto(arr,filtro){
    const filtrado = arr.filter((el)=>{
        return el.nombre.includes(filtro);
    });
        return filtrado;
} 


// Buscar productos

const boton_buscar = document.querySelector('#boton_buscar');
const input = document.getElementById('buscar');
const impri_prod = document.getElementById("impri_prod");
const desplegar_carrito = document.getElementById('desplegar_carrito');
const mostrar_ocultar = document.getElementById('mostrar_ocultar');



desplegar_carrito.addEventListener('click', ()=>{
    
    mostrar_ocultar.style.display === 'block' ? mostrar_ocultar.style.display = 'none' : mostrar_ocultar.style.display = 'block';

})



async function productos_online(){
    const response = await fetch('./data/data.json');  
    const productos = await response.json();
    
    let carrito = [];

    JSON.parse(localStorage.getItem('carrito')) == null ? carrito = [] : carrito = JSON.parse(localStorage.getItem('carrito'));

    let bus = productos;
      
    // función para agregar productos al carrito

    function comprar_producto(id){
        const esta_en_carrito = carrito.some(p => p.id == id);
        if(esta_en_carrito){
            const p = carrito.map(p =>{
                if (p.id == id){
                    p.cantidad++
                }
            })         
        }else{
        let producto = productos.find(p => p.id == id);
        producto.cantidad = 1; 
        carrito.push(producto);
        }
        let carrito_storage = JSON.stringify(carrito)
        localStorage.setItem('carrito',carrito_storage);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su compra se agregó al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        mostrar_carrito();

    }

    function mostrar_carrito(){
            if(JSON.parse(localStorage.getItem('carrito')) == null || JSON.parse(localStorage.getItem('carrito')) == ''){
                impri_carr.innerHTML = `<p class="titulo text-center">El carrito está vacío.</p>`;        
            }else{
            carrito_storage = JSON.parse(localStorage.getItem('carrito'));
            impri_carr.innerHTML = ``;
            let total = 0;
            for (const producto of carrito_storage) {
                let div = document.createElement('div');
                    div.className = 'prod_carr';
                    div.innerHTML = `
                    <p class="formato_prod">Producto: ${producto.nombre}</p>
                    <p class="formato_prod">Precio: $${producto.precio}</p>
                    <p class="formato_prod">Cantidad: ${producto.cantidad} un.</p>
                    <button id="eliminar_producto${producto.id}" class="btn btn-primary" >Eliminar</button>
                    `
                impri_carr.appendChild(div);
                const bot_eliminar = document.getElementById('eliminar_producto'+producto.id);
                bot_eliminar.addEventListener('click',()=>{
                eliminar_carrito(producto.id)
                });
                total = total + producto.precio * producto.cantidad;  
                }
            let p = document.createElement('p');
            p.innerHTML = `<p class="titulo total">Total: $ ${total}</p>`
            impri_carr.appendChild(p);
            
            let div = document.createElement('div')
            div.innerHTML = `<button type="button" class="btn btn-primary btn-compra" id="realizar_compra">Realizar compra</button>`
            
            impri_carr.appendChild(div);
            
            const realizar_compra = document.getElementById('realizar_compra');
            
            realizar_compra.addEventListener('click',()=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Compra realizada con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                carrito = [];
                carrito_storage = JSON.stringify(carrito);
                localStorage.setItem('carrito',carrito_storage);
                mostrar_carrito();
            })

            }
        }
        
   
    // Eliminar del carrito
    function eliminar_carrito(id){
        Swal.fire({
            title: 'Atención!',
            text: "Está seguro que desea eliminarlo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro!'
          }).then((result) => {
            if (result.isConfirmed) {                
                const item = carrito.find(p => p.id == id);
                const indice = carrito.indexOf(item);
                carrito.splice(indice,1);
                carrito_storage = JSON.stringify(carrito);
                localStorage.setItem('carrito',carrito_storage);
                mostrar_carrito();
                Swal.fire(
                         'Su producto ha sido eliminado.',
                        )
                        }
                 })    
        }
    
    
    function ver_productos(bus){
        let div = document.createElement('div');
        div.innerHTML = ``;        
        if(bus == ''){
            div = document.createElement('div');
            div.className = "titulo text-center";
            div.innerHTML =  `
                <p class="titulo">No se encontraron productos con esa descripción</p>
                `
            impri_prod.appendChild(div);
        }else{
        for (const producto of bus) {
            div = document.createElement('div');
            div.className = "col-12 col-md-6 col-xl-3 contenido";
            div.innerHTML =  `
                <img src="${producto.img}" width="180" height="180"  alt="">
                <h3 class="titulo1">${producto.nombre}</h3>
                <p class="titulo1">Precio: $ ${producto.precio}</p>
                <button id="comprar_producto${producto.id}" class="boton_compra btn btn-primary" >Comprar</button>
                `
            impri_prod.appendChild(div);
             const bot_compra = document.getElementById('comprar_producto'+producto.id);
            bot_compra.addEventListener('click',()=>{
            comprar_producto(producto.id);
            })
        }
    }   
    }
    
    // ver productos

    boton_buscar.addEventListener('click',()=>{
    impri_prod.innerHTML = ``
    bus = filtrar_producto(productos,input.value.toLowerCase());
    return ver_productos(bus);
    })
    
    ver_productos(bus);
    mostrar_carrito();

  }
  
productos_online()

