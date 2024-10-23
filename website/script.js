const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 4000);
    }
}
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function hideElement() {
    document.getElementById("MenuBox").style.display = "none";
}


function showElement() {
    document.getElementById("MenuBox").style.display = "block";

}


function codeAddress() {
    hideElement();
}
window.onload = codeAddress;



function theDeterminator() {
    if (document.getElementById("MenuBox").style.display == "none") {
        showElement();
    }
    else {
        hideElement();
    }
}

