const body = document.body;

const heading = document.querySelector('h1');

let originalColor = getComputedStyle(body).backgroundColor;

heading.addEventListener('click', );

function changeBodyColor() {
    if (body.style.backgroundColor === originalColor) {
        body.style.backgroundColor = 'green'
    } else {
        body.style.backgroundColor = originalColor
    }
}