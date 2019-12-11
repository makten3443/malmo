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