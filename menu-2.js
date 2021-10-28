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


