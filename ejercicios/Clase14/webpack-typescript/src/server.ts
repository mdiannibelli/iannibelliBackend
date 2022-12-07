import express from "express";
const app = express();
import { getTime }  from "./utils/utils";
import {Person} from "./Person";

const fredy = new Person("fredy", "chaparro");

app.listen(8080, () =>{
    console.log("server funcionando en puerto 8080")
})

app.get("/", (req,res)=>{
    res.send({
        time: getTime(),
        fullname: fredy.getFullName()
})
})