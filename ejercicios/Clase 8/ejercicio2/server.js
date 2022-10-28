const express = require('express');
const multer = require('multer');

const port = 8080;

const app = express();
const routerFile = express.Router()


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))
app.listen(port, () =>{
    console.log(`Escuchando el servidor ${port}`)
})

let storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, "uploads")
    },
    filename: (req, file, callback)=>{
        callback(null, Date.now() + "-" + file.fieldname + file.originalname )
    }
    
})

const upload = multer({ storage })

routerFile.get("/", (req,res) =>{
    res.sendFile(__dirname + "index.html");
})

routerFile.post("/subir", upload.single("miArchivo"), (res, req, next) =>{
    const file = req.file;

    if(!file){
        const error = new Error("Archivo vacio");
        error.httpStatusCode = 400;
        return next(error)
    }
    res.send(file);
})

app.use("/", routerFile);