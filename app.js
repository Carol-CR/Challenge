let ingresoTexto=document.getElementById("ingresoTexto");
let botonEncriptar=document.getElementById("botonEncriptar");
let botonDesencriptar=document.getElementById("botonDesencriptar");
let botonCopiar=document.getElementById("botonCopiar");
let mensajeFinal=document.getElementById("mensajeFinal");
let monito_alura=document.getElementById("monito_alura");
let indicaciones_dos=document.getElementById("indicaciones_dos");
let right=document.getElementById("right");

let remplazar=[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];
botonEncriptar.addEventListener("click",() => {
    let texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText){
        for(let i= 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
            };
        };
        return newText
    }
    let textoEncriptado= encriptar(texto);
    mensajeFinal.innerHTML = textoEncriptado;
    //console.log(encriptar(texto));
    monito_alura.style.display = "none";
    indicaciones_dos.style.display= "none";
    botonCopiar.style.display= "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
})

botonDesencriptar.addEventListener("click",() => {
    let texto = ingresoTexto.value.toLowerCase();
    function desencriptar (newText){
        for (let i= 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText= newText.replaceAll(remplazar[i][1],remplazar[i][0]);
            };
        };
        return newText
    }
    let textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;
})


