icon_menu = document.querySelector(".menu__icon");
icon_cerrar = document.querySelector(".image__icon__close");
menu = document.querySelector(".menu");
show_black = document.querySelector(".show__black");

icon_menu.addEventListener('click', ()=>{
    menu.classList.toggle("show__menu")
    show_black.classList.toggle("show__black_open");
})

icon_cerrar.addEventListener('click', ()=>{
    menu.classList.remove("show__menu")
    show_black.classList.remove("show__black_open");

})



window.addEventListener('click', e=>{
    
    if(menu.classList.contains('show__menu')
        &&e.target != menu &&e.target != icon_menu  ){
        
        menu.classList.toggle("show__menu")
        show_black.classList.toggle("show__black_open");

    }
})


//**Move__content*/

/*const cars__information = document.querySelector(".new__cars__information");
const image__information = document.querySelector(".image_new_cars");
const block__conts = document.querySelector('.block__content');

block__conts.addEventListener('click', ()=>{
    cars__information.classList.toggle('cars__show');
    
})

block__conts.addEventListener('click',()=>{
    image__information.classList.toggle('image__show')
})*/