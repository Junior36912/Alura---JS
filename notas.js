const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const _notaQuartoBi = '5';
const notaQuartoBi = 5;



const total_falso = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + _notaQuartoBi;

const total_original = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log("Total com String: ", total_falso);
console.log("Total sem String: ", total_original);


const int_notaQuartoBi = Number.parseInt('5');

const total_paseInt = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + int_notaQuartoBi;

console.log("Total com String parse Int: ", total_paseInt);

const total_media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log("Média sem ToFixed: ", total_media)

console.log("Média com ToFixed: ", total_media.toFixed(2))