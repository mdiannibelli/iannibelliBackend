class usuario {
    constructor(nombre, apellido, libros= [{}], mascotas= [] ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
}

function getFullName() {
    return console.log(`Su usuario es ${this.nombre} ${this.apellido}`)
}


function addMascota(mascotas) {
    this.mascotas.push(mascotas)
}

function countMascotas() {
    return mascotas.parseInt(`Tiene ${this.mascotas.length} mascotas`)
}

function addBook(nombre, autor) {
    let objeto = {nombre: nombre, autor: autor};
    this.libros.push(objeto);
}

function getBookNames() {
    let arraylibros = this.libros.map((libros) => libros.nombre);
    return arraylibros;
}

const user = new usuario('Juan', 'Dominguez', [{nombre: "Harry Potter", autor: "J.K Rowling"}, {nombre: "Animales Fantasticos", autor: "J.K Rowling"}], ["Gato", "Perro", "Araña"]);

user.getFullName();
user.addMascota("Cobra");
user.countMascotas(mascotas);
user.addBook("El Principito", "Antoine de Saint-Exupéry");
user. getBookNames();