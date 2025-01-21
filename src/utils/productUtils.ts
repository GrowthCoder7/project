const tags = [
  'Soy Wax',
  'Natural',
  'Handcrafted',
  'Long-lasting',
  'Essential Oils',
  'Eco-friendly',
  'Vegan',
  'Gift-worthy'
];

export const getRandomTags = () => {
  const numTags = Math.floor(Math.random() * 3) + 2; // 2-4 tags
  const shuffled = [...tags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numTags);
};

export const getRandomDiscount = () => {
  const shouldHaveDiscount = Math.random() < 0.3; // 30% chance of discount
  return shouldHaveDiscount ? Math.floor(Math.random() * 3 + 1) * 0.1 : 0;
};