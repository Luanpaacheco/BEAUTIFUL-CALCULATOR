let numero1;
let numero2;
let primeira = true;
let operador;
let historico = "";

function colocar(N) {
    let resultadoElement = document.getElementById("resultado");
    let historicoElement = document.getElementById("historico");
        let numero = resultadoElement.innerHTML;
        resultadoElement.innerHTML = numero + N;
        historico = historico + N;
        historicoElement.innerHTML = historico;
    
}

function apagarTudo() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("historico").innerHTML = "";
    primeira = true;
    numero1 = 0;
    numero2 = 0;
    historico = "";
}

// function apagarCE() {
//     document.getElementById("resultado").innerHTML = "";
    
// }

function apagar() {
    document.getElementById("resultado").innerHTML = "";
}

function opera(operado) {
    let resultadoElement = document.getElementById("resultado");
    let numero = resultadoElement.innerHTML;

    if (operado === "@") {
        // Inverter o sinal do último número digitado
        let partes = historico.split(/[\+\-\*\/\%\s]/);
        let ultimoNumero = partes[partes.length - 1];
        if (ultimoNumero) {
            let valorInvertido = Number(ultimoNumero) * -1;
            resultadoElement.innerHTML = valorInvertido;
            historico = historico.slice(0, historico.lastIndexOf(ultimoNumero)) + valorInvertido;
            document.getElementById("historico").innerHTML = historico;
        }
        return;
    }

    if (primeira) {
        operador = operado;
        numero1 = Number(resultadoElement.innerHTML);
        apagar();
        historico += " " + operador + " ";
        if(operado=='%'){
            operador=operado;
            mostrar();
        }
    } else {
        switch (operador) {
            case '+':
                numero1 += Number(resultadoElement.innerHTML);
                break;
            case '*':
                numero1 *= Number(resultadoElement.innerHTML);
                break;
            case '-':
                numero1 -= Number(resultadoElement.innerHTML);
                break;
            case '/':
                numero1 /= Number(resultadoElement.innerHTML);
                break;
            case '%':
                operador=operado;
                mostrar();
                break;
                
            default:
                break;
        }
        operador = operado;
        apagar();
        historico += " " + operador + " ";
    }
    primeira = false;
}

function mostrar() {
    numero2 = Number(document.getElementById("resultado").innerHTML);
    let resultado;
    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case '%':
            resultado = numero1 / 100;
            break;
        default:
            break;
    }
    document.getElementById("resultado").innerHTML = resultado;
    historico += " = " + resultado;
    document.getElementById("historico").innerHTML = historico;
    primeira = true;
}
