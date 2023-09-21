import { actualizarTarjetas } from "./actualizarTarjetas.js";
import { mostrarLoader, ocultarLoader } from "./loader.js";
import { mostarModalError } from "./modalError.js";
import { fadeIn, fadeOut } from "./mostarTarjetas.js";

export default async function cargarCiudad(ciudad) {

    fadeOut();
    mostrarLoader();

    const options = { method: 'GET', headers: { accept: 'application/json' } };
    let url = `https://api.tomorrow.io/v4/weather/forecast?location=${ciudad}&apikey=IaHz6X1CZJiJjz8GuOPfigE2eylFxmnC`;
    try {
        let peticion = await fetch(url, options);
        let json = await peticion.json();

        if (!peticion.ok) {
            throw (json.message);
        };
        actualizarTarjetas(json);
        fadeIn();

    } catch (error) {
        fadeOut();
        mostarModalError(error);
    }
    finally {
        ocultarLoader();
    };
};