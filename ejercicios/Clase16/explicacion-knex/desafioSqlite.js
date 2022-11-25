import {optionsSqlite} from "./options/sqLiteConfig.js";
import knex from "knex";

const database = knex(optionsSqlite);
const articulosArray = [];

const operaciones = async() =>{
    try {
        //2- validamos si la tabla ya existe
        let articulosExist = await database.schema.hasTable("articulos");
        if(articulosExist) {
            await database.schema.dropTable("articulos")
        } else{
            //1-creamos tabla
            await database.schema.createTable("articulos", table=>{
                table.increments("id");
                table.string("nombre",15).nullable(false); //no puede recibir numeros por eso el nullable
                table.string("codigo",10).nullable(false); //no puede recibir numeros por eso el nullable
                table.float("precio");
                table.integer("stock");
        
            })

            // insertar articulos
            await database("articulos").insert(articulosArray);
            console.log("articulos agregados")

            //listar articulos
            const results = await database.from("articulos").select("*");
            console.log(results);

            //borrar articulos con id=3
            const response = await database.from("articulos").where("id", 3).del();
            console.log(response, "articulo borrado");


            //actualizar
            const update = await database.from("articulos").where("id",2).update({stock:0});
            console.log(update, "articulo actualizado")

            database.destroy();

        }
        
    } catch (error) {
        console.log("error", error)
    }
}
operaciones();