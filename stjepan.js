var knappar = document.getElementsByClassName('cardBtn');

for ( let i=0 ; i < knappar.length; i++ ) {

        knappar[i].addEventListener('click', function(){
            skrivUt(knappar[i].parentNode.dataset.price);
        });

};

function skrivUt(PrisetPåVaran){
    console.log(PrisetPåVaran);
}