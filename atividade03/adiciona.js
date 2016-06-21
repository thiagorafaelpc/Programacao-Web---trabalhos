var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {
  event.preventDefault();
  var campoNome = document.querySelector("#campo-nome");
  var campoNota1 = document.querySelector("#campo-nota1");
  var campoNota2 = document.querySelector("#campo-nota2");
  var novoAluno = "<tr class='aluno'>"+
    "<td class='info-nome'>"+campoNome.value+"</td>"+
    "<td class='info-nota01'>"+campoNota1.value+"</td>"+
    "<td class='info-nota02'>"+campoNota2.value+"</td>"+
    "<td class='info-media'></td>"+
    "<td class='info-situacao'></td>"+
  "</tr>"
  var todosAlunos = document.querySelector("table");
  todosAlunos.innerHTML +=novoAluno;
  campoNome.value="";
  campoNota1.value="";
  campoNota2.value="";
});
