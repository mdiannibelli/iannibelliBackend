const path = require("path");

module.exports = {
    // definir la config que necesita webpack a la hora de empaquetar

    //modo
    mode:"production",

    //entrypoint; archivo principal
    entry: "./src/server.ts",

    //el entorno donde se va a ejecutar el programa
    target: "node",

    //en que carpeta van a quedar convertidos los archivos y comprimidos
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },

    //extensiones con las que vamos a trabajar
    resolve:{
        extensions: [".ts", "js"]
    },

    //loaders: indica como procesar ciertos archivos
    module:{
        rules:[
            //diferentes reglas para c/u de las extensiones que queremos transpilar y empaquetar
            {
                //identifica todos los archivos .ts
                test: /\.tsx?/,
                use: "ts-loader",
                //excluimos ciertas carpetas
                exclude: /node_modules/
            }
        ]
    }
}