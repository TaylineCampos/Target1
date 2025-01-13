const prompt = require('prompt-sync')(); 

function verificaFibonacci(numero) {
    let a = 0, b = 1; // Início da sequência de Fibonacci

    // Verifica os primeiros números diretamente
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Gera a sequência até encontrar ou ultrapassar o número
    while (b < numero) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Verifica se o número pertence à sequência
    if (b === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Solicita o número ao usuário
const numero = parseInt(prompt("Digite um número: "), 10);

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    console.log(verificaFibonacci(numero));
}