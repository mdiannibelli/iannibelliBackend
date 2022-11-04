const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log("Servidor ejecutandose en el puerto 8080");
})

//cargamos style.css
app.use(express.static(__dirname + "/public"))



// configuracion de motor de plantillas

//definir donde se encuentran los archivos de mis vistas
app.set("views", __dirname + "/views"); //__dirname es la ubicacion de donde esta mi archivo actual de server.js (en este caso src)


// definimos con cual motor de plantillas vamos a trabajar
app.set("view engine" , "pug") //npm install pug


//definimos rutas
app.get("/home", (req,res) =>{
    res.render("welcome", {
        msg: "Plantilla pug"
    });
})

// /datos?min=10&nivel=15&max=20&titulo=pagina%20medidor
app.get("/datos", (req,res) =>{
    console.log(req.query)
    const {min, nivel, max, titulo} = req.query;
    res.render("medidor",{
        min: min,
        value: nivel,
        max: max,
        title: titulo
    })
})