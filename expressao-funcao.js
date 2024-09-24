const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
}
  
console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));



console.log(exibeInfosEstudante('Caroline', 10));
console.log(exibeInfosEstudante('Ana', 7));

function exibeInfosEstudante(nome, nota) {
  return `o nome é ${nome} e a nota é ${nota}`;
}