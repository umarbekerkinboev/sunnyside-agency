const hamburger = document.querySelector('.hamburger-menu'),
ActiveNavbar = document.querySelector('#mobile-navbar');

hamburger.addEventListener('click', (e) => {
    ActiveNavbar.classList.toggle('active');
})