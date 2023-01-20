let texto = document.querySelector(".txta-encrp-desen");
let textoADevolver = document.querySelector(".btn-copiar");
let txtaDevoolucion = document.querySelector(".txta-devolucion");
let divQueAparece = document.querySelector(".div-txta-devolucion-btn");
let divImagenes = document.querySelector(".div-img-h2-p")

function encriptar() {

    textoADevolver = texto.value.replace(/e/gm, "enter");
    textoADevolver = textoADevolver.replace(/i/gm, "imes");
    textoADevolver = textoADevolver.replace(/o/gm, "ober");
    textoADevolver = textoADevolver.replace(/u/gm, "ufat");
    textoADevolver = textoADevolver.replace(/a/gm, "ai");

    if (texto.value != "" & texto.value != " ") {
        txtaDevoolucion.value = textoADevolver;

        divImagenes.style.display = "none";
        divQueAparece.style.display = "block";
        
    } else {
        alert("No ingreso ningun texto");
    };

};

function descencriptar() {
    textoADevolver = texto.value.replace(/enter/gm, "e");
    textoADevolver = textoADevolver.replace(/imes/gm, "i");
    textoADevolver = textoADevolver.replace(/ober/gm, "o");
    textoADevolver = textoADevolver.replace(/ufat/gm, "u");
    textoADevolver = textoADevolver.replace(/ai/gm, "a");
    
    if (texto.value != "" & texto.value != " ") {
        txtaDevoolucion.value = textoADevolver;

        divImagenes.style.display = "none";
        divQueAparece.style.display = "block";
        
    } else {
        alert("No ingreso ningun texto")
    };

};

const copyToClipboard = () => {
    navigator.permissions.query({ name: 'clipboard-write' }).then(({ state }) => {
        if (state === 'granted' || state === 'prompt') {
        navigator.clipboard
            .writeText(txtaDevoolucion.value)
            .then(() => console.log(`${txtaDevoolucion.value} was copied to clipboard`))
            .catch(() =>
            console.warn(`${txtaDevoolucion.value} couldn't be copied to the clipboard`)
            );
        }
    });
};