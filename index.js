alert(`¡OFERTA!
Si su compra es menor a $7000, tendrá un descuento del 10%,
y si su compra es mayor a $7000, su descuento será de 20%. Elija el número del producto que desea comprar:`);

const productos = [
    { id: 1, nombre: "Anteojo Metal clasico", precio: 8000},
    { id: 2, nombre: "Anteojo Zilo", precio: 10000},
    { id: 3, nombre: "Anteojo TR90", precio: 6000}]

const productPrint = () => productos.map((el)=>`${el.id}-${el.nombre}: $ ${el.precio}\n`);

let elegirProducto = Number(prompt(`        
        ${productPrint()}                                                                                    
        0-Para acabar y salir.`));



//Inicializamos las variables que almacenaran las cantidades totales de los productos a comprar, y la variable del monto total.
let cantidad_1 = 0;
let cantidad_2 = 0;
let cantidad_3 = 0;
let total = 0.00;

//Función que realiza la acumulacion de los montos por cada producto elegido.
function acumulaTotal(id, cantidad) {
    const obj = productos.find (producto => producto.id == id);
    const precio = obj.precio;
    total += precio * cantidad;
    console.log(precio);
    return total;
    
}

//Frente a la eleccion de cada producto se pregunta el numero a comprar.
while (elegirProducto != "0") {
    switch (elegirProducto) {
        case 1:
            let cant1 = Number(prompt(`El producto elegido es "Metal Clasico", indique la cantidad: `));
            acumulaTotal(elegirProducto, cant1); //acumula el monto total a pagar
            cantidad_1 += cant1;           //acumula la cantidad total del producto 1
            break;
        case 2:
            let cant2 = Number(prompt(`El producto elegido es "Zilo", indique la cantidad: `));
            acumulaTotal(elegirProducto, cant2);  //acumula el monto total a pagar
            cantidad_2 += cant2;            //acumula la cantidad total del producto 2
            break;
        case 3:
            let cant3 = Number(prompt(`El producto elegido es "TR90", indique la cantidad: `));
            acumulaTotal(elegirProducto, cant3); //acumula el monto total a pagar
            cantidad_3 += cant3;           //acumula la cantidad total del producto 3
            break;        
        default:
            alert('Ingrese una opción válida.');
            break;
    }
    //Se presenta el menu de eleccion nuevamente hasta que el usuario elija "0" y salga del menu.
    elegirProducto = Number(prompt(`       
        ${productPrint()}                                                              
        0-Para acabar y salir.`));
}

// Se presenta el resumen de la compra, indicando el precio unitario y las cantidades elegidas
// Además se indica el monto total a pagar.
alert(`
    Resumen de la compra:        
    ${productPrint()}      
    >> La Cantidad del producto solicitada es ${cantidad_1} 
    >> La Cantidad del producto solicitada es ${cantidad_2}
    >> La Cantidad del producto solicitada es ${cantidad_3}       
    El monto total de la compra es de $ ${total}`);



let descuento = 0;
let comentario = "";    

const res = productos.map((el) => {
       if (el.precio > 7000) {
         return {
           name: el.nombre,
           price: el.precio,
           descuento: el.precio * 0.2,
           comentario: "[Monto mayor a $7000, 20% de descuento]",
         };
       } else {
         return {
           name: el.nombre,
           price: el.precio,
           descuento: el.precio * 0.1,
           comentario: "[Monto menor a $7000, 10% de descuento]",
         };
       }
     });
console.log(res);

const filtroPrecio = productos.filter (producto => producto.precio < 7000)

const listaDeProductos = productos.map (producto => producto.nombre)

console.log(listaDeProductos);
console.log (filtroPrecio);

