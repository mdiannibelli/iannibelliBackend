import {normalize, schema, denormalize} from "normalizr";

const blogpost = {
    id: "10",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
      id: "1",
      name: "John Doe"
    },
    comments: [
        {
            id: "1",
            author: {
                id: "2",
                name: "Maria"
            },
            content: "Nice post!"
        },
        {
            id: "2",
            author: {
                id: "3",
                name: "Jose"
            },
            content: "I totally agree with you!"
        },
        {
            id: "3",
            author: {
                id: "1",
                name: "John Doe"
            },
            content: "Muchas gracias por los comentarios"
        },
    ]
};


//definir esquemas

const autorSchema = new schema.Entity("authors");

const commentsSchema = new schema.Entity("comments",
    {
        author: autorSchema
    }
)

//esquema padre o global
const postChema = new schema.Entity("posts",
    {
        author: autorSchema,
        comments: [commentsSchema],
    }
)

// normalizar
//1ero la informacion que quiero normalizar
// 2do esquema padre o global
const dataNormalizada = normalize(blogpost, postChema);
console.log("datanormalizada", JSON.stringify(dataNormalizada,null, "\t").length);
console.log("datanormal", JSON.stringify(blogpost,null, "\t").length);


//DENORMALIZACION
const normalData = denormalize(dataNormalizada.result, postChema, dataNormalizada.entities);
console.log("normalData", normalData);