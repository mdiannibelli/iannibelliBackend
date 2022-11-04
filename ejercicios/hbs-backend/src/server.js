const { pseudoRandomBytes } = require('crypto');
const express = require('express');
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();

const viewsFolder = path.join(__dirname, "views");
console.log(viewsFolder);

app.listen(8080, ()=>{
    console.log("Servidor ejecutandose en el puerto 8080")
});

// iniciar motor de plantillas
app.engine("handlebars", handlebars.engine());

//vistas en mi proyecto
app.set("views", viewsFolder )

// que motor de platinllas voy a usar 
app.set("view engine", "handlebars");

//render
app.get("/", (req,res)=>{
    res.render("home");
})

let usuarios = [
    {
        name: "pedro",
        cel: 123123,
        city: "miami"
    },
    {
        name: "rodolfo",
        cel: 123123,
        city: "miami"
    },
    {
        name: "marcos",
        cel: 123123,
        city: "miami"
    }
]

app.get('/users', (req,res) =>{
    res.render('usuarios', {
        people:usuarios
    })
})
