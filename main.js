// Custon Menu

let icon_Menu = document.getElementById("IconMenu");
let MeNu = document.getElementById("menu");
let cloSe = document.getElementById("cerrar");


icon_Menu.addEventListener('click',()=>{
    MeNu.classList.toggle("show__menu");
})

cloSe.addEventListener("click",()=>{
    MeNu.classList.remove("show__menu")
})


// Custon Menu derecho


let iconMenuDerecho = document.getElementById("iconRight");
let menuDerecho = document.getElementById("rigth__Menu")
let iconArriba = document.getElementById("icon__arriba");
let iconAbajo = document.getElementById("icon__abajo");
let items = document.getElementById("itemsMenu")

items.style.transition = ".4s";

iconMenuDerecho.addEventListener("click",()=>{
    menuDerecho.classList.toggle("showMenuDerecho")
})

iconArriba.addEventListener("click",()=>{
    items.style.transform = "translateY(-160px)"
})

iconAbajo.addEventListener("click",()=>{
    items.style.transform = "translateY(160px)"
})