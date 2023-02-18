export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price / 10);
};
