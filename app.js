const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

anime({
    targets:'.serial',
    scale:[2,1],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
})

anime({
    targets:'.vision',
    scale:[2,1],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
})

anime({
    targets:'.services_title',
    translateX:[120,0],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
    delay: 500,
})

anime({
    targets:'.about_title',
    scale:[2,1],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
})

anime({
    targets:'.technologies h1',
    scale:[2,1],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
})

anime({
    targets:'.info h1',
    translateX:[120,0],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
    delay: 500,
})

anime({
    targets:'.info a',
    translateX:[-120,0],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
    delay: 500,
})

