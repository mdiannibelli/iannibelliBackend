const express = require('express');
const app = express();
app.listen(8080, () =>{
    console.log("Server escuchando en puerto 8080");
})

app.use(express.static(__dirname + "/public"))



app.set("views", __dirname + "/views");
app.set("view enguine", "ejs"); //npm i ejs

app.get("/", (req,res) =>{
    res.render("welcome", {
        message: "mensaje"
    })
})
