const express = require('express');

const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
});

app.get('/api/sumar/:num1/:num2', (req,res) =>{
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    res.status(200).json({
        suma: parseInt(num1) + parseInt(num2)
    })
});

app.get('/api/sumar', (req,res) =>{
    let num1 = req.query.num1; /* en vez de usar parametros usamos una query */
    let num2 = req.query.num2;

    res.status(200).json({
        suma: parseInt(num1) + parseInt(num2)
    })

});

app.get('/api/operacion/:nums', (req,res) =>{
    let suma = eval(req.params.nums)

    res.json({
        suma
    })
});

app.get('*', (req,res) =>{ /* * = todas las rutas que no estan definidas */
    res.json({
        msg : 'No existe la ruta'
    })
});