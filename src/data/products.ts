import { Product } from '../types';
import { getRandomTags} from '../utils/productUtils';

import pinkGrape1 from "../assets/images/pics/premium/Pink_Grapefruit.jpg"
import pinkGrape2 from "../assets/images/pics/premium/Pink grapefruit 1.1.jpg"
import pinkGrape3 from "../assets/images/pics/premium/pink peony combo.png"
import apple from "../assets/images/pics/premium/Apple, Orange &Raspberry 400 (1).png"
import apple2 from "../assets/images/pics/premium/apple orange raspberry 250.png"
import blueberry from "../assets/images/pics/premium/Blueberry muffin 1.1.jpg"
import blueberry2 from "../assets/images/pics/premium/Blueberry muffin 200.1 .jpg"
import blueberry3 from "../assets/images/pics/premium/Blueberry muffin combo.jpg"
import cleanLinen from "../assets/images/pics/premium/Clean linen 1.1.jpg"
import cleanLinen2 from "../assets/images/pics/premium/Clean Linen 200.1 .jpg"
import creameCaramel from "../assets/images/pics/premium/Crème caramel 1.1.jpg"
import creameCaramel2 from "../assets/images/pics/premium/Crème caramel 200.1 .jpg"
import freshCofee from "../assets/images/pics/premium/fresh coffee 250.png"
import freshCofee2 from "../assets/images/pics/premium/fresh coffee 400.png"
import jasmine from "../assets/images/pics/premium/Jasmine.png"
import jasmine2 from "../assets/images/pics/premium/jasmine 250.png"
import lemon from "../assets/images/pics/premium/Lemon Lime 1.1.jpg"
import lemon2 from "../assets/images/pics/premium/Lemon Lime 200.2.jpg"
import lemon3 from "../assets/images/pics/premium/lemon lime combo.jpg"
import pink from "../assets/images/pics/premium/Pink Peony 250.png"
import pink2 from "../assets/images/pics/premium/Pink Peony 400.png"
import pink3 from "../assets/images/pics/premium/pink peony combo.png"
import salted from "../assets/images/pics/premium/Salted caramel 1.1.jpg"
import salted2 from "../assets/images/pics/premium/Salted caramel 200.1 .jpg"
import salted3 from "../assets/images/pics/premium/Salted caramel combo.jpg"
import sandalwood from "../assets/images/pics/premium/Sandalwood.png"
import sandalwood2 from "../assets/images/pics/premium/sandalwood 250.png"
import sandalwood3 from "../assets/images/pics/premium/sandalwood combo.png"
import vanilla from "../assets/images/pics/premium/vanilla250.png"
import vanilla2 from "../assets/images/pics/premium/Vanilla 400.png"
import vanilla3 from "../assets/images/pics/premium/Vanilla combo.png"
import tahitian from "../assets/images/pics/premium/Tahitian Honey 400.png"
import tahitian2 from "../assets/images/pics/premium/tahitian honey combo.png"
import watermelon from "../assets/images/pics/premium/watermelon cooton candy250.png"
import watermelon2 from "../assets/images/pics/premium/Watermelon cotton candy 400.png"
import watermelon3 from "../assets/images/pics/premium/watermelon cotton candy combo.png"
import whiteLined from "../assets/images/pics/premium/white linen.png"
import whiteLined2 from "../assets/images/pics/premium/white linen 250.png"
import whiteLined3 from "../assets/images/pics/premium/white linen combo.png"
import waterLily from "../assets/images/pics/premium/water lily250.png"
import waterLily2 from "../assets/images/pics/premium/Water Lily 400.png"
import waterLily3 from "../assets/images/pics/premium/water lily combo.png"
import winterNight from "../assets/images/pics/premium/winter nights 400.png"
import winterNight2 from "../assets/images/pics/premium/winter nights 250.png"
import winterNight3 from "../assets/images/pics/premium/winter nights combo.png"
import coconut from "../assets/images/pics/premium/Coconut melon 1.1.jpg"
import coconut2 from "../assets/images/pics/premium/Coconut melon 200.1 .jpg"
import coconut3 from "../assets/images/pics/premium/Coconut melon combo.jpg"
import coolWater from "../assets/images/pics/premium/Cool Water 400.png"
import coolWater2 from "../assets/images/pics/premium/cool water 250.png"
import coolWater3 from "../assets/images/pics/premium/cool water combo.png"
import bulgarian from "../assets/images/pics/signature/Bulgarian_Rose.png"
import darkRum from "../assets/images/pics/signature/DarkRum.png"
import dolce from "../assets/images/pics/signature/dolce.png"
import hawain from "../assets/images/pics/signature/Hawain.png"
import persian from "../assets/images/pics/signature/Persian.png"
import vera from "../assets/images/pics/signature/Vera.png"
import wine from "../assets/images/pics/signature/Wine.png"
// import ylang from "../assets/images/pics/signature/Ylang.png"

