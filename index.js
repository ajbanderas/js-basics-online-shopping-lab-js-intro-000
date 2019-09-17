var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartSummary = `In your cart, you have `
  
  return cartSummary
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

//while(cart.length === 0){
//    return "Your shopping cart is empty."
//  }
//  while(cart.length === 1){
//    cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}.`
//    return cartSummary
//  }
//  for(var i = 0; i < cart.length; i++){
//    if(i === cart.length - 1){
//      cartSummary += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
//    }else {
//      cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }