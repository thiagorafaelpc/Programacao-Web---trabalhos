function percorreArray(trsAlunos, comportamento){
  for(var posicaoTrAtual = 0;posicaoTrAtual <=trsAlunos.length-1; posicaoTrAtual++){
    var trAtual=nossosTrs[posicaoTrAtual];
    comportamento(trAtual);
  }
}
