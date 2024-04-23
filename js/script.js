// Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

// Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var icon_menu = document.querySelector(".icon__menu"); // Seleccionamos el ícono del menú
var body = document.body; // Seleccionamos el body

// Evento para mostrar y ocultar menú
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
    btn_open.classList.toggle("icon_move"); // Añadido para mover el ícono
    icon_menu.classList.toggle("icon__menu_move"); // Añadido para mover el ícono
}

// Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
if (window.innerWidth < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

// Haciendo el menú responsive (adaptable)
window.addEventListener("resize", function(){
    if (window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
        btn_open.classList.remove("icon_move"); // Añadido para mover el ícono
        icon_menu.classList.remove("icon__menu_move"); // Añadido para mover el ícono
    }
    if (window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});





