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

### Vídeo 18 Introducción a arreglos

- Un arreglo puede contener mucha información, puede ser de tipos de datos mezclados.
- const tecnologías = [20, 30, true, 'react'];
- console.log(typeof tecnologias) //object
- Para acceder al valor de un arreglo, se tiene que hacer mediante la posición. 
- console.log( tecnologias[2], tecnologias[3] ) //true, react
- console.log( tecnologias.toString()) //20,30,true,react

### Vídeo 19 Manipulación de Arrays

- const tecnologias = ['html', 'css', 'JavaScript', 'React', 'NodeJs'];
- Añadir elementos al array: tecnologias.push('GraphQL') //Agrega elementos al final del arreglo
- Añadir elementos al array al inicio: tecnologias.unshift('GraphQL'); // GraphQL, html, css, JavaScript
- Lo anterior está modificando el arreglo original, en react esto no está permitido.
- const nuevoArreglo = [...tecnologias, 'GraphQL'] //copia del arreglo original y agrega elemento al final
- const nuevoArreglo = ['GraphQL', ...tecnologias] //copia del arreglo original y agrega elemento al inicio
- Eliminar elementos de un array: tecnologias.pop() //NodeJS, elimina el último elemento
- Eliminar primer elemento de un array: tecnologias.shift() //html eliminado
- Para eliminar un elemento dentro de un arreglo mediante la posición, tecnologias.splice(2, 1) //Primer argumento, a partir de que indice deseas eliminar, segundo argumento a partir del seleccionado cuántos elementos eliminará.

-**Ejemplos**
- Eliminar elementos de un arreglo que no sea el arreglo original.
- const nuevoArray = tecnologias.filter( function (info) { console.log(info)}) //Itera sobre el arreglo, filtra información y devuelve uno nuevo.
- const nuevoArray = tecnologias.filter( function (info) { return info != 'html'}) //Devuelve un array donde no se encuentre el elemento hmtl 
- const nuevoArray = tecnologias.map( function (info) { if(info == 'html') { return 'GraphQL';} else { return info} }) //Devuelve un array, permite alterar los elementos.
- tecnologias[0] = 'GraphQL' //Modifica el arreglo original

### Vídeo 20 Destructuring de arrays
- Al igual que en los objetos, podemos extraer el valor de un array mediante destructuring de arrays.
- const tecnologias = ['html', 'css', 'JavaScript', 'React', 'NodeJs'];
- const [posicion0, posicion1, posicion2] = tecnologias; // html, css, JavaScript
- Para obtener la posición deseada "JavaScript", sería muy tedioso además de tener variables que no deseamos, como posicion0 y posicion1. Para ello está la siguiente forma: const [,,posicion2] = tecnologias; //JavaScript, cada coma es una posición.

### Vídeo 21 Iteradores de Arreglos
- Podemos iterar con un for, foreach, map. Se ejecutan una vez por cada elemento existente. Map es similar a foreach, en react map es mas utilizado debido a que nos permite crear un nuevo arreglo sin alterar el original. Foreach recorre datos, y map te devuelve un nuevo arreglo.

### Vídeo 22 Funciones - Function declaration
- Las funciones no inician con número y deben tener la palabra function al inicio. Si son dos o más palabras, se utiliza camelCase. Los nombres de las funciones deben ser descriptivas, todo lo que se encuentra dentro de las llaves pertenece a la función. Una vez definida, necesitamos mandar a llamar la función. Podemos mandarla a llamar antes de declarar en JavaScript, debido al hoisting, que permite escanear funciones y variables antes de ser declaradas.

### Vídeo 23 Funciones - Parámetros y parámetros por default.
- Para pasar parametros a una función, debe ser dentro del parentesís. En caso de ser dos o más parámetros, se deben separar por una coma, o bien mandarlo dentro de un objeto. Parámetros son los que reciben la información en un método, y argumentos la información que se envía a la función.

### Vídeo 24 Funciones que retornan valores
- Es el resultado que devuelven las funciones, podemos devolver un valor, arreglo u objeto. Lo más recomendable para extraer la información es con object destructuring en caso de ser un objeto.

### Vídeo 25 Funciones Function Expression
- La diferencia entre function expression y function declaration, radica en que una usa la palabra function, mientras que la otra es similar a una variable. Estamos asignando una función a una constante. Las funciones expression, se deben declarar primero y después mandarlas a llamar.

### Vídeo 26 Funciones - Arrow functions
- Te permiten definir de manera compacta una función convencional. Si la función tiene solamente una sentencia que devuelve un valor, el uso de funciones flecha nos permite eliminar las llaves y la palabra return. También podemos eliminar el parentesís y solamente requerimos un parámetro.

### Vídeo 27 Arrow functions y Array methods
- El método tradicional, requiere definir la palabra function para recibir parámetros, podemos omitirlo con un parentesís. Estás propiedades, las podemos aplicar a los métodos array, map y filter por ejemplo. La finalidad es tener un código más limpio y compacto.