 var knappar = document.getElementsByClassName('cartBtn');

for ( let i=0 ; i < knappar.length; i++ ) {

        knappar[i].addEventListener('click', function(){
            skrivUt(knappar[i].parentNode.dataset.price);
        });

};

function skrivUt(PrisetPåVaran){
    console.log(PrisetPåVaran);
} 

/* let bokaTid = [17.00, 17.30, 18.00, 18.30, 19.00];
let listan = document.querySelector("#blist");

function time(){
    let thiss = document.createElement("li");
    listan.append(thiss);
    thiss.innerHTML = "din tid är" + bokaTid[0];

    bokaTid.shift();
    console.log(bokaTid);
} */

/*     rakibs code 
document.querySelector(".increase").addEventListener("click", function(){
    var inputVal=  document.querySelector(varan.item+"-quantity").value;
    inputVal++;
     console.log(inputVal)
    console.log(varan.price+varan.price)
}) 
 */