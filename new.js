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
        burger.addEventListener('click', ()=> {
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

var knappar = document.getElementsByClassName('cardBtn');

for ( let i=0 ; i < knappar.length; i++ ) {
    
        knappar[i].addEventListener('click', function(){
            let currentCard = knappar[i].parentNode.dataset;
            skrivUt(currentCard);
            cartUppdate();
        });
};


var theCart = document.getElementById('theCart');
var myLocalArray;
let cartArr;


if( window.localStorage.getItem('cart') ) {
    var localCart = window.localStorage.getItem('cart');
    myLocalArray = JSON.parse(localCart);

    myLocalArray.forEach(vara => {
        theCart.innerHTML = theCart.innerHTML + "<li id='"+vara.item.itemId+"-item'><div class='cartNamnPro'>"+vara.item.itemName+"</div><div class='cartInner'><button class='decrease'>-</button><input data-itemid='" + vara.item.itemId + "' id='"+vara.item.itemId+"-quantity' type='text' min='1' class='nummer' value='"+vara.item.quantity+"'><button class='increase'>+</button></div><div class='cartpriss' id='"+vara.item.itemId+"-price'>"+vara.item.price+"</div></li>";
    
    });
    
    cartArr = myLocalArray;
} else {
    cartArr = [];
}




function skrivUt(varan){
// Det är ska också hända när man trycket på (+) i kundvagnen
var alreadyInCartId = false;
var changeIndex;
    cartArr.forEach( index => {
        if( index.item.itemId == varan.item ) {
            changeIndex = index;
            alreadyInCartId = true;
            return;
        }
    });

    if( alreadyInCartId ) {

        let newQuantity = parseInt(changeIndex.item.quantity) + 1;

        changeIndex.item.quantity = newQuantity.toString();

        let newPrice = varan.price * newQuantity;

        changeIndex.item.price = newPrice;
        // exakt samma som att skriva 
        // cartArr[0].item.price = newPrice; eller
        // cartArr[1].item.price = newPrice; eller
        // cartArr[2].item.price = newPrice; osv beroende på vilken vara vi klickar 
        // på och som finns i vår localStorage array

        let priceElem = document.getElementById(changeIndex.item.itemId + '-price'); // stol_1-price
        let quantityElem = document.getElementById(changeIndex.item.itemId + '-quantity');

        priceElem.innerText = changeIndex.item.price;
        quantityElem.value = changeIndex.item.quantity;

        
        // cartArr[ (enSiffra) ].item.price kommer vara exakt samma som changeIndex.item.price

        var stringCart = JSON.stringify(cartArr); 
        window.localStorage.setItem('cart', stringCart);


        
    } else {

    theCart.innerHTML = theCart.innerHTML + "<li id='"+ varan.item +"-item'><div class='cartNamnPro'>"+varan.name+"</div><div class='cartInner'><button class='decrease'>-</button><input data-itemid='" + varan.item + "' id='"+varan.item+"-quantity' type='text' min='1' class='nummer' value='"+varan.quantity+"'><button class='increase'>+</button></div><div class='cartpriss' id='"+varan.item+"-price'>"+varan.price+"</div></li>";

    let myObj = {
        item: {
        "itemId": varan.item,
        "itemName": varan.name,
        "price": varan.price * varan.quantity,
        "quantity": varan.quantity
        }
    }

    /*
    let ObjektNamn = {
        Nyckel: {
        "Nyckel": värde,
        "Nyckel2": annatVärde,
        "Nyckel3": {
            "NyckelNyckel1": "Hej",
        },
        }
    }
    Om man vill hitta "Hej" så skriver man
    let HejVariabel = ObjektNamn.Nyckel.Nyckel3.NyckelNyckel1;
    */

    cartArr.push(myObj);
    var stringCart = JSON.stringify(cartArr); 

    window.localStorage.setItem('cart', stringCart);
    }
}
    var increaseButton;
    var decreaseButton;

    function cartUppdate() {
        
        increaseButton = document.getElementsByClassName("increase");
        decreaseButton = document.getElementsByClassName("decrease");

         increaseButton = Array.prototype.slice.call( increaseButton, 0 );
         decreaseButton = Array.prototype.slice.call( decreaseButton, 0 ); 

        
         
        updButtons(increaseButton, decreaseButton)

    };

    cartUppdate(); 


    function updButtons( incBtn, decBtn ) {
        console.log("tja");
        
        incBtn.forEach(elem => {
            elem.addEventListener('click', function() {
                let myInput = elem.parentNode.querySelector("input");
                let myItemId = myInput.dataset.itemid;

                let myLocalCart = window.localStorage.getItem('cart');

                myLocalCart = JSON.parse(myLocalCart);

                let changeIndex;
                myLocalCart.forEach(item => {
                    if(item.item.itemId == myItemId) {
                        changeIndex = item;
                    }
                });

                let thePrice = changeIndex.item.price / changeIndex.item.quantity

                let newQuantity = parseInt(changeIndex.item.quantity) + 1;

                changeIndex.item.quantity = newQuantity.toString();

                let newPrice = thePrice * newQuantity;

                changeIndex.item.price = newPrice;

                let priceElem = document.getElementById(myItemId + '-price'); // stol_1-price
                let quantityElem = document.getElementById(myItemId + '-quantity');

                priceElem.innerText = changeIndex.item.price;
                quantityElem.value = changeIndex.item.quantity;

                var stringCart = JSON.stringify(myLocalCart); 
                window.localStorage.setItem('cart', stringCart);

            }); 
        });

        decBtn.forEach(elem => {
            elem.addEventListener('click', function() {
                let myInput = elem.parentNode.querySelector("input");
                let myItemId = myInput.dataset.itemid;



                let myLocalCart = window.localStorage.getItem('cart');

                myLocalCart = JSON.parse(myLocalCart);

                let changeIndex;
                myLocalCart.forEach(item => {
                    if(item.item.itemId == myItemId) {
                        changeIndex = item;
                    }
                });

                if(myInput.value <= 0 || myInput.value <= "0"){
                    let myIndexString = String(changeIndex);
                    let theIndex = myLocalCart.indexOf(myIndexString);
                    console.log(theIndex);
                    console.log(myLocalCart);
                    
                    myLocalCart.splice(theIndex, 1);
                    console.log(myLocalCart);
                     
                    let element = document.getElementById(myItemId+"-item");
                    element.parentNode.removeChild(element);

                    var stringCart = JSON.stringify(myLocalCart); 
                    window.localStorage.setItem('cart', stringCart);

                    return;
                }

                let thePrice = changeIndex.item.price / changeIndex.item.quantity

                let newQuantity = parseInt(changeIndex.item.quantity) - 1;

                changeIndex.item.quantity = newQuantity.toString();

                let newPrice = thePrice * newQuantity;

                changeIndex.item.price = newPrice;

                let priceElem = document.getElementById(myItemId + '-price'); // stol_1-price
                let quantityElem = document.getElementById(myItemId + '-quantity');

                priceElem.innerText = changeIndex.item.price;
                quantityElem.value = changeIndex.item.quantity;

                var stringCart = JSON.stringify(myLocalCart); 
                window.localStorage.setItem('cart', stringCart);

            });
        });
    }

});