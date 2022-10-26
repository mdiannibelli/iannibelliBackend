const fs = require('fs');
class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    async save(product){
        try {
            if(fs.existsSync(this.archivo)) {
                const products = await this.getAll();
                if(products.length>0) {
                 //agregar producto adicional
                 const lastId = products [products.length-1].id+1;
                 product.id = lastId;
                 products.push(product);
                 fs.promises.writeFile(this.archivo,JSON.stringify([product],null,2));
                } else{
                 // entonces primer producto
                 product.id = 1;
                 fs.promises.writeFile(this.archivo,JSON.stringify([product],null,2));
                }
            } else {
                product.id = 1;
                fs.promises.writeFile(this.archivo,JSON.stringify([product],null,2));
            }
           
        } catch (error) {
            console.log("El producto no se guardo");
        }
    }
    async getAll() {
        try {
        const content = await fs.promises.readFile(this.archivo, "utf-8");
        /* console.log(content); */
        if(content.length>0) {
            const convert = JSON.parse(content);
            return convert;
        } else {
            return [];
        }
        } catch (error) {
            console.log("error")
        }
    }

    async geyById(id) {
        try {
            const productos = await this.getAll();
            const idProducto = productos.find(producto => producto.id === id);
            await fs.promises.writeFile(this.archivo,JSON.stringify(idProducto,null,2));
            return idProducto;
        } catch (error) {
            console.log("El producto no esta disponible")
        }
    }

    async deleteById(id) {
        try {
            const productos = await this.getAll();
            const deleteProducto = productos.filter(producto => producto.id !== id);
            return deleteProducto;
        } catch (error) {
            console.log("No se pudo borrar el producto")
        }
    }
    
    async deleteAll() {
        try {
            const deleteAllProducts = await fs.promises.writeFile(this.archivo,JSON.stringify([]));
            return deleteAllProducts;
        } catch (error) {
            console.log("No se ha podido borrar todos los productos");
        }
    }
}

const primerProducto = {
    title: "auto", 
    price: 1200, 
    thumbnail: "https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg"
};

const data = new Contenedor('archivo.txt');
const getData = async() => {
    const productos = await data.getAll();
    console.log("productos",productos)

    // agregar producto
    await data.save(primerProducto);

    // encontrarlo por su id
    const productoPorId = await data.getById(1);
    console.log(productoPorId);
}
getData();
/* const deleteData = async() => {

    deleteAll();
}
deleteData(); */