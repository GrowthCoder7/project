export interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number; // Made optional since it's not always provided
  bigPrice?: number;
  bigDiscountedPrice?: number;
  tags: string[]; // Updated to match the `tags` array in the JSON
  images: string[]; // Keeping this for multiple images
  description?: string; // Made optional, as it might not always be present
  category: string; // Assuming this is always provided in the product
  length: number; // The dimension data in the JSON
  width: number; // The dimension data in the JSON
  height: number; // The dimension data in the JSON
  sizes: string[]; 
  burnTime: string; 
  fragranceNotes?: { 
    topNotes?: string[];
    midNotes?: string[];
    baseNotes?: string[];
  };
}


export interface CartItem extends Product {
  quantity: number;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}