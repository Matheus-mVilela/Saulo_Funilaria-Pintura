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

function colorBar(id) {
    if (id == "move") {
        document.getElementById("menu").className = "corBarra";
    } else if(id == "dow"){
        document.getElementById("menu").className = "corBarra2";

    }
}



