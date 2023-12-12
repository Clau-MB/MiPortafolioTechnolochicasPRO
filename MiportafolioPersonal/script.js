const nombre = "Claudia";
let edad = 18;

// tipo de cajón
// {}
const scoobyDoo = {
    raza: "Gran danés",
    noPatas: 4,
    puedeHablar: true,
    color: "café con manchas"
}

// no funciona scoobyDoo = algo
scoobyDoo.color = "café con manchas negras"

// alert('Hola mundo')
console.log("hola mundo", nombre)
// document.write("hola mundo")


let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Claudia Mendoza')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Desarrolladora Jr')
    .pauseFor(2500)
    .deleteChars(14)
    .start();