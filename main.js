function updateSquare() {
    const square = document.getElementById('square');
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    if (width > 0 && height > 0) {
        square.style.width = width + 'px';
        square.style.height = height + 'px';
        square.style.backgroundColor = document.getElementById('color').value;
        square.style.borderRadius = document.getElementById('borderRadius').value + 'px';
    } 
}

function resetSquare() {
    const square = document.getElementById('square');
    square.style.width = "30vw";
    square.style.height = "40vh"; 
    square.style.backgroundColor = '#3498db';
    square.style.borderRadius = '10px';
    square.style.border = '2px solid #2980b9';
    document.getElementById('width').value = '200';
    document.getElementById('height').value = '200';
    document.getElementById('color').value = '#3498db';
    document.getElementById('borderRadius').value = '10';
}