icon_menu = document.querySelector(".menu__icon");
icon_cerrar = document.querySelector(".image__icon__close");
menu = document.querySelector(".menu");

icon_menu.addEventListener('click', ()=>{
    menu.classList.toggle("show__menu")
})

icon_cerrar.addEventListener('click', ()=>{
    menu.classList.remove("show__menu")
})