function maiorEntreTres(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Chamada da função
console.log(maiorEntreTres(10, 25, 15));
console.log(maiorEntreTres(100, 25, 1));