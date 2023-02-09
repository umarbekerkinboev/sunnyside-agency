const hamburger = document.querySelector('.hamburger-menu'),
ActiveNavbar = document.querySelector('#mobile-navbar');
NoTitle = document.querySelector("#nothing");

hamburger.addEventListener('click', (e) => {
    ActiveNavbar.classList.toggle('active');
    NoTitle.classList.toggle('no-title');
})