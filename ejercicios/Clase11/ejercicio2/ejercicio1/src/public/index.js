console.log("funcionando")

//inicializando socket del lado del cliente
const socketClient = io();

const inputChat = document.getElementById("chatinput");

inputChat.addEventListener("keydown", (e) =>{
    console.log(e.key);
    socketClient.emite("tecla", e.key)
})


inputChat.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") {
        socketClient.emit("mensaje", inputChat.value)
        inputChat.value = "";
    }
})

const msgContainer = getElementById("msgContainer");


socketClient.on("mensajes", (data) =>{
    msgContainer.innerHTML="";
    data.array.forEach(element => {
        const p = document.createElement("p");
        p.innerHTML = `id: ${element.user}: ${element.msg}`
        msgContainer.appendChild(p);
    });
})