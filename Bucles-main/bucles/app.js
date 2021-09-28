
// 2) Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
// suma = 0;
// for (n = 0; n < 5; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s);
//     alert(suma)
// }

/// 3) Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
// suma = 0;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s);
//     alert(suma)
// }

// 4) Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
// suma = 0;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s);
//     alert(suma)
// }

//5)Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
// var numeros = parseInt(prompt("¿Cuantos numeros quiere ingresar?"))
// var suma = 0;
// var promedio;
// for (n = 0; n < numeros; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     suma += parseInt(s)
//     promedio = suma / numeros;
//     alert(promedio)
// }

// 6) Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido.

//7)Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 
// var numeroinicial = parseInt(prompt("Ingrese el primer numero "));
// numeroinicial += 1;
// var numeroFinal = prompt("Ingrese el numero final")
// for (n = numeroinicial; n < numeroFinal; n++) {
//     alert(n)
// }

// 8) Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
// var mayorA = mayorA;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     s = parseInt(s)
//     if (mayorA === s || mayorA > s) {
//         alert('El mayor es: ' + mayorA)
//     } else {
//         mayorA = s
//         alert('El mayor es: ' + mayorA)
//     }
// }

///9)Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
// var menorA = menorA;
// var pepe = parseInt(window.prompt("¿Cuantos nùmeros desea ingresar?"))
// for (n = 0; n < pepe; n++) {
//     s = prompt('Ingrese número' + n + ': ', '');
//     s = parseInt(s)
//     if (menorA === s || menorA < s) {
//         alert('El menor  es: ' + menorA)
//     } else {
//         menorA = s
//         alert('El menor es: ' + menorA)
//     }
// }

// 10) Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)
// var asterico = ' ';
// var pepe = parseInt(window.prompt("Ingrese la cantidad de astéricos recomendada por su médico."));
// for (n = 0; n < pepe; n++) {
//     asterico += '*'
// }
// alert('La cantidad de asteriscos es:' + asterico)

///11) Realizar un programa que pida la base y el exponente y calcule la potencia. 
// var base = parseInt(prompt("Ingresa la base"))
// var exponente = parseInt(prompt("Ingresa el exponente"))
// var calculo = base;
// for (n = 1; n < exponente; n++) {
//     calculo *= base
// }
// alert(calculo)

///12)Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
// var numero = parseInt(prompt("Ingresa un numero"))
// numero += 1
// var multiplicacion = 1;
// for (n = 1; n < numero; n++) {
//     multiplicacion *= n;
// }
// alert(multiplicacion)

///13)Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
// var numero = parseInt(prompt("Ingresa un numero positivo"))
// var numero2 = numero + 1
// var resto;
// for (n = 1; n < numero2; n++) {
//     resto = numero % n
//     if (resto === 0) {
//         alert("Tu numero es divisible por:" + "" + n)
//     }
// }

///14)Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” ,4), debe mostrar:
// H
// O
// L
// A
// var palabra = prompt("Ingrese una palabra");
// var cCaracteres = parseInt(prompt("¿Cuanto caracteres queres que muestre ?"))
// for (n = 0; n < cCaracteres; n++) {
//     var caracteres = palabra.charAt(n)
//     alert(caracteres)
// }

///15)Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 
// var productos = prompt("¿cuantos productos vas a comprar ?")
// var primerProducto = prompt("¿Que productos queres añadir al carrito?")
// for (n = 1; n < productos; n++) {
//     var carrito = prompt("¿Que mas queres añadir?")
//     primerProducto += "," + " " + carrito;
// }
// alert(primerProducto)

///16)Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.
// var numero;
// do {
//     numero = parseInt(prompt("Ingrese un numero"))
// } while (numero % 3 != 0)
// alert("Muy bien ingresante un multiplo de 3")

//BONUS DESAFIOS MATEMÁTICOS !!

// 1) Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 
// 5)Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
// var numeros = parseInt(prompt("¿Cuantos numeros quiere ingresar?"))
// var suma = 0;
// var promedio;
// for (n = 0; n < numeros; n++) {
//     s = parseInt(prompt('Ingrese número' + n + ': ', ''))
//     if (s == 10 || s < 10) {
//         suma += (s)
//         promedio = suma / numeros;
//         alert(promedio)
//     }
//     else {
//         alert("Ingresaste un numero muy grande")
//     }
// }

// 2) Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente.
// var PrimerNumero
// var consecutivos
// var consecutivos2
// do {
//     PrimerNumero = parseInt(prompt("Ingrese un numero"))
//     consecutivos = parseInt(prompt("Ingrese su consecutivo"))
//     consecutivos2 = parseInt(prompt("Ingrese su consecutivo"))
// } while (consecutivos != PrimerNumero + 1 || consecutivos2 != consecutivos + 1)

// 3) Realizar un programa que pida dos números y diga su máximo común divisor. ?(notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).(Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).
// var Numero1 = parseInt(prompt("Ingrese su Primer Numero"))
// var Numero2 = parseInt(prompt("Ingrese su Segundo Numero"))
// var Cuenta1 = Cuenta1
// var Cuenta2 = Cuenta2
// var Max
// var MaxDivisor = 0
// if (Numero1 < Numero2) {
//     Max = Numero2
// } else (Max = Numero1)
// for (n = 1; n < Max; n++) {
//     Cuenta1 = Numero1 % n
//     Cuenta2 = Numero2 % n
//     if (Cuenta1 === 0 && Cuenta2 === 0) {
//         if (n > MaxDivisor) {
//             MaxDivisor = n
//         }
//     }
// }
// alert("El divisor maximo de los dos numeros es " + MaxDivisor)

// 4) Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
// Ingresa 1 > muestra 1 
// Ingresa 8 > muestra 8
// Ingresa 3 > Muestra 3
// ingresa 4 > Muestra 8
// Ingresa 9 > Muestra 18
// Ingresa 50 > Muestra 100
// Ingresa 7 > Muestra 21
// ingresa 10 > Muestra 30

// var n = -1
// var multiplicacion = 0
// do {
//     a = parseInt(prompt("ingrese un numero"))
//     n += 1
//     let resto = n % 3
//     if (resto === 0) {
//         multiplicacion += 1
//         a *= multiplicacion
//     }
//     else (a *= multiplicacion)
//     alert("tu numero es " + a)
// } while (a < 100)

// 5) Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo
// for (i = 0; i < 10; i++) {
//     var numero = parseInt(prompt("Ingresa un numero"))
//     numero += 1
//     var multiplicacion = 1;
//     for (n = 1; n < numero; n++) {
//         multiplicacion *= n;
//     }
//     alert(multiplicacion)
// }

// 6) Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. 
// var cantidad = parseInt(prompt("Ingrese un Numero por favor"))
// var valor1 = 1
// var valor2 = 1
// var dato = cantidad % 2
// cantidad /= 2
// cantidad = Math.round(cantidad)
// for (n = 1; n < cantidad; n++) {
//     alert("Ronda de caracteres" + ": " + valor1)
//     alert("Ronda de caracteres" + ": " + valor2)
//     valor1 += valor2
//     valor2 += valor1
// }
// if (dato != 0) {
//     alert("Ronda de caracteres " + ": " + valor1)
// } else{
// alert("Ronda de caracteres" + ": " + valor1)
// alert("Ronda de caracteres" + ": " + valor2)
// }