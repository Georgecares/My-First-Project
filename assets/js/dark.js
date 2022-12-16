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

