/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const apple = {
  name: "Apple",
  price: 1.0,
  quantity: 0,
  productId: 1,
  image: "images/apple.jpg",
};
const orange = {
  name: "Orange",
  price: 1.0,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg",
};
const strawberry = {
  name: "Strawberry",
  price: 0.3,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg",
};
const cherry = {
  name: "Cherry",
  price: 0.5,
  quantity: 0,
  productId: 4,
  image: "images/cherry.jpg",
};
const banana = {
  name: "Banana",
  price: 0.75,
  quantity: 0,
  productId: 5,
  image: "images/banana.jpg",
};

const cantaloupe = {
  name: "Cantaloupe",
  price: 4.0,
  quantity: 0,
  productId: 6,
  image: "images/cantaloupe.jpg",
};
const kiwi = {
  name: "Kiwi",
  price: 1.0,
  quantity: 0,
  productId: 7,
  image: "images/kiwi.jpg",
};
const asianPear = {
  name: "Asian pear",
  price: 2.0,
  quantity: 0,
  productId: 8,
  image: "images/asian_pear.jpg",
};

products.push(
  apple,
  asianPear,
  banana,
  cantaloupe,
  cherry,
  kiwi,
  orange,
  strawberry
);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  // Find the product in the products array
  const productSelected = products.find(
    (product) => product.productId === productId
  );
  // Check if the product is already in the cart
  if (productSelected) {
    const existingCartItem = cart.find((item) => item.productId === productId);
    // If the product is already in the cart, increase its quantity
    if (existingCartItem) {
      existingCartItem.quantity += 1;
      // If the product is not in the cart, add it to the cart
    } else {
      cart.push({
        ...productSelected,
        quantity: 1,
      });
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const cartItem = cart.find((item) => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  // Find the product in the cart array
  const cartItem = cart.find((item) => item.productId === productId);
  // If the product is already in the cart, decrease its quantity
  if (cartItem) {
    cartItem.quantity -= 1;
    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const index = cart.findIndex((item) => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let total = 0;
  // Loop through each item in the cart
  for (let item of cart) {
    // Calculate the cost of the item
    const itemCost = item.price * item.quantity;
    // Add the item cost to the total
    total += itemCost;
  }
  // Return the final total cost
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.length = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  const total = cartTotal();
  return amount - total;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
