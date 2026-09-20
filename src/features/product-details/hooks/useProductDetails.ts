import { useQuery } from '@tanstack/react-query'
import { getProductDetails } from '../services/productsDetails.service'

const useProductDetails = (productId: number) => {
  return useQuery({
    queryKey: ['product-details', productId],
    queryFn: () => getProductDetails(productId),
  })
}

export default useProductDetails
