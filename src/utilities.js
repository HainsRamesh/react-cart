const utilities = (cart) => {
  let totalCount = 0;
  let totalValue = 0;
  for (let { amount, price } of cart.values()) {
    totalCount += +amount;
    totalValue += amount * price;
  }

  return { totalCount, totalValue };
};
export default utilities;
