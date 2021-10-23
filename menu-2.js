const menu_dos = document.querySelector('.MeNu');
const menu_movil = document.querySelector('.menu-movil');

console.log(menu_dos)
console.log(menu_movil)

menu_dos.addEventListener('click', ()=>{
    menu_movil.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu_movil.classList.contains('spread')
        &&e.target != menu_movil &&e.target != menu_dos  ){
        menu_movil.classList.toggle("spread")

    }
})


// * Desplazamiento pc movil (PC) //

let Icon_Menu_desplegable = document.querySelector(".Icon_desplegable_movil");
let Menu_desplegable = document.querySelector(".menu-movil");
let abrir_cerrar_menu = document.querySelector(".show-menu-movil");


Icon_Menu_desplegable.addEventListener('click', ()=>{
    Menu_desplegable.classList.toggle("show-menu-movil")
})