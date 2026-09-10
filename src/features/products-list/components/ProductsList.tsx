import ProductCard from './ProductCard'

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  )
}

export default ProductsList
