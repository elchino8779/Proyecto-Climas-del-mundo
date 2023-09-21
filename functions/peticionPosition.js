import { actualizarTarjetas } from "./actualizarTarjetas.js";
import { mostrarLoader, ocultarLoader } from "./loader.js";
import { mostarModalError } from "./modalError.js";
import { fadeIn, fadeOut } from "./mostarTarjetas.js";

export function obtenerPosicion() {

    fadeOut();
    mostrarLoader();

    const optionsPosition = { enableHighAccuracy: true, timeOut: 5000, maximunAge: 0 }

    const success = async (pos) => {

        const cord = pos.coords;
        const posicionActual = `${cord.latitude},${cord.longitude}`;

        const options = { method: 'GET', headers: { accept: 'application/json' } };
        let url = `https://api.tomorrow.io/v4/weather/forecast?location=${posicionActual}&apikey=IaHz6X1CZJiJjz8GuOPfigE2eylFxmnC`;
        try {
            let peticion = await fetch(url, options);
            let json = await peticion.json();

            if (!peticion.ok) {
                throw (json.message);
            };

            console.log(json);
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

    const errorPosition = (error) => {
        fadeOut();
        mostarModalError("Asegurese que su dispositivo tenga acceso a la ubicacion e intente nuevamente");
        ocultarLoader();
    };

    navigator.geolocation.getCurrentPosition(success, errorPosition, optionsPosition);

};