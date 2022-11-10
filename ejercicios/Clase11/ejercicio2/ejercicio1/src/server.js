const express = require('express');
const {Server} = require("socket.io")

const app = express();
const port = 8080;

app.use(express.static(__dirname+"/public"));

const server = app.listen(port, () =>{
    console.log("Server escuchando en puerto 8080")
});


const chat = [];

// creacion del servidor websocket
const io = new Server(server);


// este evento se captura cada vez que se establezca la conexion del socket y el cliente
io.on("connection", (socket) =>{
    console.log("cliente nuevo se ha conectado", socket.id);
//capturo el evento que recibo del cliente (emit) y (on) para capturar
    socket.on("tecla", (data)=>{
        console.log(data)
    })

    socket.on("mensaje", (data) =>{
        chat.push({user:socket.id, msg:data});
        io.socket.emit("mensajes", chat)
    })
    })
