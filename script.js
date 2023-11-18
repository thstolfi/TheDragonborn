
function removeOverlay(){
    var element = document.getElementById("explore");
    element.style.transition = "opacity 1.0s ease";
    element.style.opacity = 0;
    setTimeout(() => {
        element.remove();
    }, 1000);
}