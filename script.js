function efectoResaltarButtons(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("mouseover", function() {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", function() {
        button.style.transform = "scale(1)";
    });
}

efectoResaltarButtons("Boton-Certificado-1");
efectoResaltarButtons("Boton-Certificado-2");
efectoResaltarButtons("Boton-Contactar");

function MostrarDatosDeContacto(){
    document.getElementById("contacto").innerHTML = "(503) 432-1336 // jando.juarez@example.com";
};