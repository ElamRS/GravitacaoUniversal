
function calcular() {
    /* Constante da Gravitação Universal*/
    const G = 6.67 * Math.pow(10, -11);

    /* Variáveis passadas pelos usuários */
    var m = document.getElementById('m').value;
    var M = document.getElementById('M').value;
    var d = document.getElementById('d').value;

    var floatm = parseFloat(m);
    var floatM = parseFloat(M);
    var floatD = parseFloat(d);

    /* Calculo da Força Gravitacional */
    var F = (G * ((floatM*floatm)/floatD ** 2)).toFixed(8);
    /* Seleciona o elemento que irá expor a intensidade da força */
    var intensidade = document.getElementById('intensidade')
    
    intensidade.innerHTML = `Intensidade: ${F} N`;
}