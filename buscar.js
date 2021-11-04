let icon_buscar = document.querySelector('.icon_buscar');
let buscar = document.querySelector('.search');
let abrir_cerrar = document.querySelector('.Buscar_show');

icon_buscar.addEventListener('click', ()=>{
    buscar.classList.toggle("Buscar_show");
})


window.addEventListener('click', e=>{
    
    if(buscar.classList.contains('Buscar_show')
        &&e.target != buscar &&e.target != icon_buscar  ){
        

        buscar.classList.toggle("Buscar_show");
        
    }
})


console.log(icon_buscar);