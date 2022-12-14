/*6.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
este objeto sea creado se debe llamar a una función secundaria que
clasifique y muestre en consola la actividad asignada al Padawan
*******************************************************************************/

//Declarando la funcion tradicional
/*function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz){
    let datosAprendiz={
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
    }
    clasificarAprendiz(datosAprendiz)
}

//Llamando la funcion
crearAprendiz('Angie','Saturno', 23, 1.63,function(aprendiz){
    if(aprendiz.edad>=15){
        console.log("Usted se va para la clase de sable de la luz")
    }else{
        console.log("Usted se va para la clase de fuerza")
    }
})*/


//funcion con flechas
let crearAprendiz = (nombre, planeta, edad, estatura, clasificarAprendiz)=>{
    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
    }
    clasificarAprendiz(datosAprendiz)
}


crearAprendiz ("Angie", "Saturno", 23, 1.63, (aprendiz) => {
    if (aprendiz.edad >= 15) {
        console.log("Usted se va para la clase de sable de la luz")
    } else {
        console.log("Usted se va para la clase de fuerza")
    }
})