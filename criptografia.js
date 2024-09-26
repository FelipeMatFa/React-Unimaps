const gerarMatrizChave = () => {
    const matriz = [
        [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
        [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1]
    ];
    
    const determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    return determinante !== 0 ? matriz : gerarMatrizChave(); // Tenta novamente se não for invertível
};

const chaveMatriz = gerarMatrizChave();

function multiplicarMatrizes(a, b) {
    const resultado = [];
    for (let i = 0; i < a.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < a[0].length; k++) {
                resultado[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return resultado;
}

function cifrarTexto(texto) {
    const textoNumerico = texto.split('').map(char => char.charCodeAt(0));
    const matrizTexto = [];

    for (let i = 0; i < textoNumerico.length; i += 2) {
        matrizTexto.push(textoNumerico.slice(i, i + 2));
    }

    const textoCifrado = matrizTexto.map(par => {
        const vetor = par.length === 2 ? par : [par[0], 0]; // Preencher com 0 se ímpar
        return multiplicarMatrizes([vetor], chaveMatriz)[0];
    });

    return textoCifrado.flat().map(num => String.fromCharCode(num)).join('');
}

function calcularMatrizInversa(matriz) {
    const determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    if (determinante === 0) throw new Error('A matriz não é invertível.');

    return [
        [matriz[1][1] / determinante, -matriz[0][1] / determinante],
        [-matriz[1][0] / determinante, matriz[0][0] / determinante]
    ];
}

function decifrarTexto(textoCifrado) {
    const chaveMatrizInversa = calcularMatrizInversa(chaveMatriz);
    const textoNumericoCifrado = textoCifrado.split('').map(char => char.charCodeAt(0));
    const matrizTextoCifrado = [];

    for (let i = 0; i < textoNumericoCifrado.length; i += 2) {
        matrizTextoCifrado.push(textoNumericoCifrado.slice(i, i + 2));
    }

    const textoDecifrado = matrizTextoCifrado.map(par => {
        const vetor = par.length === 2 ? par : [par[0], 0]; // Preencher com 0 se ímpar
        return multiplicarMatrizes([vetor], chaveMatrizInversa)[0];
    });

    return textoDecifrado.flat().map(num => String.fromCharCode(num)).join('').replace(/\0/g, '');
}

// Exemplo de uso
const mensagem = "felipe2023@gmail.com"; // Insira sua mensagem aqui
const mensagemCifrada = cifrarTexto(mensagem);
console.log('Mensagem Cifrada:', mensagemCifrada);

const mensagemDecifrada = decifrarTexto(mensagemCifrada);
console.log('Mensagem Decifrada:', mensagemDecifrada);