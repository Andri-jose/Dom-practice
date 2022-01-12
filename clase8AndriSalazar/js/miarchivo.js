alert("Bienvenidos al concesionario online, se mostraran los nombres de los vehiculos en venta");

// crear elementos HTML 

let newcars = {modelo:"subaru",año:"1999",precio:18000};
let info= document.createElement("div");
info.innerHTML = `<h1>El unico auto en venta por ahora es el:</h1>
<p>Modelo: ${newcars.modelo}</p><p>Año: ${newcars.año}</p><p>Precio: ${newcars.precio}</p>`;

document.body.appendChild(info);


// Establecer un mensaje de bienvenida aleatorio usando un array de mensajes.


let bienvenida = ["Bienvenidos usuarios","Siempre estamos para servirle"];

let welcome = document.createElement("div")

for (const saludo of bienvenida) {
    welcome.innerHTML = saludo;
    alert(saludo);
}

// Capturar una o màs entradas por prompt() y mostrarlas en el HTML, modificando el DOM


/*let agregar = document.createElement("p");*/

const preguntas = [];

for (let index = 0; index < 1; index++) {
    preguntas.push(prompt(`Ingrese el pais donde se encuentra actualmente`));
    preguntas.push(prompt(`Ingrese su nombre`));
}

let ul = document.createElement("ul");

ul.innerHTML = `<span>Datos del cliente:</span>
<li>Pais: ${preguntas[0]}</li>
<li>Nombre: ${preguntas[1]}</li>`;

document.body.appendChild(ul);





