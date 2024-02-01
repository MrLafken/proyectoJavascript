let nro1 = 0;
let nro2 = 0;
let resultado = 0;
let iterador = 0;
alert("Hola!")
let nombre =prompt("Cuál es tu nombre?", "Ingresá tu nombre acá")
alert(nombre + ", cómo estás? Esta es una calculadora. A continuación vas a elegir el tipo de operación.")
let operacion = prompt("Qué tipo de operación querés usar? \n 1 es Suma \n 2 es Resta \n 3 es Multiplicación \n 4 es división")
if(operacion==1){
        iterador = prompt("Cuántos números vas a sumar?")
        resultado = parseInt(prompt("Ingresá el primer número"))
        for(let i = 1 ; i<iterador; i++){
        nro2 = parseInt(prompt("Perfecto, ahora ingresá el próximo número"))
        resultado = resultado + nro2
        }
        alert("El resultado de tu operación es " + resultado)
    } else if(operacion==2){
        nro1 = parseInt(prompt("Ingresá el primer número"))
        nro2 = parseInt(prompt("Perfecto, ahora ingresá el segundo número"))
        resultado = nro1 - nro2
        alert("El resultado de tu operación es " + resultado)
    }
    else if(operacion==3){
        nro1 = parseInt(prompt("Ingresá el primer número"))
        nro2 = parseInt(prompt("Perfecto, ahora ingresá el segundo número"))
        resultado = nro1 * nro2
        alert("El resultado de tu operación es " + resultado)
    }
    else if(operacion==4){
        nro1 = parseInt(prompt("Ingresá el primer número"))
        nro2 = parseInt(prompt("Perfecto, ahora ingresá el segundo número"))
        resultado = nro1 / nro2
        alert("El resultado de tu operación es " + resultado)
    }
    else {
        alert("Mmmm... Sólo podemos hacer esas 4 operaciones")
    }