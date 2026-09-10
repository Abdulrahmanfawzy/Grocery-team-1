export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  inStock: boolean;
}

export interface Cart {
  items: CartItem[];
  shipping: number;
  address: string;
}