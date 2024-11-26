var estudiante1 = {
    Nombre:"Pedro",
    edad: "24",
    califiación:"10" 
    }

var estudiante2 = {
    Nombre:"Juan",
    edad: "25",
    califiación:"8" 
    }
    
var estudiante3 = {
    Nombre:"Luis",
    edad: "22",
    califiación:"5" 
    }

    function muestra(){
        console.log("Nombre:" + estudiante1.Nombre + " Edad:" + estudiante1.edad + " Calificación:" + estudiante1.califiación )
        aprobo(estudiante1.califiación)
        console.log("Nombre:" + estudiante2.Nombre + " Edad:" + estudiante2.edad + " Calificación:" + estudiante2.califiación )
        aprobo(estudiante2.califiación)
        console.log("Nombre:" + estudiante3.Nombre + " Edad:" + estudiante3.edad + " Calificación:" + estudiante3.califiación )
        aprobo(estudiante3.califiación)
            }

    function aprobo(cal){
        if(cal >= 6)console.log('Aprobado')
        elseconsole.log('Reprobado')
    }

    muestra();