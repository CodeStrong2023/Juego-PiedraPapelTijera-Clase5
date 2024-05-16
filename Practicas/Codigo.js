//Funcion que retorna random
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function opcion(jugada){
    let resultado = ''
    if(jugada == 1){
        resultado = 'Piedra'
    }else if(jugada == 2){
        resultado = 'Papel'
    }else if(jugada == 3){
        resultado = 'tijera'
    }else{
        resultado = 'Mal elegido'
    }
    return resultado
} 
//Se declara la variable jugador 
let jugador = 0
let triunfos = 0
let perdidas = 0
let pc = 0

while (triunfos < 3 && perdidas < 3){
    //1 = Piedra - 2 = Papel - 3 = Tijera
    pc = random(1,3)
    jugador = prompt('Elige PIEDRA: 1   PAPEL: 2   TIJERA: 3') 

    //mostramos la eleccion de cada uno
    alert('PC Elige '+opcion(pc))
    alert('Jugador Elige '+opcion(jugador))

    //Condicional para saber quien gana
    if(pc==jugador){
        alert('Empate')
    }else if(jugador == 1 && pc == 3){
        alert('Ganaste')
        triunfos++
    }else if(jugador == 2 && pc == 1){
        alert('Ganaste')
        triunfos++
    }else if(jugador == 3 && pc == 2){
        alert('Ganaste')
        triunfos++
    }else{
        alert('PERDISTE')
        perdidas++
    }
}
alert('Ganaste: '+triunfos+' vences. Perdiste '+perdidas+'veces')

function reiniciar_juego() {
    location.reload();
}