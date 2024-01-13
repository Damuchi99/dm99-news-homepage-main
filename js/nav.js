let overlay = document.getElementById('mobile-menu');
let mobile_menu_bg = document.getElementById('mobile-menu-bg');

document.getElementById('open-menu-btn').addEventListener('click', function() {
    console.log("Menú activado");
    overlay.classList.add('active');
    mobile_menu_bg.style.display = "block";
});

document.getElementById('close-menu-btn').addEventListener('click', function() {
    console.log("Menú desactivado");
    overlay.classList.remove('active');
    mobile_menu_bg.style.display = "none";
});