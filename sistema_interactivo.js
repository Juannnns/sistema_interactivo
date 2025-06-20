// Inicializacion del programa
console.log("Bienvenido al sistema interactivo!")

// Capturar los datos del usuario
let nombre = prompt ("Ingrese su nombre:")
let edad = prompt("Ingrese su edad:")

// conversion de la edad a número
edad =parseInt(edad)

// Validar y mostrar mensajes
if (isNaN(edad)) {
    console.error("Ingresa una edad válida");
} else if (edad < 18 ) {
    alert(`Hola ${nombre}, eres menor de edad. ¡No dejes de aprender y diviertete programando.`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Ponte listo para nuevas y emocionantes  oportunidades en el sector del desarrollo!`)
}