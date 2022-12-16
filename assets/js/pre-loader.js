// const loader = document.querySelector('.loader');
// const main = document.querySelector('.main');
// function init(){
//     setTimeout(() =>{
//         loader.style.opacity = 0;
//         loader.style.display = 'none';

//         main.style.display = 'block';
//         setTimeout(() => (main.style.opacity = 1), 50);
//     }, 1000);

// }

// init();


(function ($) {
    "use strict";

    // Buy Now Btn
    // $('body').append("<a href='#' class='buy-now-btn' target='_blank'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>"); 
    
    //Preloader
    $(window).on('load', function (event) {
        $('.loader').delay(500).fadeOut(500);
    });
})