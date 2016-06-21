var botao = document.getElementById('calcular-medias');
botao.addEventListener("click", calculaMedias);
function calculaMedias (){
  var nossosTrs = document.getElementsByClassName("aluno");
  percorreArray(nossosTrs, function (trAtual){
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
    var nota1Td = trAtual.getElementsByClassName("info-nota01")[0];
    var nota2Td = trAtual.getElementsByClassName("info-nota02")[0];
    var mediaTd = trAtual.getElementsByClassName("info-media")[0];
    var aluno = {
      nome : nomeTd.textContent,
      nota01 : nota1Td.textContent,
      nota02 : nota2Td.textContent,
      informaMedia : function () {

           console.log("Nota 01 VAZIO!");
        
        /*if(this.nota01 != 0 && this.nota02 != ){
            var imcDoPaciente = this.peso /(this.altura * this.altura);
            return imcDoPaciente;
        }else{
            console.log("Não posso executar uma divisão por 0!");
        }*/
      }
    }
    /*var media = aluno.informaMedia();
    mediaTd.textContent = media;
    console.log(media);*/
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
