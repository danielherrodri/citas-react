# React + Vite

## Fundamentos

### Vídeo 11 Variables con Let
- En un inicio se utilizaba las variables var, se siguen utilizando, sin embargo; En la sintaxis moderna se está utilizando let y const únicamente. Var, let y const no están atados a un tipo de dato, sino a un valor, lo que significa que a una variable de los tipos mencionados anteriormente se les puede asignar números, texto, decimales, boleanos. 

- Anteriormente 
- var nombre = 'Daniel Rodriguez';

- Ahora
- let nombre = 'Daniel Rodriguez';

- nombre = 'Daniel';
- nombre = 24;
- nombre = true;

### Vídeo 12 Variables con cost
- Las diferencias que tiene const vs let y var es que const está diseñado para almacenar información inmutables, ya sea una url, datos default, etc. 

- const nombre = 'Daniel'; //sin error
- nombre = 'Rodriguez' //error
- const precio; //error, siempre deben estar inicializadas las variables de tipo const

- Regla de las variables: No pueden iniciar con números, caracteres especiales, espacios. (guión bajo sí). Se recomienda utilizar camelCase.

### Vídeo 13 Estructuras y tipos de datos
- Los tipos de datos que se encuentran en JavaScript son: Object, Number, Symbol, Undefined, Boolean, Big Int, String, Function y Null. No existen tipos de datos array, se consideran Object.JavaScript es un lenguaje de tipo de dato dinámico.

- Undefined, se asigna al crear una variable sin valor, nacen como undefined.
- En JavaScript no existen números negativos, flotantes, absolutos, etc. Todos son tratados con el tipo de dato number.

- **Ejemplos**
- let cliente; console.log(typeof  cliente) //undefined.
- cliente = 24; console.log(typeof cliente) //number.
- const descuento = true; console.log(typeof descuento) //boolean, solo devuelve true o false.
- const numero_1 = 23.23; console.log(type of numero_1) //number
- const numero_2 = -12; console.log(type of numero_2) //number
- const numero_3 = 100; console.log(type of numero_3) //number   
- const numero = 30; console.log(typeof numero) //number
- const numero2 = "30"; console.log(typeof numero2) //strings
- const numero_grande = 230938398983983839839383; console.log(typeof numero_grande) //number
- const numero_grande_2 = BigInt(727837832787823783287232) console.log(typeof numero_grande_2)//bigint
- numero_grande + numero_grande_2 //Mandará error, porque bigint únicamente puede ser sumado con otro bigint, en este caso lo correcto sería. numero_grande + Number(numero_grande_2)

### Vídeo 14 Introducción a objetos

- Un objeto puede almacenar una gran cantidad de información. Para acceder a los valores de una clase, se requiere acceder con un punto (.).

- **Ejemplo**
- const producto = { nombre: 'Laptop Hp Pavillion 13', precio: 23000, disponible: true};
- Quiero imprimir el nombre, se haría de la siguiente forma: console.log(producto.nombre) //'Laptop Hp Pavillion 13'
- Podemos realizar destructuring de un objeto de la siguiente forma: const { nombre, precio, disponible} = producto; El valor de las propiedades de la clase, se inserta en las variables declaradas. Básicamente realiza dos pasos en uno solo, crea la variable y asigna la información. 
-- Object literal Enhacement, nos ahorra pasos de más mientras la variable se llame igual que las propiedades. const autenticado= true; const usuario = 'drodriguez'; const nuevoObjeto = {autenticado, usuario};

### Vídeo 15 Manipulación de Objetos

- Para modificar el valor de los objetos, es necesario acceder a ellos a través del punto. Un ejemplo claro sería el siguiente: 
- const producto = {nombre: "Tablet", precio: 300, disponible: true}
- producto.nombre = "IPhone 14 pro";
- Si el objeto no contiene una propiedad, en este caso la imagen, y deseamos agregarla. El sistema agregará al objeto presente la propiedad que no estuvo declarada desde un inicio.
- producto.imagen = 'celular.jpg'; console.log(producto) // producto:{ nombre: "IPhone 14 pro", precio: 300, disponible:true, imagen: 'celular.jpg'}
- JavaScritp al intentar eliminar propiedades que no existen, o agregar propiedades no lanzará ningún tipo de error.
- Existe un método dentro de la clase Object de JavaScript, Object.freeze(producto), lo cuál impide que se realice cualquier tipo de modificación o eliminación a los valores de una clase a la que se le haya aplicado esa funcionalidad.
- Object.seal(producto), permite reescribir las propiedades existentes, pero no permite añadir nuevas o eliminarlas.

### Vídeo 16 Destructuring de 2 o más objetos
-Permite extraer información de un objeto en variables.

- **Ejemplos**
- const producto = {nombre: "Tablet", precio: 300, disponible: true};
- const cliente = {nombre: 'Juan', premium: true};
- const {nombre, precio, disponible} = producto;
- console.log(nombre, precio, disponible) //Tablet 300 true
- const {nombre, premium} = cliente; // Error, no puede haber dos propiedades en destructuring con el mismo nombre.
- La solución es aplicar un alias en destructuring. const {nombre: nombreCliente , permium} = cliente;
- console.log(nombre) // Tablet
- console.log(nombreCliente) // Juan

### Vídeo 17 Unir 2 o más objetos
- Unir dos objetos para almacenar

- const producto = {nombre: "Tablet", precio: 300, disponible: true};
- const cliente = {nombre: 'Juan', premium: true};
- const nuevoObjeto = Object.assign(producto, cliente); Devuelve un nuevo objeto con la información mezclada y unida, altera el modelo producto y cliente, no es una buena práctica en react.
- const nuevoObjeto2 = {...producto, ...cliente} // ... spread operator, significa tomar una copia de un objeto. Sin embargo; si ambos comparten una misma propiedad, se pierden datos, lo recomendable es lo siguiente:
- const nuevoObjeto2 = { producto: {...producto}, cliente: {...cliente}}; Crea dos objetos dentro de uno solo, sin perder o modificar los arreglos originales.