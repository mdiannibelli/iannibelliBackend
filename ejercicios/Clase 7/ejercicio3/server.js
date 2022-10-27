const express = require('express');

const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
});

let frase = 'Frase inicial';

app.get('/api/frase', (req,res) =>{
    res.send({
        frase
    })
});

app.get('/api/palabras/:pos', (req,res) =>{
    const pos = parseInt(req.params.pos);
    let palabras = frase.split(' ');

    res.json({
        buscada: palabras[pos]
    })
});

app.post('/api/palabras', (req,res) =>{
    let { palabra } = req.body;

    frase = frase.concat( ' ', palabra);
    let palabras = frase.split(' ');

    res.json({
        agregada: palabra,
        posicion: palabras.length
    })
});

app.put('/api/palabras/:pos', (req,res) =>{
    let { palabra } = req.body;
    const pos = parseInt(req.params.pos)-1;

    let palabras = frase.split(' ');

    let anterior = palabras[pos];
    palabras[pos] = palabra;

    res.json({
        actualizada: palabraas[pos],
        anterior
    })

});

app.delete('/api/palabras/:pos', (req,res) =>{
    const pos = parseInt(req.params.pos)-1;

    let palabras = frase.split(' ');

    let palabra = palabras.filter( (e,ix) => ix != pos)

    frase = palabra.join(' ');
    res.json({
        palabra
    })


})