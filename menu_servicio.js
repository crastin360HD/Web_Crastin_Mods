let open_descargas = document.querySelector(".icon_open");
let link_relacion = document.querySelector(".links-relacionados");
let abrir_cerrar = document.querySelector(".show_descargas");

open_descargas.addEventListener('click',()=>{
    link_relacion.classList.toggle("show_descargas");
})


