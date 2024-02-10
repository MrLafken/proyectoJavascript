const administrador = "Andy"

function Producto(nombreProducto, talle, precio) {
    this.nombreProducto = nombreProducto;
    this.talle = talle;
    this.precio = precio;
}

function crearProducto(nombreProducto,talle,precio,i) {
    console.log(productos[i])
    productos.push(new Producto(nombreProducto,talle,precio))
}


let productos = [];

let botonEntrada = document.getElementById("botonEntrada");
botonEntrada.addEventListener("click", function saludo() {
    let nombreUsuario = document.getElementById("nombre").value;
    console.log(nombreUsuario + " Se ha registrado");
    let tituloIzq = document.getElementById("h1Izq");
    tituloIzq.innerText = "Hola " + nombreUsuario + "!";
    despliegueMenu(nombreUsuario);
});

function despliegueMenu(nombreUsuario) {
    
    let divIzq = document.getElementById("divIzq");
    let divDesplegable = document.createElement("div");

    divIzq.appendChild(divDesplegable);
    divDesplegable.innerHTML = `<h2 class="margen"> Qué deseas hacer ${nombreUsuario}?</h2>
    <button id="botonAgregarProducto" class="centrar boton">Agregar Producto</button>
    <button id="botonComprarProducto" class="centrar boton">Comprar Producto</button>
    `;

    let botonAgregarProducto = document.getElementById("botonAgregarProducto");
    botonAgregarProducto.addEventListener("click", function constructorProductos(nombreProducto,talle,precio,i){
        let cantidadProductos = parseInt(prompt("Cuántos productos querés agregar?"))
        for(let i = 0 ; i<cantidadProductos; i++){
            this.nombreProducto = prompt("Ingrese el nombre del producto " + (i+1));
            this.talle = prompt("Ingrese el talle del producto " + (i+1));
            this.precio = parseFloat(prompt("Ingrese el precio del producto " + (i+1)));
            crearProducto(nombreProducto,talle,precio,i)
        }
        console.log(productos[i])
    })

    let botonComprarProducto = document.getElementById("botonComprarProducto");
    botonComprarProducto.addEventListener("click", () =>alert("agregar2?"))
    return(divDesplegable,divIzq)
}
let divDer = document.getElementById("divDer");
let listaProductos = document.createElement("ul");
for(Producto of productos)
{
    divDer.appendChild("ul")
    divDesplegable.innerHTML = `<li class="margen"> Nombre Producto ${productos[Producto.nombreProducto]}?</li>
                                <li class="margen"> Talle Producto ${productos[Producto.talle]}?</li>
                                <li class="margen"> Nombre Producto ${productos[Producto.precio]}?</li>
    `;
}











/*
alert(nombreUsuario + ", cómo estás? Esta es la tienda online de merchandising de Airbag.")
let operacion = prompt("Qué querés hacer? \n 1 Comprar Productos \n 2 Agregar productos (Sólo admins)")*/

/*if(operacion == 1){
    alert("1")
}
else if(operacion==2){
    if(nombreUsuario=="Andy"){
        let cantidadProductos = parseInt(prompt("Cuántos productos querés agregar?"))
        for(let i = 0 ; i<cantidadProductos; i++){
            this.nombreProducto = prompt("Ingrese el nombre del producto " + (i+1));
            this.talle = prompt("Ingrese el talle del producto " + (i+1));
            this.precio = parseFloat(prompt("Ingrese el precio del producto " + (i+1)));
            crearProducto(nombreProducto,talle,precio,i)
        }
    }
    else{
        alert("Solo Andy puede agregar productos :(")
        
    }
}

else {
    alert("Veo que sos medio muñeco.")
}
for(x in productos){
    alert("Los productos disponibles son: " + productos)
    alert("Los productos disponibles son:\n " + productos[x].nombreProducto + "\n" + productos[x].talle +  "\n" + productos[x].precio)
}*/