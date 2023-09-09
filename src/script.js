document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var navbar = document.querySelector('.navbar');
    var menuItems = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        menuItems.classList.toggle('active');
    });
});