const express = require('express');
const port = 8080;
const app = express();
const Contenedor = require('./public/Container')

const routerExpress = express.Router();
const data = new Contenedor('productos.txt');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, ()=>{
    console.log(`Server running in port ${port}`);
})

let product = {id: "1",tittle: "Papel",price: "20",thumbnail: "papel.jpg"};

let error = {
    error: false,
    code: 200,
    msg: ''
}

/* class Productos {
    constructor(tittle, price, thumbnail, id) {
        this.tittle = tittle;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }
} */
routerExpress.get("/", async (req, res)=>{
    const products = await container.getAll()
    res.json({
        products
    })
});

routerExpress.get('/:id', async (req,res) =>{
    const idp = parseInt(req.params.id);
    const productId = await data.getById(id);
    if(isNaN(idp)) {
        error = {
            error: true,
            code: 502,
            msg: 'The parameter entered is not a number'
        }
        res.json({
            error
        })
    } else {
        error = {
            error: true,
            code: 502,
            msg: 'The parameter is out of range'
        }
        productId == undefined ? res.json({error}) : res.json({productId});
    }
});

routerExpress.post('/', async(req,res) =>{
    let product = req.body;
    await data.save(product);

    res.json({
        product
    })

})

routerExpress.put(':/id', async(req,res) =>{
   let { title, price} = req.body;
   const id = parseint(req.params.id);

   let product = await data.getById(id);
   product["title"] = title;
   product["price"] = price;

   const newProduct = {
    "title" : title,
    "price" : price,
    ...product
   }

   await data.deleteById(product.id);
   /* await data.overwrite(newProduct) */

   if(isNan(id)) {
    error = {
        error: true,
        code: 502,
        msg: 'The parameter is out of range'
    }
    res.json({error})
} else {
    product == undefined ? res.json({error}) : res.json({newProduct});
}
})

routerExpress.delete('/:id', async(req,res) => {
    const idProduct = parseInt(req.params.id);
    const product = await data.deleteById(idProduct);

    if(isNaN(idProduct)){
        error = {
            error: true,
            code: 502,
            msg: 'The parameter entered is not a number'
        }
        res.json({error})
    } else {
        product == undefined && res.json({msg: "Product has been deleted"});
    }

})



app.use("/api/productos", routerExpress);