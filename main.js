import { mostarModalError } from "./functions/modalError.js";
import cargarCiudad from "./functions/peticion.js";
import { obtenerPosicion } from "./functions/peticionPosition.js";

let ciudadValue;

document.addEventListener("DOMContentLoaded", (e) => {

    const $ciudadBuscarInput = document.getElementById("input-search");

    $ciudadBuscarInput.addEventListener("keyup", (e) => {
        ciudadValue = e.target.value;
    });


    document.addEventListener("click", (e) => {
        if(e.target.matches(".img-search")){
            if(ciudadValue) cargarCiudad(ciudadValue);
            else{
                mostarModalError("Ingrese una ciudad");
            };
        };
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            if(ciudadValue) cargarCiudad(ciudadValue);
            else{
                mostarModalError("Ingrese una ciudad");
            };
        };
    });

    document.addEventListener("click", (e) => {

        if(e.target.matches(".location-icon")){
            obtenerPosicion();
        }

    });
});
