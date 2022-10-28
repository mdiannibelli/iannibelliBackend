const express = require('express');

const { Router } = require('express');

const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(express.static("public")); /* para archivos estaticos como html css etc usamos express.static y "Public" de la carpeta creada donde se encuentra el archivo */

app.listen(port, () =>{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
});

const mascotas = [];
const personas = [];

const routerMascotas = Router();
const routerPersonas = Router();

routerMascotas.get('/', (req,res) =>{
    res.json({
        mascotas
    })
})

routerMascotas.post('/', (req,res) =>{
    let mascota = req.body
    mascotas.push(mascota)
    res.json({
        msg: 'Se agrego la mascota'
    })
})

routerPersonas.get('/', (req,res) =>{
    res.json({
        personas
    })
})

routerPersonas.post('/', (req,res) =>{
    let persona = req.body
    personas.push(persona)
    res.json({
        msg: 'Se agrego la persona'
    })
})

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)