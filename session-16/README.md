# Sesión 16 - 18/11/2021

## Ejercicios

### Palindromo (Diana/Ana Sofia/Ana Karina)

Crea una función que identifique si un string es un palíndromo (esto es, se lee igual al derecho o al revés), retornando true si lo es o false si no.

```js
isPalindrome('ana') // returns true
isPalindrome('holo') // returns false
isPalindrome('neveroddoreven') // returns true
isPalindrome('stresseddesserts') // returns true
```

---

### Mayores y menores (Diana)

Implementa una función que reciba un arreglo de números y devuelva un nuevo arreglo
con 3 elementos, en este orden:
el número mayor del arreglo.

```js
const analyseArray = (arr) => {
  // ...
};
const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];
const [max, min, max2] = analyseArray(numbers);
console.log(max); // 100
console.log(min); // -80
console.log(max2); // 32
```

---

### Nombres formateados (Alicia)

Implementa una función que recibe un arreglo de strings con nombres de personas, y retorna un nuevo arreglo de strings con los nombres formateados.

__Ejemplo__

```js
Entrada: ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE']
Salida: [ 'M. Curie', 'M. Anning', 'A. Lovelace', 'S. Ride' ]
```

---

### Consecutive Sum (Alicia)

Determina el index de inicio cuando una secuencia de numeros del array de numeros sea igual al valor de target value recibido en el segundo argumento de la funcion. Esta funcion recibe dos argumentos:
   1. Un array de numeros
   2. Un numero.

_Ejemplo_ 

```js
Entrada: ([0,1,5,5,1,1,2,1,8,6], 7)
Salida: 3: la secuencia[5,1,1] que suma 7 empieza en el indice 3

Entrada: ([0,1,55,45,1,2,1,2,6], 7)
Salida: -1: No hay ninguna secuencia que sume 7
```
### Minimum Moves

Tienes 2 arrays con numeros arr1 y arr2. Un movimiento significa incrementar o disminuir un elemento en el array. Determina el numero de movimientos que te
tomara hacer coincidir el array de arr1 con el de arr2. No esta permitido reordenar los digitos.

_Ejemplo_
```js
arr1 = [123,543]
arr2 = [321,279]
```
  * Compara arr1[0]=123 con arr2[0]=321.
     * Suma 1 + 2 para llegar a 3 (2 movimientos).
     * Resta 3 -2 para llegar a 1 (2 movimientos).
     * Son necesarios 4 movimientos para hacer coincidir 123 con 321
  * Compara arr1[1]=543 con arr2[1]=279.
     * Resta 5 - 3 para obtener 2 (3 movimientos).
     * Suma 4 + 3 para obtener 7 (3 movimientos).
     * Suma 3 + 6 para obtener 9 (6 movimientos).
     * Son necesarios 12 movimientos para hacer coincidir 5433 con 279
  * 16 movimientos en total son necesarios para hacer coincidir el arr1 con el arr2
 
 ### Columnas responsivas (Flor)

Realizar una estructura en css y html de una fila con dos divs responsive  y al hacer la pantalla más pequeña en lugar de estar ordenados por fila se hicieran en columna.

### Mayores y menores (Flor)

Dado un arreglo de números sacar el mayor, menor y penúltimo mayor.

---

### Maxima clave (Daniela Torres)

Dado un mapa de valores, escribe una función que consiga el máximo nombre de valor

```js
getMax({ foo: 0.9, bar: 0.25, baz: 4.20 });
```

---

### Consumir una API (Ana Davila)

Debes consumir una  API [https://randomuser.me/](https://randomuser.me/) y crea una interfaz que entregue un directorio de usuarios.

Debe de tener al menos 10 usuarios, 5 hombres y 5 mujeres. Deben ser siempre los mismos perfiles, no puede cambiar el directorio después de una actualización. Incluir nombre, género, foto, email, fecha de registro, dirección y teléfono

---

### Imprimir números (Victoria)

Escriba un programa que imprima todos los números del 1 al 100.
Sin embargo, para múltiplos de 3, en lugar del número, escriba "Laboratoria".
Para múltiplos de 5 imprime "IT".
Para números que son múltiplos de 3 y 5, imprime "Laboratorianas".

__Requisitos__

* Solo usar `if` una sola vez
* No puedes usar `else`, `else if` o ternary

## Hacking en vivo

[![Hacking (Live) sesión 16 -  18/11/2021 by Nohely](https://i3.ytimg.com/vi/1d6ISoJeRBY/hqdefault.jpg)](https://www.youtube.com/watch?v=1d6ISoJeRBY)
