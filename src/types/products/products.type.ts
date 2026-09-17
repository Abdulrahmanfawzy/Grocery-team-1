
// export interface Product {
//   id: number
//   category_id: number
//   name: string
//   image: string
//   quantity: number
//   price: string
//   discount_price: string | null
// }

// export interface ProductListItem extends Product {
//   descreption: string
//   how_to_use: string | null
//   created_at: string | null
//   updated_at: string | null
// }


// export interface ProductListResponse {
//   data: ProductListItem[]
// }

// export interface ProductDetails extends Product {
//   description: string
//   how_to_use: string | null
//   average_rating: number
//   ratings: ProductRating[]
// }

// export interface ProductRating {
//   id: number
//   comment: string
//   stars: number
//   created_at: string | null
//   user: {
//     name: string
//     avatar: string | null
//   }
// }

export interface Product {
  id: number
  category_id: number
  name: string
  descreption: string
  how_to_use: string | null
  image: string
  quantity: number
  price: string
  discount_price: string | null
  // 🟠 Bug: API sends average_rating but this type does not include it
  // TypeScript does not know this field exists on product.
  // This makes it easy to use the wrong name like rating instead of average_rating.
  // Fix: Add average_rating?: number if the product list API sends it.
  // ✅ Example Fix Syntax (DO NOT APPLY, just example):
  // average_rating?: number
  created_at: string | null
  updated_at: string | null
}

export interface PaginationLink {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

export interface PaginatedProducts {
  current_page: number
  data: Product[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: PaginationLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export interface ProductListResponse {
  success: boolean
  message: string
  data: {
    data: PaginatedProducts
  }
}

export type ProductListItem = Product
