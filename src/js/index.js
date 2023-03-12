/*
    OBJETIVO - QUANDO CLIARMOS NO BOTÃO TEMOS QUE MOSTRAR A IMAGEM DE FUNDO CORRESPONDENTE.

    

    

    

    

    

    
    
*/

// -- PASO 1 DA UM JEITO DE PEGARO ELEMENTO HTML DOS BOTÕES
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//--PASSO 2 - DAR UMJEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO. 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        
        desativarBotaoSelecinado();

        
        selecionarBotaoCarrosel(botao);
        
         
        esconderImagemAtiva();

        
        mostrarImagemDeFundo(indice);







    })
})




function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecinado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

