
const $loader = document.querySelector(".loader");

export function mostrarLoader(){
    $loader.classList.add("active");
};

export function ocultarLoader(){
    $loader.classList.remove("active");
};