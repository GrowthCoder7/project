export const formatPrice = (price: number, discountedPrice:number) => {
  const originalPrice = `₹${price.toFixed(2)}`;
  // const discountedPrice = price * (1 - discount);
  // const discountPrice = `₹${discountedPrice.toFixed(2)}`;
  const finalPrice = `₹${discountedPrice.toFixed(2)}`;
  const discountPercentage = Math.round(((price-discountedPrice)/price) * 100);

  return {
    originalPrice,
    finalPrice,
    discountPercentage
  };
};