export default function updatCart(state) {
  let subTotal = 0;
  let discounts = [];
  let isTwoButters = false;
  let acc = 0;
  state.cart.forEach((element) => {
    subTotal += element.price * element.quantity;
    if (element.id === 3 && element.quantity >= 2) {
      isTwoButters = true;
      if (element.quantity % 2 === 0) acc = element.quantity / 2;
      else acc = (element.quantity - 1) / 2;
    }
    if (element.id === 1 && element.quantity >= 1 && isTwoButters) {
      element.discount = 0.5;
      discounts.push(-(acc * 0.5));
    } else {
      element.discount = null;
    }
    if (element.id === 2 && element.quantity >= 3) {
      if (element.quantity % 3 === 0) {
        acc = element.quantity / 3;
        discounts.push(-(acc * 1.15));
        element.discount = 0;
      } else {
        acc = (element.quantity - 1) / 3;
        element.discount = null;
      }
    }
  });
  state.discount = discounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  state.subTotal = subTotal;
  state.total = state.discount + state.subTotal;
}
