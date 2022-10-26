const serverExpress = require("express");
const server = serverExpress();
server.listen(8080, () => console.log("sever running in port 8080"));

const fs = require('fs');
class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }
    async getById(id) {
        try {
            const productos = await fs.promises.readFile(this.archivo, "utf-8");
            const productosRes = await JSON.parse(productos);
            const findProducto = productosRes.find(producto => producto.id === id);
            return findProducto;
        } catch (error) {
            console.log("El producto no esta disponible")
        }
    }
    async getAll() {
        try {
        const content = await fs.promises.readFile(this.archivo, "utf-8");
        const contentJson = await JSON.parse(content);
        /* console.log(content); */
        return contentJson;
        } catch (error) {
            console.log("error al obtener los productos")
        }
    }
};

server.get("/productos", async (request, response)=>{
    const productos = await data.getAll();
    response.send(productos)
})

server.get("/productoRandom", async (request, response)=>{
    const productos = await data.getAll();
    const randomProducto = random(0,productos.length-1);
    /* const randomProducto = random(productos.length); */
    const producto = productos[randomProducto];
    response.send(producto);
})

const data = new Contenedor('productos.txt');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    /* return Math.floor(Math.random() * max) */
}
