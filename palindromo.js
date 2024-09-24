function verificaPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('');
}

// Chamada da função
console.log(verificaPalindromo("radar"));  
console.log(verificaPalindromo("javascript"));  
console.log(verificaPalindromo("colloc"));  
