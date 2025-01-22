import { Product } from '../types';
import { getRandomTags, getRandomDiscount } from '../utils/productUtils';

// export const products: Product[] = [
//   {
//     id: 1,
//     name: 'Mystic Amber & Oud',
//     price: 45,
//     images: [
//       'https://images.unsplash.com/photo-1602910344079-28d7dbc58c5d',
//       'https://images.unsplash.com/photo-1603006905003-be475563bc59',
//       'https://images.unsplash.com/photo-1602910344008-22f323cc1817'
//     ],
//     description: 'A luxurious blend of amber, oud, and vanilla with exotic spices.',
//     category: 'luxury',
//     scent,
// tags:getRandomTags(),
// discount:getRandomDiscount(): ['Amber', 'Oud', 'Vanilla', 'Exotic Spices'],
//     burnTime: '60-65 hours',
//     tags: getRandomTags(),
//     discount: getRandomDiscount()
//   },
//   {
//     id: 2,
//     name: 'Arabian Nights',
//     price: 52,
//     images: [
//       'https://images.unsplash.com/photo-1596435163709-b374538c98c4',
//       'https://images.unsplash.com/photo-1602910344079-28d7dbc58c5d',
//       'https://images.unsplash.com/photo-1608181831718-c9ffd8728e95'
//     ],
//     description: 'Transport yourself to exotic lands with this rich blend of Middle Eastern spices.',
//     category: 'luxury',
//     scent,
// tags:getRandomTags(),
// discount:getRandomDiscount(): ['Frankincense', 'Myrrh', 'Sandalwood'],
//     burnTime: '55-60 hours',
//     tags: getRandomTags(),
//     discount: getRandomDiscount()
//   },
//   {
//     id: 3,
//     name: 'Sacred Sandalwood',
//     price: 48,
//     images: [
//       'https://images.unsplash.com/photo-1608181831718-c9ffd8728e95',
//       'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6',
//       'https://images.unsplash.com/photo-1603006905003-be475563bc59'
//     ],
//     description: 'Pure sandalwood essence combined with subtle notes of jasmine and vanilla.',
//     category: 'luxury',
//     scent,
// tags:getRandomTags(),
// discount:getRandomDiscount(): ['Sandalwood', 'Jasmine', 'Vanilla'],
//     burnTime: '65-70 hours',
//     tags: getRandomTags(),
//     discount: getRandomDiscount()
//   },
//   {
//     id: 4,
//     name: 'Moroccan Spice Market',
//     price: 42,
//     images: [
//       'https://images.unsplash.com/photo-1602910344008-22f323cc1817',
//       'https://images.unsplash.com/photo-1602910344079-28d7dbc58c5d',
//       'https://images.unsplash.com/photo-1603006905003-be475563bc59'
//     ],
//     description: 'A vibrant blend of exotic spices inspired by Moroccan souks.',
//     category: 'exotic',
//     scent,
// tags:getRandomTags(),
// discount:getRandomDiscount(): ['Cinnamon', 'Cardamom', 'Clove'],
//     burnTime: '50-55 hours',
//     tags: getRandomTags(),
//     discount: getRandomDiscount()
//   },
//   {
//     id: 5,
//     name: 'Persian Rose Garden',
//     price: 44,
//     images: [
//       'https://images.unsplash.com/photo-1603006905003-be475563bc59',
//       'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6',
//       'https://images.unsplash.com/photo-1602910344008-22f323cc1817'
//     ],
//     description: 'Luxurious Damascus rose blended with exotic woods and musk.',
//     category: 'exotic',
//     scent,
// tags:getRandomTags(),
// discount:getRandomDiscount(): ['Damascus Rose', 'Oud Wood', 'Musk'],
//     burnTime: '55-60 hours',
//     tags: getRandomTags(),
//     discount: getRandomDiscount()
//   }
// ];

