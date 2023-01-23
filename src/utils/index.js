export default function updatCart(state) {
  let subTotal = 0;
  let discounts = [];
  let isTwoButters = false;
  let acc = 0;
  state.cart.forEach((element) => {
    // calculate subtotal
    subTotal += element.price * element.quantity;
    // check if there is 2 butters in cart and add 1 to acc for each 2 butters
    if (element.id === 3 && element.quantity >= 2) {
      isTwoButters = true;
      if (element.quantity % 2 === 0) acc = element.quantity / 2;
      else acc = (element.quantity - 1) / 2;
    }
    // check if bread is available in cart to apply discount
    if (element.id === 1 && isTwoButters) {
      element.discount = 0.5;
      // push discount to discounts []
      discounts.push(-(acc * 0.5));
    } else {
      element.discount = null;
    }
    //check if Milk is availble in cart and quantint is 3
    if (element.id === 2 && element.quantity >= 3) {
      if (element.quantity % 3 === 0) acc = element.quantity / 3;
      else acc = Math.floor((element.quantity - 1) / 3);
      // check if user add 1 more over the 3 milks to discount the new added one
      if (element.id === 2 && element.quantity >= 4) {
        discounts.push(-(acc * 1.15));
        element.discount = 0;
      } else {
        element.discount = null;
      }
    }
  });
  // set discount to the sum of all the discounts in the discount array
  state.discount = discounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // set the subtotal and total price
  state.subTotal = subTotal;
  state.total = state.discount + state.subTotal;
}
