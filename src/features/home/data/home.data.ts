import Img from '@/assets/img.png'
import potatoesImg from '@/assets/potatoes.png'
import tomatoesImg from '@/assets/tomatoes.png'
import greenBeansImg from '@/assets/green-beans.png'
import broccoliImg from '@/assets/broccoli.png'
import papayasImg from '@/assets/papayas.png'
import peachesImg from '@/assets/peaches.png'
import berriesImg from '@/assets/berries.png'
import applesImg from '@/assets/apples.png'
import persimmonImg from '@/assets/persimmon.png'
import coffeeImg from '@/assets/coffee.png'
import sausageImg from '@/assets/sausage.png'
import teaImg from '@/assets/tea.png'
import onionsImg from '@/assets/onions.png'
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

export const hotDeals: HomeProduct[] = [
  { id: 'radish', name: 'Redish 500g', category: 'Vegetables', image: Img, price: 12, oldPrice: 15.9, rating: 4, reviews: 4, seller: 'Mr.food' },
  { id: 'potatoes', name: 'Potatos 1g', category: 'Vegetables', image: potatoesImg, price: 20, oldPrice: 25.9, rating: 5, reviews: 6, seller: 'Mr.food' },
  { id: 'tomatoes', name: 'Tomatos 200g', category: 'Vegetables', image: tomatoesImg, price: 24, oldPrice: 28.9, rating: 5, reviews: 3, seller: 'Mr.food' },
  { id: 'green-beans', name: 'Green Beans 350g', category: 'Vegetables', image: greenBeansImg, price: 8, oldPrice: 12.9, rating: 4, reviews: 2, seller: 'Mr.food' },
  { id: 'broccoli', name: 'Broccolli 1kg', category: 'Vegetables', image: broccoliImg, price: 17, oldPrice: 20, rating: 4, reviews: 2, seller: 'Mr.food' },
]

export const newProducts: HomeProduct[] = [
  { id: 'papaya', name: 'Papayas 5kg', category: 'Fruits', image: papayasImg, price: 80, oldPrice: 90, rating: 4, reviews: 4, seller: 'Mr.food' },
  { id: 'peaches', name: 'Peaches 2kg', category: 'Fruits', image: peachesImg, price: 55, oldPrice: 57.8, rating: 5, reviews: 5, seller: 'Mr.food' },
  { id: 'blackberries', name: 'Blackberries 3kg', category: 'Fruits', image: berriesImg, price: 60, oldPrice: 65, rating: 5, reviews: 2, seller: 'Mr.food' },
  { id: 'apples', name: 'Apples 8kg', category: 'Fruits', image: applesImg, price: 45, oldPrice: 50.99, rating: 5, reviews: 2, seller: 'Mr.food' },
  { id: 'persimmon', name: 'Persimmon 1kg', category: 'Fruits', image: persimmonImg, price: 35, oldPrice: 37, rating: 4, reviews: 2, seller: 'Mr.food' },
]

export const bestSellers: HomeProduct[] = [
  { id: 'coffee', name: 'Coffee 1kg', category: 'Coffe & teas', image: coffeeImg, price: 20, oldPrice: 25, rating: 4, reviews: 5, seller: 'Mr.food', badge: 'Save 10%', stock: '20/50' },
  { id: 'sausage', name: 'Hala Sausage 240g', category: 'Meat', image: sausageImg, price: 100, oldPrice: 170, rating: 4, reviews: 4, seller: 'Mr.food', badge: 'Best deal', stock: '7/20' },
  { id: 'tea', name: 'Green Tea 200g', category: 'Coffe & teas', image: teaImg, price: 30, oldPrice: 35, rating: 4, reviews: 5, seller: 'Mr.food', badge: 'Save 10%', stock: '32/50' },
  { id: 'onions', name: 'Onions 1Kg', category: 'Vegetables', image: onionsImg, price: 40, oldPrice: 50, rating: 4, reviews: 3, seller: 'Mr.food', badge: 'Save 10%', stock: '2/10' },
  { id: 'pineapple', name: 'Pineapple 1 Piece', category: 'Fruits', image: pineappleImg, price: 100, oldPrice: 120, rating: 5, reviews: 3, seller: 'Mr.food', badge: 'Save 10%', stock: '1/20' },
]

export const categories: ProductCategory[] = ['Vegetables', 'Fruits', 'Coffe & teas', 'Meat']
