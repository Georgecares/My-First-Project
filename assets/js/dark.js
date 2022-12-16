// DARK THEME

var icon = document.getElementById("icon");
var darkimg = document.getElementsByClassName('light-logo')
var lightimg = document.getElementsByClassName('dark-logo')
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="./assets/image/night.png";
    
    }
    else{
        icon.src = "./assets/image/sunny.png";
        
    }
};
