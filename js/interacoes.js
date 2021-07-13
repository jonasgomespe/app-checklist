//Começa tudo aqui

const tarefasInput         = document.querySelector("#tarefasText");
const botaoCadastrarTarefa = document.querySelector("#botao-cadastrar");
var valoresTarefas         = document.querySelector("#valoresTarefas tbody");
var quantidade             = 0;

botaoCadastrarTarefa.onclick = () => {
    var ultimoValor               = localStorage.length;
    quantidade = (ultimoValor > quantidade) ? ultimoValor + 1 : quantidade;
    
    var dadosTarefa               = tarefasInput.value;
    localStorage.setItem(quantidade,dadosTarefa);
    var valoresTrs = '<tr> <td>'+localStorage.key(0)+'</td> <td>'+ localStorage.getItem(0) +'</td> <td>+</td> <td>-</td> </tr>';
    
    for(var i = 0; i < ultimoValor; i++){
       valoresTrs += '<tr> <td>'+localStorage.key(i)+'</td> <td>'+ localStorage.getItem((ultimoValor < 1) ? 0 : ultimoValor) +'</td> <td>+</td> <td>-</td> </tr>';
    }
    
    valoresTarefas.innerHTML=valoresTrs;
    quantidade++;

}




