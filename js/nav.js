let overlay = document.getElementById('mobile-menu');
let mobile_menu_bg = document.getElementById('mobile-menu-bg');

document.getElementById('open-menu-btn').addEventListener('click', function() {
    overlay.classList.add('active');
    mobile_menu_bg.style.display = "block";
});

document.getElementById('close-menu-btn').addEventListener('click', function() {
    overlay.classList.remove('active');
    mobile_menu_bg.style.display = "none";
});