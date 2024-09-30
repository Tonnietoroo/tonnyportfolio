/*============================= typing animation ====================================*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Freelancer"],
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
    return confirm("Are you sure you want to download the CV?");
 }

/*==============================message================*/

 function message() {
    var Name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var msg = document.getElementById("msg");
    var success = document.getElementById("success");
    var danger = document.getElementById("danger");

    if(Name.value === ' ' || email.value === '' || subject.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(()=>{
            Name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        },2000);

        success.style.display = 'block';
    }

    setTimeout(()=>{
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000);

 }
