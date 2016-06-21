var botao = document.getElementById('calcular-imc');
botao.addEventListener("click", calculaTodosImc);
function calculaTodosImc (){
  var nossosTrs = document.getElementsByClassName("paciente");
  percorreArray(nossosTrs, function (trAtual){
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
    var pesoTd = trAtual.getElementsByClassName("info-peso")[0];
    var alturaTd = trAtual.getElementsByClassName("info-altura")[0];
    var imcTd = trAtual.getElementsByClassName("info-imc")[0];
    var paciente = {
      nome : nomeTd.textContent,
      peso : pesoTd.textContent,
      altura : alturaTd.textContent,
      pegaImc : function () {
        if(this.altura != 0){
            var imcDoPaciente = this.peso /(this.altura * this.altura);
            return imcDoPaciente;
        }else{
            console.log("Não posso executar uma divisão por 0!");
        }
      }
    }
    var imc = paciente.pegaImc();
    imcTd.textContent = imc;
    console.log(imc);
  })
}
/*
if(pessoa.altura != 0){
    var imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    console.log(imc);
    var tdDoImc = document.getElementById("imc-1");
    tdDoImc.textContent = imc;
}else{
    console("Não posso executar uma divisão por 0!");
}*/
