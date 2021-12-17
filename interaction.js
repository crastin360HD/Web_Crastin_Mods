let abrir = document.querySelector(".container__image");

let cerrar = document.querySelector(".Cerrar");

let modal__interactivo = document.querySelector(".container__interactive")

let show__black = document.querySelector(".show__black__");

let expandirse = document.querySelector(".expandir");

let contenedorInteractive = document.querySelector(".contenedor__interactive");

let show__ = document.querySelector(".show")

abrir.addEventListener('click', ()=>{
    modal__interactivo.classList.toggle("show__interactive");
    show__black.style.opacity = "1";
})

cerrar.addEventListener('click', ()=>{
    modal__interactivo.classList.toggle("show__interactive");
    show__black.style.opacity = "0";
    expandirse.style.opacity = "1",
    show__.style.opacity = "1",
    show__.style.pointerEvents = "unset",
    contenedorInteractive.style.overflow = "hidden";
})

expandirse.addEventListener("click", ()=>{
    contenedorInteractive.style.overflow = "scroll";
    expandirse.style.opacity = "0";
    show__.style.opacity = "0";
    show__.style.pointerEvents = "none";
})

