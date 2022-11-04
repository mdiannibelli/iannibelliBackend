const express = require('express');
const app = express();
app.listen(8080, () =>{
    console.log("Server escuchando en puerto 8080");
})

app.use(express.static(__dirname + "/public"))

// interpretar informacion de tipo json que venga a traves de una solicitud (para el post /personas)
app.use(express.json());
app.use(express.urlencoded({extended:true})) //interpreta los valores que viene del form


app.set("views", __dirname + "/views");
app.set("view enguine", "ejs"); //npm i ejs

const usuarios = [];

app.get("/", (req,res) =>{
    res.render("home", {
        users: usuarios
    })
})

app.post("/personas", (req,res) =>{
    console.log(req.body);
    users.push(req.body);
    res.redirect("/") // redirige al home para que muestre el usuario agregado
})
