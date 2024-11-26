
var numero1=document.getElementById("inputNumero1"); 
var numero2=document.getElementById("inputNumero2"); 

function limpia(){
    numero1.value=""; 
    numero2.value="";   
}

function sumar(){
    var resultado= parseInt(numero1.value)+parseInt(numero2.value); 
    var area=document.getElementById("area"); 
    area.value="La suma del "+numero1.value+" y "+numero2.value+" es "+resultado;
    limpia();
}

function restar(){
    var resultado= parseInt(numero1.value)-parseInt(numero2.value); 
    var area=document.getElementById("area"); 
    area.value="La resta del "+numero1.value+" y "+numero2.value+" es "+resultado;
    limpia();
}

function multiplica(){
    var resultado= parseInt(numero1.value) * parseInt(numero2.value); 
    var area=document.getElementById("area"); 
    area.value="La multiplicación del "+numero1.value+" y "+numero2.value+" es "+resultado;
    limpia();
}

function divide(){
    var resultado= parseInt(numero1.value) / parseInt(numero2.value); 
    var area=document.getElementById("area"); 
    area.value="La división del "+numero1.value+" y "+numero2.value+" es "+resultado;
    limpia();
}


