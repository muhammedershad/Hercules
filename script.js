const navbarE1 = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    if(window.scrollY > 50) {
        navbarE1.classList.add('navbar-scrolled');
    }else if(window.scrollY <= 50){
        navbarE1.classList.remove('navbar-scrolled');
    }
})