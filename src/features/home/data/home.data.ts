
import coffeeImg from '@/assets/coffee.png'
import sausageImg from '@/assets/sausage.png'
import teaImg from '@/assets/tea.png'
import pineappleImg from '@/assets/pineapple.png'

export type ProductCategory = 'Vegetables' | 'Fruits' | 'Coffe & teas' | 'Meat'

export interface HomeProduct {
  id: string
  name: string
  category: ProductCategory
  image: string
  price: number
  oldPrice: number
  rating: number
  reviews: number
  seller: string
  badge?: string
  stock?: string
}


export const bestSellers: HomeProduct[] = [
  { id: 'coffee', name: 'Coffee 1kg', category: 'Coffe & teas', image: coffeeImg, price: 20, oldPrice: 25, rating: 4, reviews: 5, seller: 'Mr.food', badge: 'Save 10%', stock: '20/50' },
  { id: 'sausage', name: 'Hala Sausage 240g', category: 'Meat', image: sausageImg, price: 100, oldPrice: 170, rating: 4, reviews: 4, seller: 'Mr.food', badge: 'Best deal', stock: '7/20' },
  { id: 'tea', name: 'Green Tea 200g', category: 'Coffe & teas', image: teaImg, price: 30, oldPrice: 35, rating: 4, reviews: 5, seller: 'Mr.food', badge: 'Save 10%', stock: '32/50' },
  { id: 'onions', name: 'Onions 1Kg', category: 'Vegetables', image: teaImg, price: 40, oldPrice: 50, rating: 4, reviews: 3, seller: 'Mr.food', badge: 'Save 10%', stock: '2/10' },
  { id: 'pineapple', name: 'Pineapple 1 Piece', category: 'Fruits', image: pineappleImg, price: 100, oldPrice: 120, rating: 5, reviews: 3, seller: 'Mr.food', badge: 'Save 10%', stock: '1/20' },
]

