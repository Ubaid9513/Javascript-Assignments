// Que mo. 01

var itemsArray = [
  {
    name: "juice",
    price: "50",
    quantity: "3",
    totalPrice: function() {
      return this.price * this.quantity;
    },
  },
  {
    name: "cookie",
    price: "30",
    quantity: "9",
    totalPrice: function() {
        return this.price * this.quantity;
      },
  },
  {
    name: "shirt",
    price: "880",
    quantity: "1",
    totalPrice: function() {
        return this.price * this.quantity;
      },
  },
  {
    name: "pen",
    price: "100",
    quantity: "2",
    totalPrice : function() {
        return this.price * this.quantity;
      },
  },
];

for(var i = 0 ; i < itemsArray.length; i++){
    document.write(`<div class = "card">
    <p>Item Name : ${itemsArray[i].name}</p>
    <p>Item Price : ${itemsArray[i].price}</p>
    <p>Item Quantity : ${itemsArray[i].quantity}</p>
    <p>Total Price : ${itemsArray[i].totalPrice()}</p>
    </div>`);
}

// Que no. 02



// Que no. 03
// Que no. 04