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
    menuDerecho.classList.add("showMenuDerecho");
    icon_Menu.style.opacity = "0";
})

window.addEventListener('click', e=>{
    if(menuDerecho.classList.contains('showMenuDerecho')
        &&e.target != menuDerecho &&e.target != iconMenuDerecho &&e.target != iconArriba &&e.target !=iconAbajo){
        menuDerecho.classList.remove("showMenuDerecho");
        icon_Menu.style.opacity = "1";
    }
})

iconArriba.addEventListener("click",()=>{
    items.style.transform = "translateY(-160px)"
})

iconAbajo.addEventListener("click",()=>{
    items.style.transform = "translateY(160px)"
})