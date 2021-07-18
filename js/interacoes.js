//Começa tudo aqui

const tarefasInput         = document.querySelector("#tarefasText");
const botaoCadastrarTarefa = document.querySelector("#botao-cadastrar");
var valoresTarefas         = document.querySelector("#valoresTarefas tbody");
var quantidade             = 0;
var valoresTrs             = "";
var ultimoValor            = localStorage.length;

if(localStorage.getItem){
    for( var i = 0; i < ultimoValor; i++ ){
        valoresTarefas.innerHTML += '<tr> <td>'+ i +'</td> <td>'+ localStorage.getItem(i) +'</td> <td>+</td> <td>-</td> </tr>';    
    }
    quantidade = ultimoValor;
}

botaoCadastrarTarefa.onclick = () => {
    //quantidade = (ultimoValor > quantidade) ? ultimoValor + 1 : quantidade;
    var dadosTarefa               = tarefasInput.value;
    localStorage.setItem(quantidade,dadosTarefa);
    //valoresTrs += '<tr> <td>'+localStorage.key(quantidade)+'</td> <td>'+ localStorage.getItem(quantidade) +'</td> <td>+</td> <td>-</td> </tr>';
    
    valoresTarefas.innerHTML += '<tr> <td>'+ quantidade +'</td> <td>'+ localStorage.getItem(quantidade) +'</td> <td>+</td> <td>-</td> </tr>';
    quantidade++;
}
//console.log(valoresTrs);  




