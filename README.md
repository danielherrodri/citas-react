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