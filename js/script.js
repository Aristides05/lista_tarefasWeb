var botaoAdd = document.getElementById("botao");
var input = document.getElementById("input");
var tarefas = document.getElementById("lista_tarefas");
var marcado = false;

botaoAdd.addEventListener('click', function() {
    if (input.value != ''){
        let tarefa = document.createElement('p');
        tarefa.innerText = '- ' + input.value;
        tarefas.appendChild(tarefa);
        input.value = '';

        tarefa.addEventListener('click', function(){
            if (!marcado){
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            }else{
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })

        tarefa.addEventListener('dblclick', function(){
            tarefas.removeChild(tarefa);
        })
    }
})