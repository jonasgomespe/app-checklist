//Começa tudo aqui

const tarefasInput         = document.querySelector("#tarefasText");
const botaoCadastrarTarefa = document.querySelector("#botao-cadastrar");
const divBarraRolagem      = document.querySelector(".container-lista div");
var valoresTarefas         = document.querySelector("#valoresTarefas tbody");
var quantidade             = 0;
var valoresTrs             = "";
var ultimoValor            = localStorage.length;

function scrollMove(){
    divBarraRolagem.scrollTo(0,divBarraRolagem.querySelector("table").clientHeight);
}

if(localStorage.getItem(0)){
    for( var i = 0; i < ultimoValor; i++ ){
        valoresTarefas.innerHTML += '<tr> <td>'+ i +'</td> <td>'+ localStorage.getItem(i) +'</td> <td>+</td> <td>-</td> </tr>';    
    }
    quantidade = ultimoValor;
    scrollMove();
}

botaoCadastrarTarefa.onclick = () => {
    var dadosTarefa               = tarefasInput.value;
    localStorage.setItem(quantidade,dadosTarefa);
    
    valoresTarefas.innerHTML += '<tr> <td>'+ quantidade +'</td> <td>'+ localStorage.getItem(quantidade) +'</td> <td>+</td> <td>-</td> </tr>';
    quantidade++;
    scrollMove();
}



