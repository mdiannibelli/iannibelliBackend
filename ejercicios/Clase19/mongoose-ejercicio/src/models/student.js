import mongoose from "mongoose";

//definimos la coleccion donde vamos a almacenar los documentos
const studentCollection = "estudiantes";

// definir el esquema de cada uno de los documentos
const studentSchema = new mongoose.Schema({
    //propiedades del documento
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique:true
    },
    curso:{
        type:String,
        required:true
    },
    nota:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    },
    ingreso:Boolean

});

//creamos el modelo para interactuar con la coleccion que recibe 2 parametros, la coleccion y el schema
export const studentsModel = mongoose.model(studentCollection, studentSchema);
