const banner = document.querySelector("#bannerPromos");
let slider = document.querySelectorAll("#slider")
let ultimoSlider = slider[slider.length -1];


banner.insertAdjacentElement("afterBegin", ultimoSlider);

function Next(){
    let primerSlider = document.querySelectorAll(".slider")[0];
    banner.style.marginLeft = "-200%";
    banner.style.transition = "all .5s";
    setTimeout(function(){
        banner.style.transition = "none";
        banner.insertAdjacentElement("beforeEnd", primerSlider); 
        banner.style.marginLeft = "-100%";
    }, 500);
}

function Previo(){
    let slider = document.querySelectorAll(".slider");
    let ultimoSlider = slider[slider.length -1];
    banner.style.marginLeft = "0";
    banner.style.transition = "all .5s";
    setTimeout(function(){
        banner.style.transition = "none";
        banner.insertAdjacentElement("afterBegin", ultimoSlider); 
        banner.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    Next();
}, 3000);