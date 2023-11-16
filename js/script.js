function calcularCuadrado(tipo) {
    const lado = parseFloat(document.getElementById('ladoCuadrado').value);

    if (!isNaN(lado)) {
        let resultado;
        if (tipo === 'perimetro') {
            resultado = 4 * lado;
        } else if (tipo === 'area') {
            resultado = lado * lado;
        }

        mostrarResultado(resultado);
    } else {
        alert('Ingresa un valor válido para el lado del cuadrado.');
    }
}

function calcularCirculo(tipo) {
    const radio = parseFloat(document.getElementById('radioCirculo').value);

    if (!isNaN(radio)) {
        let resultado;
        if (tipo === 'perimetro') {
            resultado = 2 * Math.PI * radio;
        } else if (tipo === 'area') {
            resultado = Math.PI * radio * radio;
        }

        mostrarResultado(resultado);
    } else {
        alert('Ingresa un valor válido para el radio del círculo.');
    }
}

function calcularTriangulo(tipo) {
    const lado1 = parseFloat(document.getElementById('lado1Triangulo').value);
    const lado2 = parseFloat(document.getElementById('lado2Triangulo').value);
    const base = parseFloat(document.getElementById('baseTriangulo').value);
    const altura = parseFloat(document.getElementById('alturaTriangulo').value);

    if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(base) && !isNaN(altura)) {
        let resultado;
        if (tipo === 'perimetro') {
            resultado = lado1 + lado2 + base;
        } else if (tipo === 'area') {
            resultado = (base * altura) / 2;
        }

        mostrarResultado(resultado);
    } else {
        alert('Ingresa valores válidos para los lados y dimensiones del triángulo.');
    }
}

function mostrarResultado(resultado) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>El resultado es: ${resultado}</p>`;
}

function resetForm(formId) {
    document.getElementById(formId).reset();
    document.getElementById('resultados').innerHTML = '';
}