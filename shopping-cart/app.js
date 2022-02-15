console.log("Hi I am connected to this web");
function valueUpdater(inputid, price, isPlus)
{
    var subTotal = parseFloat(document.getElementById('sub-total').innerText);
    var tax = parseFloat(document.getElementById('tax').innerText);
    var total = parseFloat(document.getElementById('total').innerText);
    var input = parseInt(document.getElementById(inputid).value);
    previousPrice = parseFloat(document.getElementById(price).innerText);
    if(isPlus && input>=0)
    {
        input = input+1;
        previousPrice = previousPrice + 1200;
        subTotal = subTotal + previousPrice;
        tax = subTotal/10;
        total = subTotal +tax;
        
    }else if(input>0){
        input = input -1;
        previousPrice = previousPrice - 1200;
        subTotal = subTotal + previousPrice;
        tax = subTotal/10;
        total = subTotal +tax;
    }
    console.log(input);
    
    document.getElementById(inputid).value = input;
    document.getElementById(price).innerText = previousPrice;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = subTotal + tax;
    // price = input*price;
    // subTotal = subTotal + price;
    // tax = subTotal/10;
    // total = subTotal + tax;

}

document.getElementById('remove-1').addEventListener('click',()=>{
    document.getElementById('cart-1').style.display = 'none';
});
document.getElementById('remove-2').addEventListener('click',()=>{
    document.getElementById('cart-2').style.display = 'none';
});

let input1 = 'input-1';
let input2 = 'input-2';
let price1 = 'price-1-text';
let price2 = 'price-2-text';
document.getElementById('plus-1').addEventListener('click',()=>{
    console.log("clicked");
    var input = parseInt(document.getElementById('input-1').value);
    valueUpdater(input1,price1,true);
});
document.getElementById('minus-1').addEventListener('click',()=>{
    console.log("clicked");
    var input = parseInt(document.getElementById('input-1').value);
    valueUpdater(input1,price1,false);
});
document.getElementById('plus-2').addEventListener('click',()=>{
    console.log("clicked");
    var input = parseInt(document.getElementById('input-2').value);
    valueUpdater(input2,price2,true);
});
document.getElementById('minus-2').addEventListener('click',()=>{
    console.log("clicked");
    var input = parseInt(document.getElementById('input-2').value);
    valueUpdater(input2,price2,false);
});

