const numero = parseFloat(prompt("Digite un numero del 1 al 15"));

switch (numero) {
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
        console.log("El numero",numero,"ES primo");
        break;

    default:
        console.log("El numero",numero,"No es primo");
        break;
}