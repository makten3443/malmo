///// navSlide/navbar funktionen//////
document.addEventListener("DOMContentLoaded", function(){

const navSlide = () => {
    // gör en variabel för classen "burger".
    const burger = document.querySelector('.burger');
    // gör en variabel för classen "nav-link".
    const nav = document.querySelector('.nav-link');
    // gör en variabel föt alla individuella länkar i li (listan) "nav-link". 
    const navLink = document.querySelectorAll('.nav-link li');

    // när man trycker på burgar menyn kommer "nav active" funktionen att aktiveras 
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    
        /////Animation för link//////
        // link är vardera länkar i listan, index gör det möjligt att sätta en delay för vardera länk.
        // if = om animationen har spelats kommer den inte att animera.
        navLink.forEach((link,index) =>{
            if (link.style.animation){
                link.style.animation = '';
                // men om den inte hittar ett värde så kommer den att spela upp animationen. 
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 10}s`;
            }
        });
        // burger menus toggle funktion
        burger.classList.toggle('toggle');
    });
}
navSlide();


  // gör en variabel för knappen "top".
let buttonTop = document.getElementById("btnTop");

// gör en function som agerar när det scrollas på sidan.
window.onscroll = function () {
    scrollTop();
}
// denna function gör så att när man scrollar ned till 40
// så kommer den att vissas men innan dess kommer den att inte vissas.
function scrollTop() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        buttonTop.style.display = "block";
    } else{
        buttonTop.style.display = "none";
    }
}

// när man sedan trycker på knappen kommer den att åka upp till 0 (högst upp på sidan)
document.getElementById("btnTop").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// /// kommer att kalla på allt inuti funktionen "navSlide"
// navSlide();

// function ShowData(){
//     const div = document.querySelector(".divfaktura")
   
//     div.innerHTML= localStorage.getItem("data");
//   }
//   //DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
//   document.addEventListener("DOMContentLoaded", function (){
//      ShowData();
//   })

//functionen "VAGNBTN" är kopplad med klassen "kund" knappen
let vagnBtn = document.querySelector(".kund");
// 
let vagn = document.querySelector(".modal_bg");
// 
let exit = document.querySelector(".modal___exit");

vagnBtn.addEventListener("click", function(){
        // när man trycker på "kundvagn" kommer bg_active att vissas
    vagn.classList.add("bg_active");
});

exit.addEventListener("click", function(){
    // när man trycker på "exit" kommer bg_active att försvinna
    vagn.classList.remove("bg_active");
});


window.onclick = function(event) {
    if (event.target == vagn) {
        vagn.classList.remove("bg_active");
    }
  }


  // function för faktura sidan som skriver ut allt som finns på sidan
   /* document.querySelector("#skrivaPDF").addEventListener("click", function () {
    window.print()
    console.log("hej hej")
   }
     ) */

});