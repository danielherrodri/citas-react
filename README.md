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

### Vídeo 28 Otros array methods útiles
- Every, retorna true o false si todos los elementos cumplen una condición.
- Filter devuelve aquellos elementos que cumplen con una condición, pueden ser uno o más.
- Includes, devuelve true o false si un elemento existe en un array.
- Some, devuelve true o false si al menos algún elemento del array cumple con la condición.
- Find, devuelve el primer elemento que cumpla la condición.
- Reduce, realiza la suma de todos los elementos en vez de implementar un for.
- Filter, crea un nuevo array en base a una condición.
- Foreach, para iterar elementos.
- Map, para retornar un nuevo arreglo.
- Verificar cuál de estos métodos muta el arreglo original, evitar los que mutan en react.

### Vídeo 29 Condicionales If
- Nos permite realizar evaluaciones sobre una condición para ejecutar cierto código. En caso contrario, se utiliza el else. Los operadores que existe son, mayor que, menor que, igual, mayor o igual, menor o igual, diferente de. 

### Vídeo 30 Condicionales con == y ===
- Nos permite realizar validaciones, == valida valores, === valora que el tipo de dato sea igual que a la variable proporcionada.
- == Comparación pero no estrictra
- === Comparación estricta
- Esto se puede comprobar con typeof
- Podemos convertir el tipo de dato string a number con la clase Number.

### Vídeo 31 Condicionales || y &&
- Permite realizar múltiples evaluaciones, donde al cumplirse la primera las demás no se evualarán (||)
- Permite realizar múltiples evaluaciones, donde al cumplirse todas las condiciones se marcarán como true. (&&)

### Vídeo 32 Condicionales - Ternarios
- Permite evaluar condiciones a través de una sintáxis corta, solo permite responder un if y else. En else podemos agregar otra condición, se recomienda únicamente para dos niveles, más de eso ocasionará confusión.
- (autenticado) ? 'Si está logueado': 'No está logueado'.
- Es muy utilizado en react.

### Vídeo 33 Scope de variables 
- Se refiere al alcance de las variables, si son globales o pertenecientes a un método. En Javascript no se pueden tener variables con el mismo nombre. Podemos crear la misma variable dentro de un if o dentro de una función, ya que el ciclo de vida termina al salir de las llaves.

### Vídeo 34 Selectores del DOM - querySelector
- Document es un objeto que hace referencia a todo el HTML que tiene la página. Para poder acceder a un elemento, se inicia con document.querySelector o querySelectorAll, el primero te trae de 0 a 1 elemento, el segundo todos los elementos que coinciden. Podemos acceder a través de id, html, clases o nombres, idéntico a CSS.

### Vídeo 35 Selectores del DOM - querySelectorAll
-Nos permite listar todos los elementos que conciden en la condición que se encuentran en querySelectorAll. Devuelve un arreglo de elementos, podemos iterar sobre los elementos si se desea. Para ello se tiene que utilizar forEach y acceder individualmente al objeto.

### Vídeo 36 Manipular HTML con Js.
-const heading = document.querySelector('.heading') //Accedemos al elemento heading, retorna un objeto.
-Cada elemento tiene propiedades, como textContent, que nos permite modificar el titulo o texto de cualquier elemento, permite aplicar dinámismo en el html. Al impimir el elemento, podemos ver que tiene muchas propiedades que podemos utilizar. LLega ser útil con react para manipular el dom si tenemos un conjunto de datos.

### Vídeo 37 Eventos del DOM - Clicks
- JavaScript tiene eventos que permiten hacer aplicaciones dinámicas. El mover el mouse, presionar, o enviar un formulario, son eventos que se pueden detectar en JS. En este caso veremos el click, podemos seleccionar un elemento y añadirle un evento de la siguiente forma.
- const heading = document.querySelector('.heading')
- heading.addEventListener('click', ()>={ función callback })
- El primer parámetro es el tipo de evento a asignar, el segundo parámetros es la función que ejecutará ese evento.
- Funciona con arrow functions, no con function expressions.

