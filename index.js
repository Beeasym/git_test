const body = document.querySelector("body");

const burgerIcon = document.querySelector(".burger_icon");

const burgerMenu = document.querySelector(".menu");

let burgerOriginalColor = getComputedStyle(burgerIcon).backgroundColor;

burgerIcon.addEventListener("click", clickBurger);

burgerIcon.addEventListener("click", burgerLights);

document.addEventListener("click", clickBody);
    
//body.addEventListener("click", clickBody)

function clickBurger() {
    
    burgerMenu.classList.toggle("open");
    
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
}

function burgerLights() {
    
    if (burgerMenu.style.display === "block") {
        burgerIcon.style.backgroundColor = "#E3FFF0";
        burgerIcon.style.borderRadius = "10px";
    } else {
        burgerIcon.style.backgroundColor = burgerOriginalColor;
    }
    
}
function clickBody(e) {

    if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerMenu.classList.remove("open");
        burgerMenu.style.display = "none";
        burgerIcon.style.backgroundColor = burgerOriginalColor;
    }
}