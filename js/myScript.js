// elijo las variables que voy a seleccionar 
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");

// Listeners 

function cargarEventListeners(){
    productos.addEventListener("click", comprarProducto);

}

cargarEventListeners();

// cargar productos al carrito de compras

function comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const producto = e.target.parentElement.parentElement;
        // enviamos el producto selecionado
        leerDatosProducto(producto);
    } 
}

function eliminarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains("borrar-producto")){
        e.target.parentElement.parentElement.remove();
    }
}


// ahora leemos los datos del producto
function leerDatosProducto(producto){
    // creamos un objeto para guardar los datos del producto
    const infoProducto = 
    {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector("h6").textContent,
        precio: producto.querySelector(".precio").textContent,
        id:producto.querySelector("a"),

    };

    insertarCarrito(infoProducto);
}

// Muestra el producto selecionado en el carrito

function insertarCarrito(producto){
    const row = document.createElement("tr");
    row.innerHTML=`
    <td>
        <img src="${producto.imagen}" width= 100>
    </td>
    <td>
        ${producto.nombre}
    </td>
    <td>
        ${producto.precio}
    </td>
    <td>
      <a href="#" class="vaciar-carrito">X</a>
    </td>
     
    `
    listaProductos.appendChild(row)
};

