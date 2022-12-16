

// STICKY NAV
window.onscroll = function() {navBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
};


// COUNTER CODE
const Found = document.querySelector("#countering");
const Founder = new Odometer({
     el: Found,
});
Founder.update(8705);

const Ses = document.querySelector("#countering-2");
const Sees = new Odometer({
    el: Ses,
});

Sees.update(380);


const count_3 = document.querySelector("#countering-3");
const count_33 = new Odometer({
    el: count_3,
});

count_33.update(9450);

const count_4 = document.querySelector("#countering-4");
const count_44 = new Odometer({
    el: count_4,
});
count_44.update(707);



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


  $('.cause-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// $('.owl-dots').on('click', 'li', function(e) {
//     owl.trigger('to.cause.carousel', [$(this).index(), 300]);
// });

$('.article-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.volunteer-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="far fa-arrow-left vol"></i>','<i class="far fa-arrow-right vol-2"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// DARK THEME

var icon = document.getElementById("icon");
var darkimg = document.querySelector('.light-logo')
var lightimg = document.querySelector('.dark-logo')
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="./assets/image/night.png";
        lightimg.style.display = 'block'
        darkimg.style.display = 'none'
    }
    else{
        icon.src = "./assets/image/sunny.png";
        lightimg.style.display = 'none'
        darkimg.style.display = 'block'
        
    }
};



