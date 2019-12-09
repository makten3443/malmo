document.addEventListener("DOMContentLoaded", function(){

    let productTable = document.getElementById('fakturaPro');
    
    var localCart = window.localStorage.getItem('cart');
    localCart = JSON.parse(localCart);
    console.log(localCart);

    localCart.forEach(element => {
        
        let newProduct = `
        <tr>
        <td class="item-name">` + element.item.itemName + `</td>
        <td class="desc">Lorem ipsum dolor sit amet, consectetur</td>
        <td class="qty">` + element.item.quantity +`</td> 
        <td class="cost">`+ element.item.price / element.item.quantity +`</td>
        <td><span class="price">` + element.item.price + `</span></td>
        </tr>`;

        productTable.innerHTML = productTable.innerHTML + newProduct;
        
    });
    
    let summaElem = document.getElementById('summa');
    let momsElem = document.getElementById('moms');
    let totalElem = document.getElementById('total');
    let summa = 0;
    let moms = 0;
    
    localCart.forEach(element => {
        summa = summa + element.item.price;

        moms = moms +(0.25*element.item.price);

    });
    
    summaElem.innerText = summa;
    momsElem.innerText = moms;
    totalElem.innerText = summa + moms;

    
});