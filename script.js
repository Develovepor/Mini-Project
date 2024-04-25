$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true
        
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }

    })
})




const formOpenBtn=document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");


//For opening and closing the Signin button
formOpenBtn.addEventListener("click",()=> home.classList.add("show"))
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"))

//swithcing to Signin to Signup and vice versa
signupBtn.addEventListener("click",(e)=>
{
         e.preventDefault();
     formContainer.classList.add("active");
 }
);


loginBtn.addEventListener("click",(e)=>
{
     e.preventDefault();
     formContainer.classList.remove("active");
 }
 );

 //password eye button
 pwShowHide.forEach((icon)=>{
     icon.addEventListener("click" ,() => {
         let getPwInput = icon.parentElement.querySelector("input");
         if(getPwInput.type==="password"){
             getPwInput.type="text";
             icon.classList.replace("uil-eye-slash","uil-eye")
         }else{
             getPwInput.type="password";
             icon.classList.replace("uil-eye","uil-eye-slash")
         }
         });
 });
