# Sistema interactivo
Este preoyecto es una página web básica que implementa un sistema interactivo para capturar y validar datos ingresados por el usuario. El sistema solicita el nombre y la edad del usuario mediante cuadros de diálogos y muestra un mensaje personalizado dependiendo de la edad ingresada.

## Archivos 
## `Index.html`

Este archivo es la estructura principal de la página web. Contiene:
* La declaración básica de un documento HTML..
* La inclución del archivo `sistema_interactivo.js`, que contiene la lógica interactiva. 

``` html
<script src="sistema_interactivo.js"></script>
```
El `<body>` no contiene elementos visibles porque toda la interacción ocurre mediente `prompt`, `alert` y la consola de navegador.

## `sistema_interactivo.js`
Este archivo contiene la lógica del sistema interactivo:

**Inicialización:** Muestra un mensaje de bienvenida a la consola.
```javascript
console.log("Bienvenido al sistema interactivo!")
```
**Captura de datos:** Solicita el nombre y la edad del usuario mediante `prompt`
```javascript
let nombre = prompt("Ingrese su nombre:")
let edad = prompt("Ingrese su edad")
```
**Conversión y validación:**
* Convierte la edad a número.
* Verifica si la edad es un número válido.
* Dependiendo de la edad ingresada, muestra un `alert` con un mensaje adecuado:
    * Si es menor de 18 años: mensaje de ánimo para seguir aprendiendo.
    * si es mayor de 18 años: mensaje alentador para aprovechar las oportunidades en el desarrollo.
```javascript
if (isNaN(edad)){
    console.error("Ingresa una edad válida");
} else if (edad < 18 ){
    alert(`Hola ${nombre}, eres menor de edad. ¡No dejes de aprender y divertirte programando!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Ponte listo para nievas y emocionantes oportunidades en el sector del desarrollo!`)
}
```

# Cómo funciona
1. Abre `index.html` en un navegador.
2. Aparecerán cuadros de diálogos pidiendo que ingreses tu nombre y tu edad.
3. El sistema validará la edad: 
    * Si no es un número válido, mostrará un error en la consola.
    * Si es un número válido, mostrará un mensaje personalizado según la edad

# Requisitos
* Navegador web moderno (Chrome, Firefox, Edge, etc.). 
* No requiere servidor ni configuración adicional.

# Notas
* Toda la interacción se realiza mediente cuadros de diálogos (`prommpt`, `alert`) y mensajes en la consola.
+ el diseño visual de la página es inexistente , ya que el enfoque está en la lógica interactiva