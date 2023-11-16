function calculateSquare(type) {
    const side = parseFloat(document.getElementById('sideSquare').value);

    if (!isNaN(side)) {
        let result;
        if (type === 'perimeter') {
            result = 4 * side;
        } else if (type === 'area') {
            result = side * side;
        }

        showResult(result, 'resultSquare');
    } else {
        alert('Please enter a valid value for the square side length.');
    }
}

function calculateCircle(type) {
    const radius = parseFloat(document.getElementById('radiusCircle').value);

    if (!isNaN(radius)) {
        let result;
        if (type === 'perimeter') {
            result = 2 * Math.PI * radius;
        } else if (type === 'area') {
            result = Math.PI * radius * radius;
        }

        showResult(result, 'resultCircle');
    } else {
        alert('Please enter a valid value for the circle radius.');
    }
}

function calculateTriangle(type) {
    const side1 = parseFloat(document.getElementById('side1Triangle').value);
    const side2 = parseFloat(document.getElementById('side2Triangle').value);
    const base = parseFloat(document.getElementById('baseTriangle').value);
    const height = parseFloat(document.getElementById('heightTriangle').value);

    if (!isNaN(side1) && !isNaN(side2) && !isNaN(base) && !isNaN(height)) {
        let result;
        if (type === 'perimeter') {
            result = side1 + side2 + base;
        } else if (type === 'area') {
            result = (base * height) / 2;
        }

        showResult(result, 'resultTriangle');
    } else {
        alert('Please enter valid values for the triangle sides and dimensions.');
    }
}

function showResult(result, resultId) {
    const resultDiv = document.getElementById(resultId);
    resultDiv.innerHTML = `<p>Result: ${result}</p>`;
}

function resetForm(formId) {
    document.getElementById(formId).reset();
    clearResult(formId);
}

function clearResult(resultId) {
    document.getElementById(resultId).innerHTML = '';
}