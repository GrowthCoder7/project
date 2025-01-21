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
    price: 549.0,
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
      name: "Apple, Orange & Raspberry Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/07/AOR-1.1-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 24,
      name: "Cool Water Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/07/image00040-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 25,
      name: "Fresh Coffee Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00041-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 26,
      name: "Jasmine Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/07/Jasmine-1.1-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 27,
      name: "Pink Peony Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/07/image00029-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 28,
      name: "Sandalwood Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/07/image00045-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 29,
      name: "Tahitian Honey Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00072-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 30,
      name: "Vanilla Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00019-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 31,
      name: "Water Lily Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00068-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 32,
      name: "Watermelon Cotton Candy Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00035-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 33,
      name: "White Linen Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00052-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    },
    {
      id: 34,
      name: "Winter Nights Scented Candle",
      price: 549.0,
      images: ["https://candlings.com/wp-content/uploads/2023/06/image00081-700x700.jpg"],
      description: "No description",
      category: "Classic Collection",
      tags: getRandomTags(),
      discount: getRandomDiscount(),
      discountedPrice:550
    }
]