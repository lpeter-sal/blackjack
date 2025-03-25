import { crearCartaHTML, pedirCarta, valorCarta } from "./";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que debe alcanzar la computadora
 * @param {HTMLElement} puntosHTML elemento HTML donde se mostraran los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se mostraran las cartas de la computadora
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('El valor de puntosMinimos es requerido');
    if( !puntosHTML ) throw new Error('El valor de puntosMinimos es requerido');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="public/cartas/2C.png">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `../public/cartas/${ carta }.png`; //3H, JD
        // imgCarta.href='..'
        // imgCarta.classList.add('carta');

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}