// parâmetros/argumentos
// retorno

function exibeInfosEstudanteComParametros(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
  }
  
  console.log(exibeInfosEstudanteComParametros('Caroline', 10));
  console.log(exibeInfosEstudanteComParametros('Ana', 7));



  function exibeNomeEstudante() {
    console.log('Caroline');
}

exibeNomeEstudante();