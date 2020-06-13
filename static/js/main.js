$('.nt-albumDeFotos').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});

$("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
    }
});

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowtop = window.pageYOffset; /* + ((window.innerHeight * 3) / 4) */
    target.forEach(function(element){
        if(windowtop > element.offsetTop){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }

        console.log(element.offsetTop);
    })
}


window.addEventListener('scroll', function(){
    animeScroll();
})


const serv = document.querySelectorAll('[data-animacao]');
const animacaoClass = 'animacao';

function scrollDown(){
    const pagetop = window.pageYOffset + ((window.innerHeight * 2.5)/4);
    serv.forEach(function(elemento){
        if(pagetop > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }else{elemento.classList.remove(animacaoClass);
        }
        console.log(elemento.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    scrollDown();
})