const express = require('express');
const app = express();
const {Server} = require('socket.io');

const port = process.env.port || 8080;

const server = app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});

app.use(express.static("public"));

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
 ];


// configurar el server websocket
const io = new Server(server);

// detectar socket de cada cliente que se conecte
io.on("connection", (socket) =>{ //cada nuevo cliente que se conecte se guardara en la variable socket
    console.log("New client connected")

    // enviar los msjs al cliente
    socket.emit("messagesChat", messages);

    //recibimos el mensaje del formulario
    socket.on("recentMsg", (data) =>{
        messages.push(data);

        //enviamos mensaje a todos los clientes conectados
        io.sockets.emit("messagesChat", messages)
    })
}) 