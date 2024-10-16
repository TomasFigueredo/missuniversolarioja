const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav_ul_a'); 


hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('menu-activo');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-activo'); 
    });
});