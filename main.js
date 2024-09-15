function updateSquare() {
    const square = document.getElementById('square');
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    if (width > 0 && height > 0) {
        square.style.width = width + '%';
        square.style.height = height + '%';
        square.style.backgroundColor = document.getElementById('color').value;
        square.style.borderRadius = document.getElementById('borderRadius').value + 'px';
    } 
}

function resetSquare() {
    const square = document.getElementById('square');
    square.style.width = '30vh';
    square.style.height = '40vh';
    square.style.backgroundColor = '#3498db';
    square.style.borderRadius = '2px';
    document.getElementById('width').value = '30';
    document.getElementById('height').value = '40';
    document.getElementById('color').value = '#3498db';
    document.getElementById('borderRadius').value = '0';
}