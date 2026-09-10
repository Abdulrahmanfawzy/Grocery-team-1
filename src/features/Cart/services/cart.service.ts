import type { Cart } from "../types/cart.types";
import orangeImage from "@/assets/orange.png";
import breadImage from "@/assets/bread.png";
import eggsImage from "@/assets/eggs.png";
import makroniImage from "@/assets/makroni.png";
import milkImage from "@/assets/milk.png";
import saltImage from "@/assets/salt.png";
import sausageImage from "@/assets/sausage.png";
import teaImage from "@/assets/tea.png";
const cartData: Cart = {
  shipping: 40,

  address: "Villa 14, Street 23, District 5, New Cairo, Cairo",

  items: [
    {
      id: 1,
      name: "Premium Organic Orange - 1KG",
      image: orangeImage,
      price: 20,
      quantity: 1,
      inStock: true,
    },
    {
      id: 2,
      name: "Sausage With Fat Balady",
      image: sausageImage,
      price: 400,
      quantity: 1,
      inStock: true,
    },
    {
      id: 3,
      name: "Zanaty White Eggs - 30 Pieces",
      image: eggsImage,
      price: 189,
      quantity: 1,
      inStock: false,
    },
    {
      id: 4,
      name: "COOKS - SALT - 400G",
      image: saltImage,
      price: 12,
      quantity: 4,
      inStock: true,
    },
    {
      id: 5,
      name: "Diet Bread - 5 Pieces",
      image: breadImage,
      price: 24.95,
      quantity: 2,
      inStock: true,
    },
    {
      id: 6,
      name: "Almarai Fresh Full Fat Milk - 1.5 L",
      image: milkImage,
      price: 78.5,
      quantity: 1,
      inStock: true,
    },
    {
      id: 7,
      name: "El Arosa Loose Black Tea - 40 Gr",
      image: teaImage,
      price: 10,
      quantity: 1,
      inStock: true,
    },
    {
      id: 8,
      name: "Italiano Pasta Spaghetti - 1Kg",
      image: makroniImage,
      price: 55,
      quantity: 1,
      inStock: true,
    },
  ],
};

export const getCart = async (): Promise<Cart> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartData);
    }, 300);
  });
};