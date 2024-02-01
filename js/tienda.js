const administrador = "Andy"
function Producto(nombreProducto, talle, precio) {
    this.nombreProducto = nombreProducto;
    this.talle = talle;
    this.precio = precio;
}

function crearProducto(nombreProducto,talle,precio,i){
    productos[i] = new Producto(nombreProducto, talle, precio);
    console.log(productos[i])
    productos.push(productos[i])
}

let productos = [];

alert("Hola!")
let nombreUsuario =prompt("Cuál es tu nombre?", "Ingresá tu nombre acá")
alert(nombreUsuario + ", cómo estás? Esta es la tienda online de merchandising de Airbag.")
let operacion = prompt("Qué querés hacer? \n 1 Comprar Productos \n 2 Agregar productos (Sólo admins)")
if(operacion == 1){
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
    }