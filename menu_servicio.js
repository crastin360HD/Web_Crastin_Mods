
let open_descargas = document.querySelector('.boton_descarga');
let link_descargas = document.querySelector('.link_descargas');
let cerrar_descargas = document.querySelector('.show_descargas');


open_descargas.addEventListener('click', ()=>{
    link_descargas.classList.toggle("show_descargas")
})

console.log(open_descargas)
console.log(link_descargas)
console.log(cerrar_descargas)