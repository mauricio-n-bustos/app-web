var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === piedra && cpu === tijera){
            console.log("el usuario GANO con "+ piedra)
        }else if(user === papel && cpu === piedra){
            console.log( "el usuario GANO con " + papel)
        }else if(user === tijera && cpu === papel){
            console.log("el usuario GANO con " + tijera)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
}

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";


function miJuego(user, cpu) {
    switch(user !== cpu) {
        case user === piedra && cpu === tijera:
            console.log("gana user");
            break;
        case user === piedra && cpu === papel:
            console.log("gana CPU");
            break;
        case user === tijera && cpu === piedra:
            console.log("gana CPU");
            break;
        case user === tijera && cpu === papel:
            console.log("gana user");
            break;
        case user === papel && cpu === tijera:
            console.log("gana CPU");
            break;
        case user === papel && cpu === piedra:
            console.log("gana user");
            break;
        default:
            console.log("Es empate");

    }
}