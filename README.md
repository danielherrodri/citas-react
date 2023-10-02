# React + Vite

## Fundamentos

### Vídeo 11
- En un inicio se utilizaba las variables var, se siguen utilizando, sin embargo; En la sintaxis moderna se está utilizando let y const únicamente. Var, let y const no están atados a un tipo de dato, sino a un valor, lo que significa que a una variable de los tipos mencionados anteriormente se les puede asignar números, texto, decimales, boleanos. 

- Anteriormente 
- var nombre = 'Daniel Rodriguez';

- Ahora
- let nombre = 'Daniel Rodriguez';

- nombre = 'Daniel';
- nombre = 24;
- nombre = true;

### Vídeo 12
- Las diferencias que tiene const vs let y var es que const está diseñado para almacenar información inmutables, ya sea una url, datos default, etc. 

- const nombre = 'Daniel'; //sin error
- nombre = 'Rodriguez' //error
- const precio; //error, siempre deben estar inicializadas las variables de tipo const

- Regla de las variables: No pueden iniciar con números, caracteres especiales, espacios. (guión bajo sí). Se recomienda utilizar camelCase.

### Estructuras y tipos de datos
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