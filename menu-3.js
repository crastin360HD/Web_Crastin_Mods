const busqueda_menu = document.querySelector('.busqueda');
const menu_busqueda = document.querySelector('.menu');


console.log(busqueda_menu);

console.log(menu_busqueda);

busqueda_menu.addEventListener('click', ()=>{
    
    menu_busqueda.classList.toggle("spread");
})


window.addEventListener('click', e=>{
    
    if(menu_busqueda.classList.contains('spread')
        &&e.target != menu_busqueda &&e.target != busqueda_menu  ){
            

        menu_busqueda.classList.toggle("spread")
                
    }
})


