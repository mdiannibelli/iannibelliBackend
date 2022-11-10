const express = require('express');
const {Server} = require("socket.io")

const app = express();
const port = 8080;

app.use(express.static(__dirname+"/public"));

const server = app.listen(port, () =>{
    console.log("Server escuchando en puerto 8080")
});


// creacion del servidor websocket
const io = new Server(server);


// este evento se captura cada vez que se establezca la conexion del socket y el cliente
io.on("connection", (socket) =>{
    console.log("cliente nuevo se ha conectado", socket.id)
    //           evento        datos o la info
    socket.emit("first msg", "ya estas conectado");

    socket.on("msgCliente", (data) =>{
        console.log(data);
    })
})