import mongoose from "mongoose";
import { studentsModel } from "./models/student.js";

//colocar el start src/index.js en el package.json y el type "module"

//insertar "mongo" en el cmd para obtener el url
const mongoUrl = "mongodb://127.0.0.1:27017/colegioDB";

//conectamos a la base de datos
mongoose.connect(mongoUrl);

const operacionesCRUD = async() =>{
    const newStudents = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7, fecha:`10/11/2022`  },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8, fecha:`10/11/2022`  },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6, fecha:`10/11/2022`  },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10, fecha:`10/11/2022`  },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9, fecha:`10/11/2022`  },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5, fecha:`10/11/2022`  },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4, fecha:`10/11/2022`  },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2, fecha:`10/11/2022`  },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9, fecha:`10/11/2022`  },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2, fecha:`10/11/2022` }
    ];
    //agregar estudiantes en la coleccion de documentos
    let result = await studentsModel.insertMany(newStudents);
    console.log(result);

    //read
    let results = await studentsModel.find();
    console.log(results)

    //read con proyecciones
    const students = await studentsModel.find({},{nombre:1,edad:1,_id:0}); //el _id:0 no va a devolver id
    console.log(students)
    //ordenar los estudiantes por orden alfabetico segun sus nombres
    let studentsOrdenar = await studentsModel.find().sort({nombre:1})
    console.log(studentsOrdenar)

    //el estudiante mas joven
    const estudianteJoven = await studentsModel.find({}, {nombre:1, edad:1, _id:0}).sort({edad:1}).limit(1);
    console.log(estudianteJoven);

    //estudiante con nota mayor a 8
    const nota8 = await studentsModel.find({nota:{$gte:8}});
    console.log(nota8);

    //el promedio total de las notas de alumnos
    //agregacion
    const promedio = await studentsModel.aggregate(
        [
            {
                $group: {
                    _id:"todos",
                    promedio:{$avg:"$nota"} //con el signo $ indicamos que nos referimos al valor de ese campo
                }
            }
        ]
    );
    console.log(promedio);

    //agregar un cammpo ingreso a todos los documentos con el valor false
    const update = await studentsModel.updateMany({},{$set:{ingreso:false}});
    console.log(update);

    // eliminar todos los que pertenezcan al curso 2A
    const deletes = await stundentsModel.deleteMany({curso:"2A"});
    console.log(deletes)


    mongoose.connection.close();
}
operacionesCRUD();

