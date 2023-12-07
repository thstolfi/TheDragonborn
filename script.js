
function removeOverlay(){
    var element = document.getElementById("explore");
    element.style.transition = "opacity 1.0s ease";
    element.style.opacity = 0;
    setTimeout(() => {
        element.remove();
    }, 1000);
}

function changeColor(imgId, txtId){
    var imagem = document.getElementById(imgId)
    var txt = document.getElementById(txtId)

    txt.style.color = '#fcfcfc'
    imagem.src = `assets/${imgId}active.png`
}