const burgerButton = document.querySelector(".burger");

const burgerItems = document.querySelector(".menu");

burgerButton.addEventListener("click", clickBurger)

function clickBurger() {
    
    burgerItems.classList.toggle("open");
    
    if (burgerItems.style.display === "block") {
        burgerItems.style.display = "none";
    } else {
        burgerItems.style.display = "block";
    }
}