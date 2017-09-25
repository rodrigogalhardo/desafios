function verificar_GetUserMedia() {
    return !!(navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
}

if (verificar_GetUserMedia()) {} else {
    alert('O seu navegador não suporta o método getUserMedia');
}
var em_caso_de_erro = function(erro) {
    console.log('Não funciona!', erro);
};
window.navigator.webkitGetUserMedia({ video: true, audio: true }, function(midia_local) {
    var video = document.querySelector('video');
    video.src = window.webkitURL.createObjectURL(midia_local);
    video.width = 400;
    video.height = 300;
}, em_caso_de_erro);