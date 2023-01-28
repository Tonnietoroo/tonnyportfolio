/*============================= typing animation ====================================*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Content Creator"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/*============================== Active Elements=======================================*/

var header = document.getElementsByClassName("nav");
var btn = document.getElementsByClassName("navLink");

for (var i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active";
    });
};

/*========================Confirmation Box==========================*/
 function myConfirm(){
    alert("Working on It!")
 }