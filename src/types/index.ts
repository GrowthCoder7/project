export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];  // Updated to support multiple images
  description?: string;
  category?: string;
  scent?: string[];
  burnTime?: string;
  tags?: string[];
  discount?: number;
  discountedPrice?:number;
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