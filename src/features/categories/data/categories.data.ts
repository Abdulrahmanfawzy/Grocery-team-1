import type { Product } from '@/types/products/products.type'
import heroImage from '@/assets/apples.png'

export interface CategoryItem {
  id: string
  name: string
  slug: string
  image: string
}


export const categories: CategoryItem[] = [
  {
    id: 'fresh-foods',
    name: 'Fresh Foods',
    slug: 'fresh-foods',
    image: heroImage, 
  },
  {
    id: 'bread-dairy',
    name: 'Bread & Dairy',
    slug: 'bread-dairy',
    image: heroImage, 
  },
  {
    id: 'meats-seafood',
    name: 'Meats & Seafood',
    slug: 'meats-seafood',
    image: heroImage, 
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    image: heroImage, 
  },
  {
    id: 'packed-canned-foods',
    name: 'Packed & Canned foods',
    slug: 'packed-canned-foods',
    image: heroImage, 
  },
  {
    id: 'home-essentials',
    name: 'Home Essentials',
    slug: 'home-essentials',
    image: heroImage, 
  },
  {
    id: 'personal-baby-care',
    name: 'Personal & Baby Care',
    slug: 'personal-baby-care',
    image: heroImage, 
  },
]

export const meats: Product[] = [
  {
    id: 1,
    name: 'Meat Packet',
    price: 78.8,
    oldPrice: 80,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 20,
    image: heroImage,
    images: [heroImage],
  },
  {
    id: 2,
    name: 'Minced Meat',
    price: 67,
    oldPrice: 67,
    rating: 4,
    inStock: true,
    isNew: false,
    discount: 0,
    image: heroImage,
    images: [heroImage],
  },
  {
    id: 3,
    name: 'Burger',
    price: 60,
    oldPrice: 60,
    rating: 5,
    inStock: true,
    isNew: false,
    discount: 0,
   image: heroImage,
    images: [heroImage],
  },
  {
    id: 1,
    name: 'Meat Packet',
    price: 78.8,
    oldPrice: 80,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 20,
    image: heroImage,
    images: [heroImage],
  }
]

export const poultry: Product[] = [
  {
    id: 4,
    name: 'Chicken Drumstick',
    price: 55.8,
    oldPrice: 60,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 20,
   image: heroImage,
    images: [heroImage],
  },
  {
    id: 5,
    name: 'Chicken',
    price: 50,
    oldPrice: 50,
    rating: 4,
    inStock: true,
    isNew: false,
    discount: 0,
    image: heroImage,
    images: [heroImage],
  },
  {
    id: 6,
    name: 'Chicken',
    price: 60,
    oldPrice: 60,
    rating: 5,
    inStock: true,
    isNew: false,
    discount: 0,
   image: heroImage,
    images: [heroImage],
  },
  {
    id: 1,
    name: 'Meat Packet',
    price: 78.8,
    oldPrice: 80,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 20,
    image: heroImage,
    images: [heroImage],
  },
]

export const seafood: Product[] = [
  {
    id: 7,
    name: 'Salmon',
    price: 79.8,
    oldPrice: 89,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 10,
   image: heroImage,
    images: [heroImage],
  },
  {
    id: 8,
    name: 'Salmon Fillet',
    price: 149,
    oldPrice: 149,
    rating: 4,
    inStock: true,
    isNew: false,
    discount: 0,
    image: heroImage,
    images: [heroImage],
  },
  {
    id: 9,
    name: 'Simply Fish',
    price: 110,
    oldPrice: 110,
    rating: 5,
    inStock: true,
    isNew: false,
    discount: 0,
   image: heroImage,
    images: [heroImage],
  },
  {
    id: 1,
    name: 'Meat Packet',
    price: 78.8,
    oldPrice: 80,
    rating: 3.8,
    inStock: true,
    isNew: true,
    discount: 20,
    image: heroImage,
    images: [heroImage],
  },
]