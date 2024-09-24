function verificaPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('');
}

// Chamada da função
console.log(verificaPalindromo("radar"));  // Exemplo com "radar" (palíndromo)
console.log(verificaPalindromo("javascript"));  // Exemplo com "javascript" (não palíndromo)
