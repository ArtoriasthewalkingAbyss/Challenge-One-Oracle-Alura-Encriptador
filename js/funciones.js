let texto = document.getElementById("txta-encrp-desen");
let textoADevolver;
let txtaDevoolucion = document.getElementById("txta-devolucion");
let divQueAparece = document.querySelector(".div-txta-devolucion-btn");
let divImagenas = document.querySelector(".div-img-h2-p")

function encriptar() {

    textoADevolver = texto.value.replace(/e/gm, "enter");
    textoADevolver = textoADevolver.replace(/i/gm, "imes");
    textoADevolver = textoADevolver.replace(/o/gm, "ober");
    textoADevolver = textoADevolver.replace(/u/gm, "ufat");
    textoADevolver = textoADevolver.replace(/a/gm, "ai");

    if (texto.value != "" & texto.value != " ") {
        txtaDevoolucion.value = textoADevolver;

        divImagenas.style.display = "none";
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

        divImagenas.style.display = "none";
        divQueAparece.style.display = "block";
        
    } else {
        alert("No ingreso ningun texto")
    };

};