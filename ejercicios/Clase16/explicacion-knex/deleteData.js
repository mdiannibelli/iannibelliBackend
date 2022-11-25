//importar las opciones y el knex
import { options } from "./options/mySqlConfig.js";
import knex from "knex";

// crear una instancia de la base de datos
const database = knex(options);


//eliminamos el producto con id 6
database.from("cars").where("id", 6).del()
.then(() => console.log("data borrada"))
.catch((err)=> console.log(err))
.finally(() =>database.destroy());