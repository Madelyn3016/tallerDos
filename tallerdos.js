// Parte 1: Variables. Ejercicio 1

let nombre = "Madelyn";

let edad = 18;

let gustoProgramacion = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Me gusta la programacion:", gustoProgramacion);

// Parte 1: Diferencia entre var, let y const. Ejercicio 2

let ciudad = "Neiva";

const pais = "Canada";

var color = "Morado";

console.log("Ciudad:", ciudad);
console.log("Pais:", pais);
console.log("Color:", color);

// Cambio en let
ciudad = "Cali";
console.log("Ciudad:", ciudad);

//Cambio en const
//pais = "Colombia";
// Error ya que con const es un valor fijo

//Cambio var

{
    color = "Azul";
}

console.log("Color nuevo:", color)

//Diferencia con let: con let permite cambiar el valor de la variable, con const no se puede ya que es un valor fijo, el valor permanece igual. 

//Parte 2: Condicionales

let Edad = 16;

if (Edad >= 18) {
    console.log("Eres mayor de edad")

}else{
    console.log("Eres menor de edad")
};

//Parte 3: Switch

let dia = "Martes";

switch (dia) {
    case "Lunes":
        console.log("Es lunes, inicio de semana");
    break;
    case "Viernes":
        console.log("Es viernes, casi fin de semana");
    break;
    case "Sabado":
        console.log("Es sabado, fin de semana");
    break;
    case "Domingo":
        console.log("Es domingo, fin de semana");
    default:
        console.log("Es un día entre semana");
    break;
};

//Parte 4: 