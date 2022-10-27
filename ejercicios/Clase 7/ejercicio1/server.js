const express = require('express');

const app = express();

const port = 8080;

app.listen( PORT, () =>{
    console.log(`Servidor escuchando el puerto: ${port}`);
})

const frase = 'Hola mundo como estan';

app.get( '/frase', (req, res)=>{
    res.json({
        frase
    })
})

app.get('/api/letras/:num', (req,res) =>{
    const num = parseInt(req.params.num) +1; /* se suma 1 porque se empieza a contar en 0 y la idea es que arranque en 1 */
    console.log(num);

    const letra = frase[num];

    if(isNaN(num)){
        res.json({
            error: 'El parametro no es un numero'
        })
    } else{
        letra == undefined
        ? res.json({
            error: 'El parametro se encuentra fuera de rango'
        })
        : res.json({
            letra
        })
    }

})

app.get('/api/palabras:num', (req,res) =>{
    const num = parseInt(req.params.num)-1;
    console.log(num)
    const palabra = frase.split(' ')[num]; /* trae el numero de palabras y lo separa con un espacio */ /* .split Divide el texto en función de una string o carácter especificados y coloca cada fragmento en una celda independiente de la fila. */
    console.log(palabra[num])

    if(isNaN(num)){
        res.json({
            error: 'El parametro no es un numero'
        })
    } else{
        palabra == undefined
        ? res.json({
            error: 'El parametro se encuentra fuera de rango'
        })
        : res.json({
            palabra
        })
    }

})