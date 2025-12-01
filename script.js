document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botaoMostrar");
    const imagem = document.getElementById("minhaImagem");

    botao.addEventListener("click", function () {
        if (imagem.style.display === "none" || imagem.style.display === "") {
            imagem.style.display = "block"; // mostra a imagem 
        } else {
            imagem.style.display = "none";  // oculta a imagem
        }
    });
});