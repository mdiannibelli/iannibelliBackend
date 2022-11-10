console.log("funcionando")

//inicializando socket del lado del cliente
const socketClient = io();

socketClient.on("first msg", (data) =>{
    console.log(data)
})

socketClient.emit("msgCliente", {user:"marcos"})