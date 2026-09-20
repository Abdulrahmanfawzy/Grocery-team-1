export interface Product {
  id: number;
  category_id: number;
  type: string;
  name: string;
  brand: string;
  descreption: string;
  how_to_use: string;
  image: string;
  quantity: number;
  price: string;
  discount_price: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface CartItem {
  id: number;
  cart_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  product: Product;
}

export interface Cart {
  id: number;
  user_id: number;
  created_at: string;
  items: CartItem[];
}

export interface AddCartItemRequest {
  product_id: number;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}