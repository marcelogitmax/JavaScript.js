/*  preço etanol =5,79
    preço gasolina = 6.00
    tipo de combustivel
    gasto médio
    distancia em km
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10
const distanciaEmKm = 100;
const combustivel = 'Gasolina';



const litrosConsumidos = distanciaEmKm/kmPorLitros




if (combustivel === "Etanol") {
    const valorGasto = (precoEtanol*litrosConsumidos);
    console.log(valorGasto.toFixed(2));
}

else {
    const valorGasto = (precoGasolina*litrosConsumidos);
    console.log(valorGasto.toFixed(2));  
}   



