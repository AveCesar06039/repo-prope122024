var Total; 

var Producto1 = {
    Nombre:"Lavadora",
    Precio: "10500",
    TipoProducto:"Linea Blanca" 
    }
var Producto2 = {
    Nombre:"jicama",
    Precio: "84",
    TipoProducto:"Frutas y Verduras" 
    }
var Producto3 = {
    Nombre:"Pantalla",
    Precio: "9000",
    TipoProducto:"Electronicos" 
    }
var Producto4 = {
    Nombre:"Trapeador",
    Precio: "156",
    TipoProducto:"Limpieza" 
    }
var Producto5 = {
    Nombre:"Portatil",
    Precio: "24000",
    TipoProducto:"Computación" 
    }    
    
function AplicaDescuento(TipoProducto, Precio){
    if(TipoProducto == "Linea Blanca"){
        Total =  (Precio - (Precio * .50 ))
    } 
    else if(TipoProducto == "Frutas y Verduras")
    {
        Total =  (Precio - (Precio * .05 ))
    }
   else if(TipoProducto == "Electronicos")
    {
        Total =  (Precio - (Precio * .60 ))
    }
     else if(TipoProducto == "Limpieza")
    {
        Total =  (Precio - (Precio * .15 ))
    }
    else{
        Total =  (Precio - (Precio * .25 ))
    }
    console.log(Total);
}

function caja ()
{
    console.log("Producto:" + Producto1.Nombre + ", Precio:" + Producto1.Precio + ", Tipo Producto:" + Producto1.TipoProducto)
     AplicaDescuento(Producto1.TipoProducto, Producto1.Precio)

     console.log("Producto:" + Producto2.Nombre + ", Precio:" + Producto2.Precio + ", Tipo Producto:" + Producto2.TipoProducto)
     AplicaDescuento(Producto2.TipoProducto, Producto2.Precio)

     console.log("Producto:" + Producto3.Nombre + ", Precio:" + Producto3.Precio + ", Tipo Producto:" + Producto3.TipoProducto)
     AplicaDescuento(Producto3.TipoProducto, Producto3.Precio)

     console.log("Producto:" + Producto4.Nombre + ", Precio:" + Producto4.Precio + ", Tipo Producto:" + Producto4.TipoProducto)
     AplicaDescuento(Producto4.TipoProducto, Producto4.Precio)

     console.log("Producto:" + Producto5.Nombre + ", Precio:" + Producto5.Precio + ", Tipo Producto:" + Producto5.TipoProducto)
     AplicaDescuento(Producto5.TipoProducto, Producto5.Precio)

}

caja ()