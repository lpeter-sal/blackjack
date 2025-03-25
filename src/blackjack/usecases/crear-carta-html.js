
/**
 * 
 * @param {string} carta
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {

    if ( !carta ) throw new Error('El valor de carta es requerido');


    const imgCarta = document.createElement('img');
    imgCarta.src = `public/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
