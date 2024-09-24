// Conversão para números usando Number()
console.log("=== Conversão para Números ===");
console.log(Number("1")); // Converte a string "1" para o número 1
console.log(Number("Alura")); // Tenta converter "Alura", mas retorna NaN (Not a Number)
console.log(Number(undefined)); // Retorna NaN porque undefined não pode ser convertido
console.log(Number(null)); // Retorna 0 porque null é convertido para 0

// Number.parseInt() e Number.parseFloat()
console.log("=== Number.parseInt() e Number.parseFloat() ===");
console.log(parseInt("4")); // Converte a string "4" para o número inteiro 4
console.log(parseInt("4.5")); // Converte "4.5" para o inteiro 4 (ignora a parte decimal)
console.log(parseFloat("4")); // Converte "4" para o número 4 (mantendo o formato float)
console.log(parseFloat("4.5")); // Converte "4.5" para o número 4.5
console.log(parseFloat("4.5abc")); // Converte "4.5abc" para 4.5, ignorando o restante

// Operador unário + para coerção de tipo
console.log("=== Operador Unário + ===");
console.log(+("45")); // Converte a string "45" para o número 45
console.log(+true); // Converte o booleano true para o número 1
console.log(typeof +("45")); // Retorna 'number', pois "45" foi convertido para um número
console.log(typeof +false); // Retorna 'number', false é convertido para 0

// Comparando parseInt(), parseFloat() e Number()
console.log("=== Diferenças Entre parseInt, parseFloat e Number ===");
console.log(parseInt("4.5")); // parseInt retorna 4 (ignora a parte decimal)
console.log(parseFloat("4.5")); // parseFloat retorna 4.5 (mantém a parte decimal)
console.log(Number("4.5")); // Number também retorna 4.5

// Conversão para strings usando String()
console.log("=== Conversão para Strings ===");
console.log(String(2)); // Converte o número 2 para a string '2'
console.log(String(undefined)); // Converte undefined para a string 'undefined'
console.log(String(true)); // Converte true para a string 'true'

// Métodos para manipulação de strings
console.log("=== Métodos de Manipulação de Strings ===");
console.log('estudando JavaScript'.includes('Java')); // Verifica se 'Java' está na string, retorna true
console.log('POR FAVOR, NÃO GRITE'.toLowerCase()); // Converte para letras minúsculas
console.log('por favor, não grite'.toUpperCase()); // Converte para letras maiúsculas

// Exemplo com variáveis
console.log("=== Exemplo com variáveis ===");
const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // Retorna true porque 'Java' está na string 'texto'

const frase = 'POR FAVOR, NÃO GRITE';
console.log(frase.toLowerCase()); // Converte a variável frase para minúsculas
