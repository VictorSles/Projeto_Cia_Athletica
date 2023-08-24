let abrir = document.getElementById("spanMenu");
let fechar = document.getElementById("spanClose");

function pressionar() {
    if (abrir.style.display == "block") {
        fechar.style.display = "none";
    } else {
        fechar.style.display = "block";
        abrir.style.display = "none";
    };
};
