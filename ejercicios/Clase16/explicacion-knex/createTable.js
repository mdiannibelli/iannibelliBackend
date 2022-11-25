//importar las opciones y el knex
import { options } from "./options/mySqlConfig.js";
import knex from "knex";

// crear una instancia de la base de datos
const database = knex(options);

//luego node createTable.js para conectarse a la base de datos


//crear la tabla llamada cars
database.schema.createTable("cars", table=>{
    //definimos los campos con el nombre del callback
    table.increments("id"); //id INT NOT NULL AUTO_INCREMENT PRIMARY KEY 
    table.string("nombre", 30); //posee un maximo de 30 caracteres
    table.integer("precio");
}).then(() =>{
    console.log("table cars created")
}).catch((error) => console.log(error))
.finally(() =>database.destroy()) //para cerrar la sesion de la base de datos y que no quede abierta asi seguir realizando operaciones