export const products: Product[] = 
[
  {
      id: 1,
      name: "Blueberry Muffin Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[blueberry,blueberry2,blueberry3],
      description: "This fragrance opens with a vibrant burst of citrus and fruity notes, combining the zesty aroma of orange peel, the juicy sweetness of blueberry, and the refreshing tang of lemon zest. The mid notes unfold with a delightful blend of blackberry, spun sugar, and creamy milky undertones, evoking a sense of indulgence and sweetness. The base notes provide a warm and comforting foundation, with the creamy essence of vanilla cream, the luscious sweetness of drizzled caramel, and the woody touch of sandalwood. Together, these notes create a deliciously sweet and comforting fragrance that is both uplifting and cozy",
      category: "Classic Collection",
      length: 9,
      width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Orange Peel",
              " Blueberry",
              " Lemon Zest"
          ],
          midNotes: [
              "Blackberry",
              " Spun Sugar",
              " Milky Notes"
          ],
          baseNotes: [
              "Vanilla Cream",
              " Drizzled Caramel",
              " Sandalwood"
          ]
      }
  },
  {
      id: 2,
      name: "Bulgarian Rose Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[bulgarian],
      description: "This fragrance opens with a delicate and romantic combination of soft rose petals, white violet, and wild strawberry, creating a sweet and floral introduction. The mid notes introduce a fresh and elegant bouquet, blending pink geranium, lily of the valley, and dewy rose bud, evoking a sense of grace and femininity. The base notes provide a warm and sensual foundation, with the silky musk, iris, and clove bud adding depth and allure to the fragrance. Together, these notes create a harmonious and captivating fragrance that is both romantic and sophisticated",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250ml"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Soft Rose Petals",
              " White Violet",
              " Wild Strawberry"
          ],
          midNotes: [
              "Pink Geranium",
              " Lily of the Valley",
              " Dewy Rose Bud"
          ],
          baseNotes: [
              "Silky Musk",
              " Iris",
              " Clove Bud"
          ]
      }
  },
  {
      id: 3,
      name: "Clean Linen Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[cleanLinen,cleanLinen2],
      description: "This fragrance opens with a delicate and soothing blend of chamomile, lily, and freesia, creating a serene and calming atmosphere. The mid notes introduce the elegant and floral accord of gardenia, iris root, and white flowers, adding a touch of sophistication and grace. The base notes provide a creamy and comforting foundation, with the notes of Madagascar vanilla and white musk imparting a sense of warmth and sensuality. Together, these notes create a harmonious and enchanting fragrance that is both serene and effortlessly elegant",
      category: "Classic Collection",
      length: 9,
      width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Chamomile",
              " Lily",
              " Freesia"
          ],
          midNotes: [
              "Gardenia",
              " Iris Root",
              " White Flowers"
          ],
          baseNotes: [
              "Madagascar Vanilla",
              " White Musk"
          ]
      }
  },
  {
      id: 4,
      name: "Dark Rum Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[darkRum],
      description: "This fragrance opens with a refreshing burst of lime, combined with the tropical and creamy aroma of coconut and the soothing floral notes of lavender. As the fragrance develops, the mid notes of jasmine and dark rum accord add a touch of sensuality and intrigue. The base notes of sandalwood, vetiver, cedar, patchouli, tonka, and cashmere musk create a warm and woody foundation, enveloping the scent with depth and complexity. Together, these notes blend harmoniously to create a captivating fragrance that is both refreshing and alluring, evoking a sense of tropical paradise and sophistication",
      category: "Signature Collection",
      length: 9,
      width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Lime",
              " Coconut & Lavender"
          ],
          midNotes: [
              "Jasmin",
              " Dark Rum Accord"
          ],
          baseNotes: [
              "Sandalwood",
              " Vetiver",
              " Cedar",
              " Patchouli",
              " Tonka & Cashmere Musk"
          ]
      }
  },
  {
      id: 5,
      name: "Fresh Coffee Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[freshCofee,freshCofee2],
      description: "This fragrance begins with a sweet and indulgent combination of sugarcane and whipped cream, evoking a sense of sugary delight. As the fragrance develops, milky notes and roasted coffee bean emerge, creating a comforting and cozy aroma reminiscent of a delicious coffeehouse treat. The base notes of vanilla cr\u945de, oak, sandalwood, and anise add depth and warmth, leaving a lingering and inviting trail. Together, these notes create a rich and creamy scent that is both comforting and enticing, enveloping you in a sweet and aromatic embrace",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Sugarcane",
              " Whipped Cream"
          ],
          midNotes: [
              "Milky Notes",
              " Roasted Coffee Bean"
          ],
          baseNotes: [
              "Vanilla Cr\u945de",
              " Oak",
              " Sandalwood",
              " Anise"
          ]
      }
  },
  {
      id: 6,
      name: "Hawaiian Breeze Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[hawain],
      description: "This fragrance is a vibrant and tropical blend that transports you to a lush paradise. The top notes of lime, mandarin, mango, apple, and fei banana leaves create a refreshing and fruity opening, energizing your senses. The mid notes of jasmine, cyclamen, and shore juniper add a floral and aromatic touch, evoking the beauty of a coastal landscape. The base notes of driftwood and hula girl orchid provide a grounding and sensual element, completing the fragrance with a hint of exotic allure. Together, these notes create a captivating scent that embodies the spirit of a tropical getaway",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Lime",
              " Mandarin",
              " Mango",
              " Apple",
              " Fei Banana Leaves"
          ],
          midNotes: [
              "Jasmin",
              " Cyclamen",
              " Shore Juniper"
          ],
          baseNotes: [
              "Driftwood",
              " Hula Girl Orchid"
          ]
      }
  },
  {
      id: 7,
      name: "Pink Grapefruit Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[pinkGrape1,pinkGrape2,pinkGrape3],
      description: "This fragrance opens with a burst of refreshing citrus notes, including bergamot, grapefruit, lemon rind, and citron. These vibrant top notes create an invigorating and uplifting atmosphere. In the middle, pink grapefruit, iris, and light ozonic notes add a touch of brightness and a subtle floral aspect to the composition. The base notes of sugar cane, vanilla, and cypress bring a warm and comforting element, balancing the citrus and floral accords. The overall result is a harmonious blend that is both energizing and soothing, perfect for those who seek a fresh and uplifting fragrance experience",
      category: "Classic Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Bergamot",
              " Grapefruit",
              " Lemon Rind",
              " Citron"
          ],
          midNotes: [
              "Pink Grapefruit",
              " Iris",
              " Light Ozonic"
          ],
          baseNotes: [
              "Sugar Cane",
              " Vanilla",
              " Cypress"
          ]
      }
  },
  {
      id: 8,
      name: "Salted Caramel Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[salted,salted2,salted3],
      description: "This fragrance is a delectable and indulgent treat for the senses. The top notes offer a delightful combination of sweet buttery aromas with a hint of salt, creating a mouthwatering sensation. In the middle, creamy caramel, luscious coconut, and irresistible candied pecan notes come together, evoking the richness of a decadent dessert. The base notes bring warmth and comfort with the sweet essence of vanilla sugar, the comforting aroma of toasted tonka, and the creamy allure of condensed milk. This fragrance is a true favorite, captivating with its irresistible gourmand blend",
      category: "Classic Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Sweet Butter",
              " Salty Nuances"
          ],
          midNotes: [
              "Cream Caramel",
              " Coconut & Candied Pecan"
          ],
          baseNotes: [
              "Vanilla Sugar",
              " Toasted Tonka & Condensed Milk"
          ]
      }
  },
  {
      id: 9,
      name: "Tahitian Honey Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[tahitian,tahitian2],
      description: "This fragrance opens with a burst of tropical berries, tangy red currant, and the rich aroma of acai berry, creating a juicy and vibrant introduction. The middle notes reveal a delightful combination of sweet honey, delicate rose petals, and fresh greens, adding a touch of floral elegance and natural freshness to the composition. Finally, the base notes wrap the scent in a warm embrace of creamy musk and sweet vanilla, providing a comforting and sensual finish. This fragrance is a harmonious blend of fruity, floral, and creamy notes, evoking a sense of tropical bliss and natural beauty",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Tropical Berries",
              " Red Currant",
              " Acai Berry"
          ],
          midNotes: [
              "Sweet Honey",
              " Rose Petals",
              " Fresh Greens"
          ],
          baseNotes: [
              "Musk Vanilla"
          ]
      }
  },
  {
      id: 10,
      name: "Vanilla Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[vanilla,vanilla2,vanilla3],   
      description: "This fragrance opens with a burst of tropical berries, tangy red currant, and the rich aroma of acai berry, creating a juicy and vibrant introduction. The middle notes reveal a delightful combination of sweet honey, delicate rose petals, and fresh greens, adding a touch of floral elegance and natural freshness to the composition. Finally, the base notes wrap the scent in a warm embrace of creamy musk and sweet vanilla, providing a comforting and sensual finish. This fragrance is a harmonious blend of fruity, floral, and creamy notes, evoking a sense of tropical bliss and natural beauty",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Fuji Apple",
              " Anise"
          ],
          midNotes: [
              "Heliotrope",
              " Creamy Coconut"
          ],
          baseNotes: [
              "Caramelized Sugar",
              " Buttery Vanilla"
          ]
      }
  },
  {
      id: 11,
      name: "Vera Wang Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[vera],
      description: "This fragrance opens with a burst of citrus freshness, combining lemon, lime, mandarin, bergamot, and pineapple for a vibrant and invigorating top note. The mid notes reveal a floral bouquet, blending lily of the valley, gardenia, jasmine, rose, and iris, lending a delicate and feminine touch to the composition. The base notes provide a warm and sensual foundation, with the earthiness of sandalwood and patchouli, the richness of amber, and the softness of musk. Together, these notes create a harmonious fragrance that is both uplifting and sophisticated",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Lemon",
              " Lime",
              " Mandarin",
              " Bergamot",
              " Pineapple"
          ],
          midNotes: [
              "Lily Of The Valley",
              " Gardenia",
              " Jasmin",
              " Rose & Iris"
          ],
          baseNotes: [
              "Sandalwood",
              " Patchouli",
              " Amber & Musk"
          ]
      }
  },
  {
      id: 12,
      name: "Water Lily Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[waterLily,waterLily2,waterLily3],
      description: "This fragrance opens with a captivating burst of Absolute Jasmine, Orange Zest, and Freesia, creating a bright and floral introduction. The heart of the scent features notes of Bitter Orange, Water Lily, and Muguet, adding a refreshing and aquatic aspect to the composition. The base notes of Floral Musk, Blondewoods, and Ozone Accord provide a soft and sensual foundation, enhancing the overall floral character of the fragrance. Together, these notes combine to create a harmonious and uplifting scent experience that evokes a sense of floral elegance and freshness",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Absolute Jasmine",
              " Orange Zest",
              " Freesia"
          ],
          midNotes: [
              "Bitter Orange",
              " Water Lily",
              " Muguet"
          ],
          baseNotes: [
              "Floral Musk",
              " Blondewoods",
              " Ozone Accord"
          ]
      }
  },
  {
      id: 13,
      name: "Watermelon Cotton Candy Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[watermelon,watermelon2,watermelon3],
      description: "This fragrance starts with a bright and zesty combination of Lemon Sugar, Sugar Baby Watermelon, and Red Berry, creating a vibrant and sweet opening. As it develops, the scent transitions into juicy and fruity notes of Juicy Peach and Raspberry Sugar, adding a deliciously mouthwatering quality. The base notes of Coconut Sugar and Vanilla Sugarcane provide a creamy and sweet foundation, imparting a warm and comforting feel to the fragrance. Overall, this scent captures the essence of a refreshing and sweet summer treat, perfect for those seeking a delightful and uplifting fragrance experience",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Lemon Sugar",
              " Sugar Baby Watermelon",
              " Red berry"
          ],
          midNotes: [
              "Juicy Peach",
              " Raspberry Sugar"
          ],
          baseNotes: [
              "Coconut Sugar",
              " Vanilla Sugarcane"
          ]
      }
  },
  {
      id: 14,
      name: "White Linen Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[whiteLined,whiteLined2,whiteLined3],
      description: "This fragrance opens with a light and fresh blend of Airy Aldehydes, Lemon, Peach, and Carnation, creating a vibrant and invigorating introduction. The heart of the scent is a rich bouquet of Hyacinth, Muguet, Rose, Lilac, Jasmin, Iris, Orris, Violet, and Ylang, which adds a floral complexity and elegance. The base notes of Sandalwood, Cedar, Vetiver, Oakmoss, Benzoin Resin, Tonka, and Sheer Amber provide a warm and earthy foundation, giving the fragrance depth and longevity. Overall, this fragrance offers a harmonious combination of citrus, floral, and woody notes for a sophisticated and captivating olfactory experience.",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Airy Aldehydes",
              " Lemon",
              " Peach",
              " Carnation"
          ],
          midNotes: [
              "Hyacinth",
              " Muguet",
              " Rose",
              " Lilac",
              " Jasmin",
              " Iris",
              " Orris",
              " Violet",
              " Ylang"
          ],
          baseNotes: [
              "Sandalwood",
              " Cedar",
              " Vetiver",
              " Oakmoss",
              " Benzoin Resin",
              " Tonka",
              " Sheer Amber"
          ]
      }
  },
  {
      id: 15,
      name: "Wine & Roses Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[wine],
      description: "This fragrance opens with a zesty burst of Lemon, Lime, Orange, Clove, and Cinnamon, creating a lively and invigorating sensation. The heart of the scent reveals the delicate yet rich notes of Chardonnay Grape and Bulgarian Rose, adding a touch of elegance and floral sweetness. The base notes of Nutmeg, Sugarcane, and Vanilla provide a warm and comforting foundation, adding a hint of spice and sweetness. Together, these notes blend harmoniously to create a captivating and uplifting fragrance that is both refreshing and inviting",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Lemon",
              " Lime",
              " Orange",
              " Clove",
              " Cinnamon"
          ],
          midNotes: [
              "Chardonnay Grape",
              " Bulgarian Rose"
          ],
          baseNotes: [
              "Nutmeg",
              " Sugarcane",
              " Vanilla"
          ]
      }
  },
  {
      id: 16,
      name: "Winter Nights Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[winterNight,winterNight2,winterNight3],
      description: "This fragrance is a sophisticated blend of aromatic layers. The top notes of bergamot and clean ozonic create a fresh and airy opening, setting the stage for the fragrance experience. The mid notes of osmanthus and geranium add a floral touch, imparting a sense of elegance and femininity. The heart of the fragrance is complemented by warm, woody bottom notes that bring depth and richness. The smoothness of vanilla bean harmoniously balances the composition, creating a comforting and alluring scent that lingers on the skin",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Bergamot & Clean Ozonic"
          ],
          midNotes: [
              "Osmanthus & Geranium"
          ],
          baseNotes: [
              "Woody & Balanced With Vanilla Bean"
          ]
      }
  },
  {
      id: 17,
      name: "Coconut Melon Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[coconut,coconut2,coconut3],
      description: "This fragrance opens with a burst of refreshing citrus, sweet orange, and juicy melon, creating a lively and invigorating sensation. The mid notes reveal a tropical paradise with the creamy and exotic essence of coconut, the delicate floral tones of ylang-ylang and jasmine, and a hint of fresh greens. As the fragrance settles, the base note of vanilla adds a warm and comforting touch, creating a harmonious and inviting blend. Together, these notes evoke a sense of sunny days, tropical landscapes, and a hint of sweetness, making it a delightful and uplifting fragrance choice",
      category: "Classic Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Orange",
              " Citrus",
              " Melon"
          ],
          midNotes: [
              "Coconut",
              " Ylang Ylang",
              " Jasmine",
              " Floral",
              " Greens"
          ],
          baseNotes: [
              "Vanilla"
          ]
      }
  },
  {
      id: 18,
      name: "Lemon Lime Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[lemon,lemon2,lemon3],
      description: "This fragrance is a zesty and invigorating blend that awakens the senses. The top notes of lemon, lime, ginger, and peppermint create a refreshing and citrusy burst, offering a vibrant and uplifting experience. The mid notes of litsea cubeba and orange blossom add a touch of floral and aromatic sweetness, balancing the bright citrus with a delicate floral nuance. The dry notes of cedarwood, raw vanilla, and citrus musk provide a warm and comforting base, leaving a subtle and lingering trail. Together, these notes create a dynamic and refreshing fragrance that is both energizing and comforting",
      category: "Classic Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Lemon",
              " Lime",
              " Ginger",
              " Peppermint"
          ],
          midNotes: [
              "Litsea Cubeba",
              " Orange Blossom"
          ],
          baseNotes: [
              "Cedarwood",
              " Raw Vanilla",
              " Citrus Musk"
          ]
      }
  },
  {
      id: 19,
      name: "Creme Caramel Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[creameCaramel,creameCaramel2],
      description: "This fragrance begins with the comforting and nutty aroma of almond, instantly creating a sense of warmth and familiarity. As the fragrance develops, creamy milk and butter notes emerge, adding a smooth and indulgent quality. The base notes of vanilla and sweet caramel provide a delightful sweetness and richness, reminiscent of a delectable dessert. Together, these notes form a harmonious blend that is creamy, comforting, and irresistibly sweet. The fragrance envelops you in a cozy and nostalgic ambiance, evoking feelings of comfort and satisfaction",
      category: "Classic Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "100 mL",
          " 200 mL"
      ],
      burnTime: "28 Hours (100 ml), 40 Hours (200 ml)",
      fragranceNotes: {
          topNotes: [
              "Almond"
          ],
          midNotes: [
              "Creamy Milk",
              " Butter"
          ],
          baseNotes: [
              "Vanilla & Sweet Caramel"
          ]
      }
  },
  {
      id: 20,
      name: "Apple, Organge & Raspberry Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[apple,apple2],
      description: "This fragrance starts with the crisp and juicy aroma of red apple and the bright and citrusy notes of orange, creating a refreshing and invigorating opening. The mid notes reveal a delicate and romantic floral bouquet, combining the elegance of rose with the sweet and tangy allure of raspberry. The base notes provide a warm and comforting foundation, with the creamy and sweet essence of vanilla. Together, these notes create a harmonious fragrance that is fruity, floral, and subtly sweet, offering a delightful and enchanting olfactory experience",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Red Apple",
              " Orange"
          ],
          midNotes: [
              "Rose",
              " Raspberry"
          ],
          baseNotes: [
              "Vanilla"
          ]
      }
  },
  {
      id: 21,
      name: "Dolce & Gabanna Type Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[dolce],
      description: "This fragrance opens with a burst of effervescent Sparkling Aldehydes, complemented by the freshness of Bergamot, Mandarin, Basil, Freesia, and Coriander. The heart of the fragrance blooms with a beautiful bouquet of Carnation, Orange Blossom, Muguet, Jasmine, and Rose, adding a floral and sensual touch. The base notes of Sandalwood, Tonka, Vanilla, and Musk provide a warm and inviting foundation, leaving a trail of sophistication and allure. Together, these notes create a harmonious and captivating fragrance that is both vibrant and elegant, making it a perfect choice for those seeking a timeless and sophisticated scent.",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Sparkling Aldehydes",
              " Bergamot",
              " Mandarin",
              " Basil",
              " Freesia & Coriander"
          ],
          midNotes: [
              "Carnation",
              " Orange Blossom",
              " Muguet",
              " Jasmine & Rose"
          ],
          baseNotes: [
              "Sandalwood",
              " Tonka",
              " Vanilla & Musk"
          ]
      }
  },
  {
      id: 22,
      name: "Persian Lime & Lemongrass Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[persian],
      description: "This fragrance opens with a zesty and invigorating combination of Meyer Lemon, Persian Lime, and Coriander, creating a vibrant and citrusy introduction. The heart of the scent features Litsea Cubeba and Crushed Greens, adding a fresh and herbaceous quality that is both uplifting and soothing. The base note of Cedarwood provides a warm and grounding foundation, adding depth and sophistication to the fragrance. Together, these notes blend harmoniously to create a refreshing and invigorating scent experience that evokes a sense of vitality and natural serenity.",
      category: "Signature Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "250 mL"
      ],
      burnTime: "Upto 40 Hours",
      fragranceNotes: {
          topNotes: [
              "Meyer Lemon",
              " Persian Lime & Coriander"
          ],
          midNotes: [
              "Litsea Cubeba & Crushed Greens"
          ],
          baseNotes: [
              "Cedarwood"
          ]
      }
  },
  {
      id: 23,
      name: "Cool Water Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[coolWater,coolWater2,coolWater3],
      description: "This fragrance opens with an invigorating blend of Rosemary, Coriander, Watermint, Fresh Cut Greens, and a touch of Sea Spray Accord, creating a refreshing and herbal introduction. The heart of the scent features Lavender, Geranium, Jasmin, and Neroli, adding a floral and aromatic touch that is both soothing and uplifting. The base notes of Tobacco, Oakmoss, Cedar, Amber, and Musk provide a warm and grounding foundation, adding depth and sophistication to the fragrance. Together, these notes create a captivating and balanced composition that evokes a sense of natural serenity and timeless elegance.",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Rosemary",
              " Coriander",
              " Watermint",
              " Fresh Cut Greens",
              " Sea Spray Accord"
          ],
          midNotes: [
              "Lavender",
              " Geranium",
              " Jasmin",
              " Neroli"
          ],
          baseNotes: [
              "Tobacco",
              " Oakmoss",
              " Cedar",
              " Amber",
              " Musk"
          ]
      }
  },
  {
      id: 24,
      name: "Jasmine Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[jasmine,jasmine2],
      description: "This fragrance opens with the captivating aroma of Absolute Jasmine and the zestiness of Orange Zest, creating a bright and floral introduction. The mid notes feature the bitterness of Bitter Orange and the sweet warmth of Madagascar Vanilla, adding depth and complexity to the composition. The base notes of Honey and Musk provide a sensual and comforting foundation, leaving a lingering and seductive trail. Together, these notes create a harmonious and alluring fragrance that balances floral, citrus, and gourmand elements, inviting you to indulge in its irresistible charm.",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Absolute Jasmine & Orange Zest"
          ],
          midNotes: [
              "Bitter Orange & Madagascar Vanilla"
          ],
          baseNotes: [
              "Honey & Musk Notes"
          ]
      }
  },
  {
      id: 25,
      name: "Pink Peony Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[pink,pink2,pink3],
      description: "This fragrance opens with a delightful blend of Pink Sugar, Red Currant, and Pomegranate, creating a sweet and fruity introduction. The mid notes feature the luscious aroma of Peach, the delicate floral essence of Peony and Pink Geranium, and the warm and earthy notes of Ambergris and Tonka Bean. The base notes of Vanilla Bean, Musk, and Amber provide a comforting and sensual foundation, leaving a warm and enticing trail. Together, these notes create a captivating and harmonious fragrance that is both sweet and sophisticated, evoking a sense of joy and allure.",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Pink Sugar",
              " Red Currant",
              " Pomegranate"
          ],
          midNotes: [
              "Peach",
              " Peony",
              " Ambergris",
              " Tonka Bean",
              " Pink Geranium"
          ],
          baseNotes: [
              "Vanilla Bean",
              " Musk",
              " Amber"
          ]
      }
  },
  {
      id: 26,
      name: "Sandalwood Scented Candle",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[sandalwood,sandalwood2,sandalwood3],
      description: "This fragrance opens with a delicate and floral combination of Honeysuckle and Geranium, creating a sweet and captivating top note. The mid notes reveal the earthy and aromatic tones of Oakmoss, Tonka Bean, and Rosewood, adding depth and richness to the composition. The base notes of Sandalwood, White Amber, Musk, and Vetiver provide a warm and sensual foundation, leaving a lingering and enchanting trail. Together, these notes create a harmonious and sophisticated fragrance that exudes elegance and allure, capturing the essence of natural beauty and sensuality.",
      category: "Premium Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [
          "200 mL",
          " 400 mL"
      ],
      burnTime: "40 Hours (200 ml), 70 Hours (400 ml)",
      fragranceNotes: {
          topNotes: [
              "Honeysuckle & Geranium"
          ],
          midNotes: [
              "Oakmoss",
              " Tonka Bean & Rosewood"
          ],
          baseNotes: [
              "Sandalwood",
              " White Amber",
              " Musk & Vetiver"
          ]
      }
  },
  {
      id: 27,
      name: "Fresh Coffee Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with a sweet blend of sugarcane and whipped cream in the top notes, creating a delectably creamy start. The heart combines milky notes with the rich aroma of roasted coffee beans. The base notes of vanilla cr\u945de, oak, sandalwood, and a hint of anise offer a warm and comforting depth, resulting in a delightful and cozy aroma.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 28,
      name: "Water Lily Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance unfolds with the enchanting notes of absolute jasmine, zesty orange zest, and delicate freesia in the top notes. The heart combines the bitterness of orange, the aquatic freshness of water lily, and the grace of muguet. The base notes of floral musk, blondewoods, and an ozone accord provide a soft and airy finish, resulting in a beautifully balanced and sophisticated scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 29,
      name: "Vera Wang Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with a vibrant blend of zesty lemon, lime, mandarin, bergamot, and the tropical sweetness of pineapple in the top notes, creating a bright and invigorating introduction. The heart reveals a lush bouquet with lily of the valley, gardenia, jasmin, rose, and iris. The base notes of sandalwood, patchouli, amber, and musk provide a warm and comforting depth, resulting in a harmonious and timeless scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 30,
      name: "Sandalwood Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with the sweet allure of honeysuckle and the freshness of geranium in the top notes. The heart combines the earthiness of oakmoss, the warmth of tonka bean, and the richness of rosewood. The base notes of sandalwood, white amber, musk, and vetiver create a grounding and sophisticated aroma, resulting in a beautifully balanced and complex scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 31,
      name: "Vanilla Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance commences with the crispness of Fuji apple and the warmth of anise in the top notes. The heart combines the floral sweetness of heliotrope with the creamy allure of coconut. The base notes of caramelized sugar and buttery vanilla create a luscious and comforting aroma, offering a delightful and cozy scent experience.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 32,
      name: "Pink Grapefruit Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with a vibrant burst of bergamot, grapefruit, lemon rind, and citron in the top notes, creating a zesty and refreshing introduction. The heart combines pink grapefruit, iris, and light ozonic notes, imparting a fresh and airy quality. The base notes of sugar cane, vanilla, and cypress add a subtle sweetness and woody depth, rounding out this invigorating scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 33,
      name: "Hawaiian Breeze Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with a tropical burst of lime, mandarin, mango, and apple, accented by fei banana leaves for a fruity and exotic introduction. The heart combines the floral elegance of jasmine and cyclamen with a touch of shore juniper. The base notes of driftwood and hula girl orchid create a beachy and captivating aroma, evoking a sense of coastal paradise.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 34,
      name: "Cool Water Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance starts with an invigorating blend of rosemary, coriander, watermint, fresh-cut greens, and a hint of sea spray accord in the top notes, offering a refreshing and outdoorsy beginning. The heart combines floral notes of lavender, geranium, jasmine, and neroli. The base notes of tobacco, oakmoss, cedar, amber, and musk create a warm and masculine depth, resulting in a well-balanced and captivating scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 35,
      name: "Pink Peony Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance opens with a burst of sweet pink sugar, tangy red currant, and luscious pomegranate in the top notes, creating a vibrant and fruity introduction. The heart combines the richness of peach, the floral elegance of peony, and the depth of ambergris, tonka bean, and pink geranium. The base notes of vanilla bean, musk, and amber provide a warm and sensuous finish, resulting in a complex and alluring scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 36,
      name: "Jasmine Scented Candle (Shot Glass)",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "This fragrance begins with the captivating allure of absolute jasmine and the zesty brightness of orange zest in the top notes. The heart combines the bitterness of orange with the warmth of Madagascar vanilla. The base notes of honey and musk add a sweet and sensuous depth, resulting in a beautifully balanced and enticing scent.",
      category: "Shot Glass Collection",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 37,
      name: "Floral Bouquet",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Immerse yourself in the enchanting embrace of a garden in full bloom with our Floral Bouquet Scented Candle. This delightful blend captures the essence of spring, bringing the beauty and fragrance of a lush floral bouquet into your home.n<ul>n \t<li>Pink Peony: The scent of freshly bloomed pink peonies introduces a soft, romantic touch, filling the air with a delicate, powdery sweetness that is both uplifting and calming.</li>n \t<li>Tahitian Honey: Adding a warm, golden layer, the subtle sweetness of Tahitian honey weaves through the floral notes, offering a rich, comforting depth that feels like a sun-kissed breeze.</li>n \t<li>Jasmine: Completing the bouquet, the exotic allure of jasmine blossoms lends a sultry, intoxicating aroma, creating a perfect harmony that soothes the senses and elevates the spirit.</li>n</ul>nLight this candle to transform any space into a serene floral haven, where the soothing blend of pink peony, Tahitian honey, and jasmine creates a sanctuary of tranquillity and elegance. Whether you're unwinding after a long day or setting the mood for a special occasion, this candle brings the timeless beauty of a floral bouquet into your everyday life.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 38,
      name: "Cafe Harmony",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Step into a world of cozy comfort with our Cafe Harmony Scented Candle, where the rich, inviting aromas of your favourite caf?treats blend together to create a warm and soothing atmosphere. Perfect for those who cherish the simple pleasures of life, this candle brings the essence of a quiet coffee shop right into your home.n<ul>n \t<li>Fresh Coffee: The invigorating scent of freshly brewed coffee instantly awakens your senses, filling the air with the robust, earthy notes that coffee lovers crave. It\u62af the perfect pick-me-up, whether you\u62aee starting your day or winding down.</li>n \t<li>Cr\u945de Caramel: A touch of indulgence comes from the creamy, buttery scent of caramel, adding a delicious sweetness that melts into the background, reminiscent of a smooth, luxurious dessert enjoyed at the end of a meal.</li>n \t<li>Vanilla: The warm, comforting essence of vanilla ties everything together, its soft and velvety aroma adding a layer of sweetness that lingers gently in the air, creating a cozy and inviting ambiance.</li>n</ul>nLight this candle to enjoy a moment of pure relaxation and contentment, where the harmonious blend of fresh coffee, cr\u945de caramel, and vanilla wraps you in a warm, soothing embrace. Whether you\u62aee curling up with a book, enjoying a quiet morning, or simply unwinding after a long day, Caf?Harmony brings the comforting essence of your favorite caf?into your space, making every moment a little more special.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 39,
      name: "Timeless Beauty",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Indulge in the exquisite charm of nature\u62af most elegant blooms with our Timeless Beauty Scented Candle. This luxurious blend brings together the refined scents of Bulgarian rose, Japanese cherry blossom, and water lily to create an atmosphere of pure sophistication and tranquillity. Each fragrance harmonizes perfectly, offering a serene and captivating experience that lingers in the air.n<ul>n \t<li>Bulgarian Rose: Known as the queen of flowers, Bulgarian rose delivers a rich, velvety aroma that is both deep and romantic. Its timeless scent captures the essence of classic elegance, filling your space with a luxurious floral bouquet that symbolizes love and beauty.</li>n \t<li>Japanese Cherry Blossom: The delicate and sweet fragrance of Japanese cherry blossom adds a light, airy note to the blend. This scent evokes the fleeting beauty of spring, bringing a touch of freshness and serenity that complements the richness of the rose.</li>n \t<li>Water Lily: Completing this graceful trio is the serene and aquatic scent of water lily. With its subtle, calming aroma, water lily introduces a gentle, refreshing floral note that enhances the overall tranquillity of the candle, creating a balanced and harmonious scent profile.</li>n</ul>nLight this candle to immerse yourself in a sanctuary of elegance and calm. Timeless Beauty captures the essence of nature\u62af most revered flowers, offering a sophisticated and peaceful ambiance that soothes the mind and elevates the spirit. Perfect for moments of relaxation, meditation, or creating a serene atmosphere, this candle brings the enduring charm of a timeless floral garden into your home.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 40,
      name: "Romantic Waves",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Let the gentle ebb and flow of romance wash over you with our Romantic Waves Scented Candle. This captivating blend combines the fresh serenity of cool water, the passionate allure of wine and roses, and the tropical warmth of a Hawaiian breeze, creating a fragrance that evokes the beauty and magic of a romantic getaway by the sea.n<ul>n \t<li>Cool Water: The refreshing scent of cool water captures the essence of a tranquil ocean breeze, bringing a clean, invigorating aroma that soothes the senses and evokes the calming rhythm of waves lapping against the shore.</li>n \t<li>Wine &amp; Roses: Infusing the candle with passion and elegance, the scent of wine and roses offers a rich, velvety aroma. The deep, romantic notes of aged wine blend seamlessly with the timeless fragrance of blooming roses, creating a harmonious balance of love and luxury.</li>n \t<li>Hawaiian Breeze: Completing the blend is the exotic warmth of a Hawaiian breeze, which introduces a light, tropical sweetness. With hints of lush florals and ripe fruits, this scent transports you to a sun-kissed paradise, adding a carefree, breezy vibe to the romantic atmosphere.</li>n</ul>nLight this candle to drift away on the romantic waves of your imagination, where every breath brings a sense of peace, passion, and paradise. Romantic Waves is perfect for setting the mood for a special evening or simply creating a serene, love-filled ambiance in your space. Let the blend of cool water, wine and roses, and Hawaiian breeze carry you to a place where romance and relaxation meet in perfect harmony.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 41,
      name: "Iconic Charm",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Experience the allure of timeless elegance with our Iconic Charm Scented Candle, a sophisticated blend that captures the essence of luxury and style. This candle combines the distinct and memorable fragrances inspired by Dolce &amp; Gabbana, patchouli, and Vera Wang, creating a captivating aroma that exudes confidence and refinement.n<ul>n \t<li>Dolce &amp; Gabbana Type: Inspired by the classic fragrance, this scent brings a bold and captivating aroma that is both modern and timeless. It weaves together rich notes of citrus and spice, enveloping your space in a warm, inviting embrace that resonates with style and sophistication.</li>n \t<li>Patchouli Type: The earthy, aromatic scent of patchouli adds depth and mystery to the blend. Known for its grounding and calming properties, patchouli introduces a rich, woody note that balances the brighter elements, creating a complex and intriguing fragrance.</li>n \t<li>Vera Wang Type: Inspired by the elegance of Vera Wang\u62af signature fragrance, this scent adds a touch of romance and grace. With its delicate floral notes, it brings a light, airy sweetness that elevates the entire blend, leaving a lingering impression of sophistication and charm.</li>n</ul>nLight this candle to surround yourself with an air of refined luxury and timeless appeal. Iconic Charm is perfect for those who appreciate the finer things in life and seek to create an atmosphere of elegance and allure in their space. Whether you\u62aee unwinding after a long day or setting the mood for a special occasion, this candle delivers a scent experience that is both distinctive and unforgettable.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 42,
      name: "Fruit Fantasy",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Dive into a vibrant world of sweet indulgence with our Fruit Fantasy Scented Candle. This playful and refreshing blend combines the juicy scents of apple, orange, raspberry, watermelon cotton candy, and pink grapefruit, creating a delightful aroma that brightens any space with its fruity and fun essence.n<ul>n \t<li>Apple, Orange &amp; Raspberry: The invigorating combination of crisp apple, zesty orange, and tart raspberry offers a burst of fresh, fruity delight. This bright and juicy blend captures the essence of a sun-soaked orchard, instantly uplifting your mood with its lively and refreshing scent.</li>n \t<li>Watermelon Cotton Candy: Adding a playful twist, the sweet and nostalgic aroma of watermelon cotton candy brings a light, airy sweetness to the mix. This scent evokes carefree summer days and carnival fun, filling the air with a sugary, mouth-watering scent that\u62af irresistibly cheerful.</li>n \t<li>Pink Grapefruit: The bold, tangy fragrance of pink grapefruit rounds out the blend with a burst of citrusy freshness. Its slightly tart and energizing aroma adds a vibrant zing, balancing the sweetness with a lively, refreshing note that awakens the senses.</li>n</ul>nLight this candle to transform your space into a fruity paradise where every breath is a sweet escape. Fruit Fantasy is perfect for those who love vibrant, fun scents that bring joy and energy into any room. Whether you\u62aee setting the mood for a gathering or simply brightening your day, this candle offers a deliciously fun fragrance experience that\u62af sure to leave a lasting impression.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  },
  {
      id: 43,
      name: "Mystic Nights",
      price:199,
      discountedPrice:159,
      tags:getRandomTags(),
      images:[],
      description: "Step into the enigmatic allure of the night with our Mystic Nights Scented Candle, a deep and captivating blend designed to evoke the mystery and warmth of a starry winter evening. This candle combines the soothing essence of winter nights, the rich, woody aroma of sandalwood, and the intoxicating scent of dark rum, creating a fragrance experience that is both luxurious and intriguing.n<ul>n \t<li>Winter Nights: The scent of winter nights captures the crisp, cool air of a clear, starlit evening, infused with subtle notes of pine, cedar, and a hint of frost. This fragrance evokes the quiet serenity of a peaceful night, wrapping you in a cozy, comforting embrace.</li>n \t<li>Sandalwood: The rich, creamy scent of sandalwood adds a layer of earthy warmth to the blend. Its smooth, woody aroma is both grounding and soothing, creating a sense of calm and tranquillity that lingers gently in the air.</li>n \t<li>Dark Rum: Adding a touch of boldness, the scent of dark rum brings a deep, aromatic sweetness to the mix. With its notes of spiced vanilla and aged oak, dark rum introduces a luxurious and slightly intoxicating depth that enhances the mysterious charm of the candle.</li>n</ul>nLight this candle to transform your space into a sanctuary of warmth and mystique. Mystic Nights is perfect for those who appreciate the richness of complex, layered scents that evoke both comfort and intrigue. Whether you\u62aee unwinding after a long day or setting the scene for an intimate evening, this candle offers a sensory experience that is as enchanting as a night under the stars.",
      category: "Combos",
      length: 9,
          width: 9,
      height: 13,
      sizes: [],
      burnTime: "20 hours",
      fragranceNotes: {
          topNotes: [],
          midNotes: [],
          baseNotes: []
      }
  }
]