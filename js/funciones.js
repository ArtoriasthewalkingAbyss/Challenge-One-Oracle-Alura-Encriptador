let texto = document.querySelector(".txta-encrp-desen");
let textoADevolver;//si es posible cambiar todos los let por const;
let txtaDevoolucion = document.querySelector(".txta-devolucion");
let divQueAparece = document.querySelector(".div-txta-devolucion-btn");
let divImagenes = document.querySelector(".div-img-h2-p")

function validateInput() {
    let input = texto.value;
    input = input.toLowerCase();

    // Expresión regular para validar que solo contenga letras minúsculas sin acentos ni caracteres especiales
    let regex = /^[a-z]+$/;

    if (!regex.test(input)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales");
        input = input.replace(/[^a-z]/g, "");
    };

    texto.value = input;
};

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