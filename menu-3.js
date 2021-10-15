const busqueda_menu = document.querySelector('.busqueda');
const menu_busqueda = document.querySelector('.menu');
const busscar = document.querySelector('.buscar')

console.log(busqueda_menu);

console.log(menu_busqueda);

busqueda_menu.addEventListener('click', ()=>{
    busscar.style.opacity = "0"
    menu_busqueda.classList.toggle("spread");
})


window.addEventListener('click', e=>{
    
    if(menu_busqueda.classList.contains('spread')
        &&e.target != menu_busqueda &&e.target != busqueda_menu  ){
            busscar.style.opacity = "1"

        menu_busqueda.classList.toggle("spread")
                
    }
})


