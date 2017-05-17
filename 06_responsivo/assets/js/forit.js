var vetor = [1,2,3];

function imprimirItemVetor(item) {

    // vetor.for (var i = 0; i < array.length; i++) {
    //     array[i];

    vetor.forEach(function(item)){
        console.log(item);
    });



}


function executar(fn, argumento1) {
    fn(argumento1);

    executar(alert())
}

var pecasJogador1 = ['rei', 'rainha', 'torre'];
var pecasJogador2 = ['rei', 'cavalo', 'peao'];

function imprimirItemVetor(item) {
    console.log(item);

    pecasJogador1.forEach(imprimirItemVetor());
    pecasJogador2.forEach(imprimirItemVetor());
}

function calcularidade() {



}

var pessoa = {
    nome: "joao",
    anoNasc: 1993,
    idade: function () {
        return 2017 - this.anoNasc;

    }


    }
}
