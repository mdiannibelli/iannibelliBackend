// javascript del lado del frontend


// recibimos el io que mandamos desde el server.js 
const socketClient = io();

const chatContainer = document.getElementById("chatContainer");

socketClient.on("messagesChat", (data) =>{
    console.log(data) //recibimos los mensajes y lo guardamos en la variable data
    let messages ="";
    data.forEach(element => {
        messages += `<p>${element.author}: ${element.text}</p>`
    });
    chatContainer.innerHTML = messages;
})

// capturar el nombre del usuario que se conecta al chat
let user = "";
Swal.fire({
    title: "Bienvenido",
    text: "Ingresa tu nombre de usuario",
    input: "text",
    allowOutsideClick: false
}).then(res =>{
    user = res.value; //value es el valor que recibe el input al completarlo
    document.getElementById("username").innerHTML = `Bienvenido ${user}`;
})

// enviar un mensaje a nuestro servidor
const chatForm = document.getElementById("chatForm");

chatForm.addEventListener("submit", (event) =>{
    event.preventDefault(); //previene que se recarge la pagina al enviar el formulario

    const message = {
        author: user,
        text: document.getElementById("messageChat").value
    }
    //enviamos el nuevo mensaje
    socketClient.emit("recentMsg", message);
})
