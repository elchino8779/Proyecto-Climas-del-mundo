
export function mostarModalError(error){

    const $fragment = document.createDocumentFragment();
    const $contenedor = document.createElement("div");
    $contenedor.classList.add("contenedor-modal");
    const $img = document.createElement("img");
    $img.src = "../assets/info.svg";
    $img.alt = "Info";
    const $parrafo = document.createElement("p");
    $parrafo.textContent = error;
    $fragment.appendChild($img);
    $fragment.appendChild($parrafo);
    $contenedor.appendChild($fragment)

    document.body.appendChild($contenedor);

    setTimeout(() => {
        document.body.removeChild($contenedor);
    }, 3000);
};