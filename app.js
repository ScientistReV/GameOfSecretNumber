let listaDeNumerosSorteados = [];
let quantidade = 10
let numberSecret = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "Game of secret number" );
    exibirTextoNaTela('p', "Escolha o número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){
    let shoot = document.querySelector('input').value;
        if (shoot == numberSecret){
            exibirTextoNaTela('h1', 'acertou');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descrobriu o número secreto ${numberSecret} com ${tentativas} ${palavraTentativa}!`
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if ( shoot > numberSecret){
                exibirTextoNaTela('p', 'O número secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * quantidade + 1);
    let quantidadeDeNumerosEscolhido = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosEscolhido == quantidade){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    shoot = document.querySelector('input');
    shoot.value = '';
}

function reiniciarJogo(){
    numberSecret = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