export const products: Product[] = [
  {
    id: 1,
    name: "Cool Water Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/7-1000x1778.png.webp"
    ],
    description: "No description",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 2,
    name: "Fresh Coffee Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/15-1000x1778.png.webp"
    ],
    description: "This fragrance opens with a sweet blend of sugarcane and whipped cream in the top notes, creating a delectably creamy start. The heart combines milky notes with the rich aroma of roasted coffee beans. The base notes of vanilla crème, oak, sandalwood, and a hint of anise offer a warm and comforting depth, resulting in a delightful and cozy aroma.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 3,
    name: "Hawaiian Breeze Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/9.png.webp"
    ],
    description: "This fragrance opens with a tropical burst of lime, mandarin, mango, and apple, accented by fei banana leaves for a fruity and exotic introduction. The heart combines the floral elegance of jasmine and cyclamen with a touch of shore juniper. The base notes of driftwood and hula girl orchid create a beachy and captivating aroma, evoking a sense of coastal paradise.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 4,
    name: "Jasmine Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/1.png.webp"
    ],
    description: "This fragrance begins with the captivating allure of absolute jasmine and the zesty brightness of orange zest in the top notes. The heart combines the bitterness of orange with the warmth of Madagascar vanilla. The base notes of honey and musk add a sweet and sensuous depth, resulting in a beautifully balanced and enticing scent.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 5,
    name: "Pink Grapefruit Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/16.png.webp"
    ],
    description: "This fragrance opens with a vibrant burst of bergamot, grapefruit, lemon rind, and citron in the top notes, creating a zesty and refreshing introduction. The heart combines pink grapefruit, iris, and light ozonic notes, imparting a fresh and airy quality. The base notes of sugar cane, vanilla, and cypress add a subtle sweetness and woody depth, rounding out this invigorating scent.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 6,
    name: "Pink Peony Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/5.png.webp"
    ],
    description: "This fragrance opens with a burst of sweet pink sugar, tangy red currant, and luscious pomegranate in the top notes, creating a vibrant and fruity introduction. The heart combines the richness of peach, the floral elegance of peony, and the depth of ambergris, tonka bean, and pink geranium. The base notes of vanilla bean, musk, and amber provide a warm and sensuous finish, resulting in a complex and alluring scent.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 7,
    name: "Sandalwood Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/2.png.webp"
    ],
    description: "This fragrance opens with the sweet allure of honeysuckle and the freshness of geranium in the top notes. The heart combines the earthiness of oakmoss, the warmth of tonka bean, and the richness of rosewood. The base notes of sandalwood, white amber, musk, and vetiver create a grounding and sophisticated aroma, resulting in a beautifully balanced and complex scent.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 8,
    name: "Vanilla Scented Candle ",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/14.png.webp"
    ],
    description: "This fragrance commences with the crispness of Fuji apple and the warmth of anise in the top notes. The heart combines the floral sweetness of heliotrope with the creamy allure of coconut. The base notes of caramelized sugar and buttery vanilla create a luscious and comforting aroma, offering a delightful and cozy scent experience.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id: 9,
    name: "Vera Wang Scented Candle",
    price: 199,
    images: [
      "https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/11/20.png.webp"
    ],
    description: "This fragrance opens with a vibrant blend of zesty lemon, lime, mandarin, bergamot, and the tropical sweetness of pineapple in the top notes, creating a bright and invigorating introduction. The heart reveals a lush bouquet with lily of the valley, gardenia, jasmin, rose, and iris. The base notes of sandalwood, patchouli, amber, and musk provide a warm and comforting depth, resulting in a harmonious and timeless scent.",
    category: "Shot Glass Collection",
    tags:getRandomTags(),
    discount:getRandomDiscount(),
    discountedPrice:159
  },
  {
    id:10,
    name: 'Apple, Orange & Raspberry Scented Candle',
    price: 649.0,
    images: ['https://candlings.com/wp-content/uploads/2023/07/AOR-1.1-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 11,
    name: 'Cool Water Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/07/image00040-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 12,
    name: 'Fresh Coffee Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00041-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 13,
    name: 'Jasmine Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/07/Jasmine-1.1-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 14,
    name: 'Pink Peony Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/07/image00029-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 15,
    name: 'Sandalwood Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/07/image00045-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 16,
    name: 'Tahitian Honey Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00072-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 17,
    name: 'Vanilla Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00019-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 18,
    name: 'Water Lily Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00068-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 20,
    name: 'Watermelon Cotton Candy Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00035-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 21,
    name: 'White Linen Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00052-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 22,
    name: 'Winter Nights Scented Candle',
    price: 549.0,
    images: ['https://candlings.com/wp-content/uploads/2023/06/image00081-700x700.jpg'],
    description: "No description",
    category: "Premium Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:550
  },
   {
    id: 23,
    name: 'Blueberry Muffin Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/BML-1000x667.jpg.webp'],
    description: "This fragrance opens with a vibrant burst of citrus and fruity notes, combining the zesty aroma of orange peel, the juicy sweetness of blueberry, and the refreshing tang of lemon zest. The mid notes unfold with a delightful blend of blackberry, spun sugar, and creamy milky undertones, evoking a sense of indulgence and sweetness. The base notes provide a warm and comforting foundation, with the creamy essence of vanilla cream, the luscious sweetness of drizzled caramel, and the woody touch of sandalwood. Together, these notes create a deliciously sweet and comforting fragrance that is both uplifting and cozy.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
   {
    id: 24,
    name: 'Clean Linen Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/CLL-1000x667.jpg.webp'],
    description: "This fragrance opens with a vibrant burst of citrus and fruity notes, combining the zesty aroma of orange peel, the juicy sweetness of blueberry, and the refreshing tang of lemon zest. The mid notes unfold with a delightful blend of blackberry, spun sugar, and creamy milky undertones, evoking a sense of indulgence and sweetness. The base notes provide a warm and comforting foundation, with the creamy essence of vanilla cream, the luscious sweetness of drizzled caramel, and the woody touch of sandalwood. Together, these notes create a deliciously sweet and comforting fragrance that is both uplifting and cozy.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
   {
    id: 25,
    name: 'Cocunut Melon Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/CML-1000x667.jpg.webp'],
    description: "This fragrance opens with a burst of refreshing citrus, sweet orange, and juicy melon, creating a lively and invigorating sensation. The mid notes reveal a tropical paradise with the creamy and exotic essence of coconut, the delicate floral tones of ylang-ylang and jasmine, and a hint of fresh greens. As the fragrance settles, the base note of vanilla adds a warm and comforting touch, creating a harmonious and inviting blend. Together, these notes evoke a sense of sunny days, tropical landscapes, and a hint of sweetness, making it a delightful and uplifting fragrance choice.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
   {
    id: 26,
    name: 'Creme Caramel Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/CCP-1000x1500.jpg.webp'],
    description: "This fragrance begins with the comforting and nutty aroma of almond, instantly creating a sense of warmth and familiarity. As the fragrance develops, creamy milk and butter notes emerge, adding a smooth and indulgent quality. The base notes of vanilla and sweet caramel provide a delightful sweetness and richness, reminiscent of a delectable dessert. Together, these notes form a harmonious blend that is creamy, comforting, and irresistibly sweet. The fragrance envelops you in a cozy and nostalgic ambiance, evoking feelings of comfort and satisfaction.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
   {
    id: 27,
    name: 'Lemon Lime Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/LLL-1000x667.jpg.webp'],
    description: "This fragrance is a zesty and invigorating blend that awakens the senses. The top notes of lemon, lime, ginger, and peppermint create a refreshing and citrusy burst, offering a vibrant and uplifting experience. The mid notes of litsea cubeba and orange blossom add a touch of floral and aromatic sweetness, balancing the bright citrus with a delicate floral nuance. The dry notes of cedarwood, raw vanilla, and citrus musk provide a warm and comforting base, leaving a subtle and lingering trail. Together, these notes create a dynamic and refreshing fragrance that is both energizing and comforting.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
   {
    id: 28,
    name: 'Pink Grapefruit Scented Candle',
    price: 399.0,
    bigPrice:499.0,
    size:100,
    bigSize:200,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/PGL-1000x667.jpg.webp'],
    description: "This fragrance opens with a burst of refreshing citrus notes, including bergamot, grapefruit, lemon rind, and citron. These vibrant top notes create an invigorating and uplifting atmosphere. In the middle, pink grapefruit, iris, and light ozonic notes add a touch of brightness and a subtle floral aspect to the composition. The base notes of sugar cane, vanilla, and cypress bring a warm and comforting element, balancing the citrus and floral accords. The overall result is a harmonious blend that is both energizing and soothing, perfect for those who seek a fresh and uplifting fragrance experience.",
    category: "Classic Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:259,
    bigDiscountedPrice:389
  },
  {
    id: 29,
    name: 'Bulgarian Rose Scented Candle',
    price: 749.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/BRP-1000x1500.jpg.webp'],
    description: "This fragrance opens with a delicate and romantic combination of soft rose petals, white violet, and wild strawberry, creating a sweet and floral introduction. The mid notes introduce a fresh and elegant bouquet, blending pink geranium, lily of the valley, and dewy rose bud, evoking a sense of grace and femininity. The base notes provide a warm and sensual foundation, with the silky musk, iris, and clove bud adding depth and allure to the fragrance. Together, these notes create a harmonious and captivating fragrance that is both romantic and sophisticated.",
    category: "Signature Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:635
  },
  {
    id: 30,
    name: 'Dark Rum Scented Candle',
    price: 749.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/image00075-1000x1500.jpg.webp'],
    description: "This fragrance opens with a refreshing burst of lime, combined with the tropical and creamy aroma of coconut and the soothing floral notes of lavender. As the fragrance develops, the mid notes of jasmine and dark rum accord add a touch of sensuality and intrigue. The base notes of sandalwood, vetiver, cedar, patchouli, tonka, and cashmere musk create a warm and woody foundation, enveloping the scent with depth and complexity. Together, these notes blend harmoniously to create a captivating fragrance that is both refreshing and alluring, evoking a sense of tropical paradise and sophistication.",
    category: "Signature Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:635
  },
  {
    id: 31,
    name: 'Dolce & Gabanna Type Scented Candle',
    price: 749.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/image00075-1000x1500.jpg.webp'],
    description: "This fragrance opens with a burst of effervescent Sparkling Aldehydes, complemented by the freshness of Bergamot, Mandarin, Basil, Freesia, and Coriander. The heart of the fragrance blooms with a beautiful bouquet of Carnation, Orange Blossom, Muguet, Jasmine, and Rose, adding a floral and sensual touch. The base notes of Sandalwood, Tonka, Vanilla, and Musk provide a warm and inviting foundation, leaving a trail of sophistication and allure. Together, these notes create a harmonious and captivating fragrance that is both vibrant and elegant, making it a perfect choice for those seeking a timeless and sophisticated scent.",
    category: "Signature Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:635
  },
  {
    id: 32,
    name: 'Hawaiian Breeze Scented Candle',
    price: 749.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/Hawaain-Breez-2.0-1000x667.jpg.webp'],
    description: "This fragrance is a vibrant and tropical blend that transports you to a lush paradise. The top notes of lime, mandarin, mango, apple, and fei banana leaves create a refreshing and fruity opening, energizing your senses. The mid notes of jasmine, cyclamen, and shore juniper add a floral and aromatic touch, evoking the beauty of a coastal landscape. The base notes of driftwood and hula girl orchid provide a grounding and sensual element, completing the fragrance with a hint of exotic allure. Together, these notes create a captivating scent that embodies the spirit of a tropical getaway.",
    category: "Signature Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:635
  },
  {
    id: 33,
    name: 'Ylang Ylang Scented Candle',
    price: 1749.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2023/06/Ylang-Ylang-1-1000x1500.jpg.webp'],
    description: "Ylang Ylang fragrance is a captivating and exotic scent that embodies floral beauty and sensuality. With its rich and intoxicating aroma, it offers a sweet and slightly spicy opening that immediately captivates the senses. The heart of the fragrance reveals the full bloom of Ylang Ylang flowers, evoking a sense of tropical paradise and bliss. The base notes provide a warm and creamy foundation, adding depth and complexity to the fragrance. Overall, Ylang Ylang fragrance is a luxurious and enchanting composition that invites you to indulge in its irresistible allure.",
    category: "Signature Collection",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:1499
  },
  {
    id: 34,
    name: 'Café Harmony',
    price: 549.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2024/09/4-1000x1000.png.webp'],
    description: "Step into a world of cozy comfort with our Café Harmony Scented Candle, where the rich, inviting aromas of your favourite café treats blend together to create a warm and soothing atmosphere. Perfect for those who cherish the simple pleasures of life, this candle brings the essence of a quiet coffee shop right into your home. Fresh Coffee: The invigorating scent of freshly brewed coffee instantly awakens your senses, filling the air with the robust, earthy notes that coffee lovers crave. It’s the perfect pick-me-up, whether you’re starting your day or winding down. Crème Caramel: A touch of indulgence comes from the creamy, buttery scent of caramel, adding a delicious sweetness that melts into the background, reminiscent of a smooth, luxurious dessert enjoyed at the end of a meal. Vanilla: The warm, comforting essence of vanilla ties everything together, its soft and velvety aroma adding a layer of sweetness that lingers gently in the air, creating a cozy and inviting ambiance. Light this candle to enjoy a moment of pure relaxation and contentment, where the harmonious blend of fresh coffee, crème caramel, and vanilla wraps you in a warm, soothing embrace. Whether you’re curling up with a book, enjoying a quiet morning, or simply unwinding after a long day, Café Harmony brings the comforting essence of your favorite café into your space, making every moment a little more special.",
    category: "combos",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:419
  },
  {
    id: 35,
    name: 'Floral Bouquet',
    price: 549.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2024/09/2-1000x1000.jpg.webp'],
    description: "Immerse yourself in the enchanting embrace of a garden in full bloom with our Floral Bouquet Scented Candle. This delightful blend captures the essence of spring, bringing the beauty and fragrance of a lush floral bouquet into your home.\n- Pink Peony: The scent of freshly bloomed pink peonies introduces a soft, romantic touch, filling the air with a delicate, powdery sweetness that is both uplifting and calming.\n- Tahitian Honey: Adding a warm, golden layer, the subtle sweetness of Tahitian honey weaves through the floral notes, offering a rich, comforting depth that feels like a sun-kissed breeze.\n- Jasmine: Completing the bouquet, the exotic allure of jasmine blossoms lends a sultry, intoxicating aroma, creating a perfect harmony that soothes the senses and elevates the spirit.\nLight this candle to transform any space into a serene floral haven, where the soothing blend of pink peony, Tahitian honey, and jasmine creates a sanctuary of tranquillity and elegance. Whether you’re unwinding after a long day or setting the mood for a special occasion, this candle brings the timeless beauty of a floral bouquet into your everyday life.",
    category: "combos",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:419
  },
  {
    id: 36,
    name: 'Fruit Fantasy',
    price: 549.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2024/09/5-1000x1000.png.webp'],
    description: "Dive into a vibrant world of sweet indulgence with our Fruit Fantasy Scented Candle. This playful and refreshing blend combines the juicy scents of apple, orange, raspberry, watermelon cotton candy, and pink grapefruit, creating a delightful aroma that brightens any space with its fruity and fun essence.\n- Apple, Orange & Raspberry: The invigorating combination of crisp apple, zesty orange, and tart raspberry offers a burst of fresh, fruity delight. This bright and juicy blend captures the essence of a sun-soaked orchard, instantly uplifting your mood with its lively and refreshing scent.\n- Watermelon Cotton Candy: Adding a playful twist, the sweet and nostalgic aroma of watermelon cotton candy brings a light, airy sweetness to the mix. This scent evokes carefree summer days and carnival fun, filling the air with a sugary, mouth-watering scent that’s irresistibly cheerful.\n- Pink Grapefruit: The bold, tangy fragrance of pink grapefruit rounds out the blend with a burst of citrusy freshness. Its slightly tart and energizing aroma adds a vibrant zing, balancing the sweetness with a lively, refreshing note that awakens the senses.\n Light this candle to transform your space into a fruity paradise where every breath is a sweet escape. Fruit Fantasy is perfect for those who love vibrant, fun scents that bring joy and energy into any room. Whether you’re setting the mood for a gathering or simply brightening your day, this candle offers a deliciously fun fragrance experience that’s sure to leave a lasting impression.",
    category: "combos",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:419
  },
  {
    id: 37,
    name: 'Café Harmony',
    price: 549.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2024/09/4-1000x1000.png.webp'],
    description: "Step into a world of cozy comfort with our Café Harmony Scented Candle, where the rich, inviting aromas of your favourite café treats blend together to create a warm and soothing atmosphere. Perfect for those who cherish the simple pleasures of life, this candle brings the essence of a quiet coffee shop right into your home. Fresh Coffee: The invigorating scent of freshly brewed coffee instantly awakens your senses, filling the air with the robust, earthy notes that coffee lovers crave. It’s the perfect pick-me-up, whether you’re starting your day or winding down. Crème Caramel: A touch of indulgence comes from the creamy, buttery scent of caramel, adding a delicious sweetness that melts into the background, reminiscent of a smooth, luxurious dessert enjoyed at the end of a meal. Vanilla: The warm, comforting essence of vanilla ties everything together, its soft and velvety aroma adding a layer of sweetness that lingers gently in the air, creating a cozy and inviting ambiance. Light this candle to enjoy a moment of pure relaxation and contentment, where the harmonious blend of fresh coffee, crème caramel, and vanilla wraps you in a warm, soothing embrace. Whether you’re curling up with a book, enjoying a quiet morning, or simply unwinding after a long day, Café Harmony brings the comforting essence of your favorite café into your space, making every moment a little more special.",
    category: "combos",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:419
  },
  {
    id: 38,
    name: 'Café Harmony',
    price: 549.0,
    images: ['https://candlings.com/wp-content/webp-express/webp-images/uploads/2024/09/4-1000x1000.png.webp'],
    description: "Step into a world of cozy comfort with our Café Harmony Scented Candle, where the rich, inviting aromas of your favourite café treats blend together to create a warm and soothing atmosphere. Perfect for those who cherish the simple pleasures of life, this candle brings the essence of a quiet coffee shop right into your home. Fresh Coffee: The invigorating scent of freshly brewed coffee instantly awakens your senses, filling the air with the robust, earthy notes that coffee lovers crave. It’s the perfect pick-me-up, whether you’re starting your day or winding down. Crème Caramel: A touch of indulgence comes from the creamy, buttery scent of caramel, adding a delicious sweetness that melts into the background, reminiscent of a smooth, luxurious dessert enjoyed at the end of a meal. Vanilla: The warm, comforting essence of vanilla ties everything together, its soft and velvety aroma adding a layer of sweetness that lingers gently in the air, creating a cozy and inviting ambiance. Light this candle to enjoy a moment of pure relaxation and contentment, where the harmonious blend of fresh coffee, crème caramel, and vanilla wraps you in a warm, soothing embrace. Whether you’re curling up with a book, enjoying a quiet morning, or simply unwinding after a long day, Café Harmony brings the comforting essence of your favorite café into your space, making every moment a little more special.",
    category: "combos",
    tags: getRandomTags(),
    discount: getRandomDiscount(),
    discountedPrice:419
  },
  
]