### Vídeo 38 Eventos del DOM - Input
- Muy útil para saber lo que el usuario estpa ingresando en la plataforma. En el momento en el que seleccionas un elementos, puedes modificar cualquiera de sus atributos html. Podemos modificar el tipo de input desde JS. 
- const inputNombre = document.querySelector('.nombre')
- inputNombre.type = 'password'
- Incluso podemos asignar un evento al input, donde podemos detectar los valores que el usuario está ingresando en el input.
- Keydown, se ejecuta al presionar una tecla.
- Keyup, se ejecuta cuando presiona y se deja de presionar una tecla.
- La variable e, dentro de un eventListener, permite capturar el evento y la información modificada. Target es donde viene el input completo para tener acceso al value, target.value.

### Vídeo 39 Eventos del DOM - Submit
- Evento que se ejecuta el enviar un formulario, podemos capturar el evento antes de la redirección para validar que los campos ingresados vayan correctamente validados o realizar un trozo de código antes de enviar. Mediante el e.preventDefault(), permite prevenir la acción por default del evento. 

### Vídeo 40 Generando código HTML con JavaScript
- A través del uso de JavaScript podemos hacer inserciones de código HTML al DOM. Para ello se utiliza el método createElement.
- Para la creación de tags, se utiliza el nombre TAGNAME en mayúscula. document.createElement('DIV')
- Las clases tienen propiedades, agregar tipo, alt, id, class.
- El método .add, nos permite agregar valores de clase a un elemento.

### Vídeo 41 Imports y Exports
- JavaScript nos permite dividir los trozos de código de forma nativa, en versiones anteriores no era posible. 
- Podemos tener un archivo de funciones, donde estás funciones son llamadas por distintos archivos js.
- La sintáxis a implementar es import [nombre_funcion] from [ubicación dentro del proyecto].js, en react no es necesario especificar el .js al final.
- Para mandar a llamar estos archivos es necesario especificar el type="module" en el tag script.
- Solo podemos tener un export default por documento.
- Para exportar más de una función se puede utilizar export { funcion1, funcion2}

### Vídeo 42 Fetch API y Promises
- La nueva API que reemplaza Ajax o el XHMLHttpRequest. Una nueva forma de consumir una api o servicio hospedado en otro servidor.
- Ya viene nativamente en el navegador, no es necesario descargar un recurso.
- El método fetch requiere una url fecth("https://localhost"), then(respuesta) contiene la respuesta del servidor, incluye el código de la petición así como funciones que podemos utilizar, la más común es json().
- En estas peticiones las arrows functions son las más recomendadas.

### Vídeo 43 Fetch API con Async Await
- En este tipo de funciones, las funciones deben declararse como asíncronas. Para ello la palabra reservada async, debido a que dentro del código se utilizará la palabra reservada await. 
- Permite esperar a que el código termine para continuar con la ejecución del código.
- Await bloquea el código, previene que las líneas siguiente se ejecuten. Una vez obtenida la información continua la ejecución.

### Vídeo 44 Múltiples Async/Await performance
- Al consultar múltiples funciones con el método asíncrono async await. Por lo cuál toma demasiado tiempo al consultar la información.
Para ello es necesario utilizar el concepto paralelo, únicamente considerarlo para funciones que no dependen de si mismos. 
- Promise.all([fetch(url1)], [fecth(url2)]). Inicia la ejecución en paralelo, permitiendo ejecutarlos al mismo timempo y reducir el tiempo de ejecución. 
- Para medir el performance, performance.now(). Nos devuelve el tiempo de ejecución.

### Vídeo 45 Template strings
- Es una forma de concatenar variables con strings incluso funciones.
- Es necesario utilizar este tipo de comillas ``. Para incrustar una variable, se requiere utilizar la siguiente sintáxis: console.log(` La variable es ${variable}`); -- Backtips
- El motivo de este funcionamiento es evitar el código ilegible, ya que anteriormente se concatenaban strings y variables con el símbolo de +.

### Vídeo 52 Qué es JSX
- Es una extensión del lenguaje desarrollada por Facebook para react. Es un lenguaje de templates que muestra HTML con todas las funciones de JavaScript. Una vez compilado todos estos archivos pasan a ser JS con funciones y objetos.
- A diferencia de HTML, en JSX si una etiqueta HTML tiene apertura, debe llevar forzosamente una de cierre.
- Las etiquetas de solo apertura son link, img, input, deberán finalizar con />.
- Cada componente deberá llevar return. Máximo un solo elemento en el nivel más alto.