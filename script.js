//Função Adicionar Nova Linha á Tabela
document.getElementById('addRowBtn').addEventListener('click', function() { //quando o usuário clicar no botão "adicionar nova linha á tabela" uma nova linha na tabela vai aparecer
    var tabela = document.getElementById('infoTable'); //"infoTable" é onde vai aparecer as informações "Nome" e "Idade"
    var novaLinha = tabela.insertRow(); //inserir nova tabela
    var celula1 = novaLinha.insertCell(0); //insere a primeira celula "nome = João"
    var celula2 = novaLinha.insertCell(1); //insere a segunda celula "idade = 25"
    celula1.textContent = 'João'; //informações que vai aparecer na tabela
    celula2.textContent = '25'; //informações que vai aparecer na tabela
});
//função atualizar conteúdo
document.getElementById('updateContentBtn').addEventListener('click', function() { //quando o usuário clicar no botão "atualizar conteúdo" a função será rodada
    var cabecalho = document.querySelector('#content h2'); //quando o uruário clicar no botão dentro da div content o h2 será mudado pra "conteúdo atualizado" 
    cabecalho.textContent = 'Conteúdo Atualizado'; //h2  vai mudar pra "conteúdo atualizado"
    var novoParagrafo = document.createElement('p'); //cria um nove elemento que muda o texto "p" dentro da div content para "Este é um novo parágrafo adicionado."
    novoParagrafo.textContent = 'Este é um novo parágrafo adicionado.'; //novo elemento criado na div content
    cabecalho.insertAdjacentElement('afterend', novoParagrafo); //novo elemento criado na div content

});

//função mudar a cor do link 
document.getElementById('myLink').addEventListener('mouseover', function() {  //quando o usuário passar o mouse sobre o link a cor vai mudar
    this.style.color = 'red';  //muda a cor do link para vermelho
});
document.getElementById('myLink').addEventListener('mouseout', function() { //quando o usuário tirar o mouse do link a cor vai voltar a normal
    this.style.color = 'blue'; //volta a cor original do link "azul"
});
//função adicionar novo bloco
document.getElementById('addDivBtn').addEventListener('click', function() { //quando o usuário clicar no botão "adicionar novo bloco" um novo bloco vai aparecer
    var novaDiv = document.createElement('div'); //cria um novo elemento "div"
    novaDiv.id = 'newDiv'; //atribui um id ao novo elemento "div"
    novaDiv.textContent = 'Este é um novo bloco de conteúdo.';  //texto que vai aparecer no novo bloco de conteúdo
    document.getElementById('content').appendChild(novaDiv); //novo bloco de conteúdo vai aparecer na div content
});
//função remover parágrafo
document.getElementById('removeParagraphBtn').addEventListener('click', function() { //quando o usuário clicar no botão "remover parágrafo" o parágrafo vai ser removido
    var paragrafo = document.querySelector('#content p'); //seleciona o parágrafo que vai ser removido
    if (paragrafo) { //se o parágrafo existir
        paragrafo.remove(); //o parágrafo vai ser removido
    }
});