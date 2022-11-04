console.log("funcionando");

//generar template
Handlebars.compile(`
    <ul>
        <li>{{nombre}}</li>
        <li>{{apellido}}</li>
        <li>{{edad}}</li>
        <li>{{correo}}</li>
    </ul>
`)

//generar html utilizando el template y un objeto de datos
const html = template({
    nombre:"Pablo",
    apellido:"Gonzales",
    edad: 26,
    correo:"asd@gmaill.com"
});
console.log(html);

document.getElementById("contenedor").innerHTML = html;