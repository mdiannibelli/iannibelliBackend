const express = require('express');
const app = express();

app.listen(8080, ()=>{
    console.log("Servidor ejecutandose en el puerto 8080")
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// acceso a la carpeta public:
app.use(express.static(__dirname + "/public"));