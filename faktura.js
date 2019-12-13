// tar bort knapp när man trycker på knappen.
// andreas och stepjan har gjort denna js

document.querySelector("#skrivaPDF").addEventListener("click", function () {
    var pdf = document.getElementById("skrivaPDF");
    var tillBaka = document.getElementById("back");
    pdf.style.visibility = 'hidden';
    tillBaka.style.visibility = 'hidden';
    window.print();
    pdf.style.visibility = 'visible';
    tillBaka.style.visibility = 'visible';
});




