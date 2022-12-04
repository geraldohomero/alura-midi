/* function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();

}
*/

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {           //&& = and
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0

//enquanto "for"
//while (contador < 9) número de teclas
//while (contador < listaDeTeclas.length) {}            contador++ é igual a contador = contador + 1
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;    //template string  
    //console.log(idAudio);
    
    tecla.onclick = function () {
        tocaSom (idAudio);
    }
    //console.log(contador);

    tecla.onkeydown = function (evento) {
        //console.log (evento.code)
        if (evento.code === 'Space' || evento.code === 'Enter') { //operadores == e ===  ex.: 1 == "1" (true) | 1 === "1" (false)        or(ou) igual ||
            tecla.classList.add('ativa');  
        }

        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa');
    }
}
