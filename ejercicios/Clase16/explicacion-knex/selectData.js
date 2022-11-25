//importar las opciones y el knex
import { options } from "./options/mySqlConfig.js";
import knex from "knex";

// crear una instancia de la base de datos
const database = knex(options);

//el "*" se refiere a todos los productos de cars
database.from("cars").select("*") //leemos los datos registrados en la tabla de cars
.then((data) =>{
    console.log((data));
    const results = data.map(elemento =>({...elemento})) //devolvera solo los objetos de la data
    console.log(results);
})
.catch((err)=> console.log(err))
.finally(() =>database.destroy());



//FILTRAR PRODUCTOS:

/* database.from("cars").select("*").where("price", ">", 3000) //con el where filtramos productos con precio mayores a 3000
.then((data) =>{
    console.log((data));
    const results = data.map(elemento =>({...elemento})) //devolvera solo los objetos de la data
    console.log(results);
})
.catch((err)=> console.log(err))
.finally(() =>database.destroy()); */