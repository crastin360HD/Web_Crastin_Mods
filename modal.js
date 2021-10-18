let modal = document.querySelector('.modal-global');
let abrir_modal = document.querySelector('.boton-cover');
let cerrar_modal = document.querySelector('.close')


abrir_modal.addEventListener('click', ()=>{
    modal.classList.toggle("show-modal")
})

cerrar_modal.addEventListener('click', ()=>{
    modal.classList.remove("show-modal")
})

console.log(cerrar_modal)

