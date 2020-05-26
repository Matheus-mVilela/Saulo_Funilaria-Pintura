$('.nt-albumDeFotos').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});

function clicarme(id){
    if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';}
   else{
       document.getElementById(id).style.display = 'none';
   }
    
}