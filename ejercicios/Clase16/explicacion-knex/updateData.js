//importar las opciones y el knex
import { options } from "./options/mySqlConfig.js";
import knex from "knex";

// crear una instancia de la base de datos
const database = knex(options);

//actualizamos en la database "cars"  en el id = 2
database.from("cars").where("id", "=", 2).update({
    price: 6000
})
.then(() => console.log("data actualizada"))
.catch((err)=> console.log(err))
.finally(() =>database.destroy());