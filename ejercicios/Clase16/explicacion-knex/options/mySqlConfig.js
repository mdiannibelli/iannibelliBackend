// configuracion para conectarse a la base de datos
const options = {
    // indicar a que gestor de base de datos nos vamos a conectar
    client: "mysql",
    //cuales son los parametros para conectarnos a la base de datos
    connection: {
        host: "127.0.0.1", //host por defecto del servidor de base de datos
        port: "3306", //no es necesario en windows
        user: "root",  //usuario de workbench en config
        password: "", // al no tener password le dejamos vacio
        database: "basetest" //nombre de base de datos
    }
};

export {options};
// agregar "type": "module", en el package.json por el export