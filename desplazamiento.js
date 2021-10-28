// * Desplazamiento pc movil (PC) //

let Icon_Menu_desplegable = document.querySelector(".Icon_desplegable_movil");
let Menu_desplegable = document.querySelector(".menu-movil");
let abrir_cerrar_menu = document.querySelector(".show-menu-movil");


Icon_Menu_desplegable.addEventListener('click', ()=>{
    Menu_desplegable.classList.toggle("show-menu-movil");
})