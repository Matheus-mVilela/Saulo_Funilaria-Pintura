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