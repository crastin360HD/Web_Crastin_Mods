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


iconMenuDerecho.addEventListener("click",()=>{
    menuDerecho.classList.toggle("showMenuDerecho")
})
