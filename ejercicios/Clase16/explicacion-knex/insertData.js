//importar las opciones y el knex
import { options } from "./options/mySqlConfig.js";
import knex from "knex";

// crear una instancia de la base de datos
const database = knex(options);

const coches = [
    {nombre:"Volvo", precio:2300},
    {nombre:"Audi", precio:5300},
    {nombre:"Toyota", precio:3300},
    {nombre:"Mercedez", precio:1300},
    {nombre:"porshe", precio:4590},
    {nombre:"ford", precio:4520},
]

database("cars").insert(coches) //nombre de la tabla y despues insert para insertar los datos;
.then(() => console.log("data agregada"))
.catch((err)=> console.log(err))
.finally(() =>database.destroy());

//node insertData.js