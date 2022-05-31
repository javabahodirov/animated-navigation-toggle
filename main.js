let topLine = document.getElementById("toggle-top-line");
let midLine = document.getElementById("toggle-middle-line");
let bottomLine = document.getElementById("toggle-bottom-line");
let isActive = false;

function toggle() {
    if (!isActive) {
        //if button isn't active 
        midLine.style.left = "-120%";
        midLine.style.opacity = "0";
        topLine.style.top = "40%";
        bottomLine.style.top = "40%";
        topLine.style.transform = "rotate(45deg)";
        bottomLine.style.transform = "rotate(-45deg)";

        isActive = true;
    } else {
        //if button is active
        midLine.style.left = "0";
        midLine.style.opacity = "1";
        topLine.style.top = "0%";
        bottomLine.style.top = "80%";
        topLine.style.transform = "rotate(0deg)";
        bottomLine.style.transform = "rotate(0deg)";

        isActive = false;
    }

}