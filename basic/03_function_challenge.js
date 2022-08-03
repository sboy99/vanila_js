const calculateTotal = function (subtotal, tax) {
  return subtotal + tax;
};

let order1, order2, order3;
order1 = calculateTotal(50, 13);
order2 = calculateTotal(100, 20);
order3 = calculateTotal(5440, 130);

console.log(order1, order2, order3);
