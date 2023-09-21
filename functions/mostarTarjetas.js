
const $diaActual = document.querySelector(".dia-actual");
const $dia2 = document.querySelector(".dia-2");
const $dia3 = document.querySelector(".dia-3");
const $dia4 = document.querySelector(".dia-4");
const $ciudad = document.querySelector(".ciudad");

export function fadeIn() {
        $diaActual.classList.add("tarjeta-visible");
        $dia2.classList.add("tarjeta-visible");
        $dia3.classList.add("tarjeta-visible");
        $dia4.classList.add("tarjeta-visible");
        $ciudad.classList.add("tarjeta-visible");
};

export function fadeOut() {
    $diaActual.classList.remove("tarjeta-visible");
    $dia2.classList.remove("tarjeta-visible");
    $dia3.classList.remove("tarjeta-visible");
    $dia4.classList.remove("tarjeta-visible");
    $ciudad.classList.remove("tarjeta-visible");
};





