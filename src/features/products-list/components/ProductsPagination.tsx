import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import type { ProductsResponse } from '@/types/products.type'

type ProductsPaginationProps = {
  current_page: ProductsResponse['current_page']
  last_page: ProductsResponse['last_page']
  goToPage: (page: number) => void
  scrollToProductsList: () => void
}

const ProductsPagination = ({
  current_page,
  last_page,
  goToPage,
  scrollToProductsList,
}: ProductsPaginationProps) => {
  return (
    <>
      <Pagination>
        <PaginationContent className="border border-gray-200 rounded-xl">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault()

                scrollToProductsList()

                if (current_page > 1) {
                  goToPage(current_page - 1)
                }
              }}
              className={
                current_page === 1
                  ? 'bg-gray-200 cursor-not-allowed  '
                  : 'hover:bg-app-main hover:text-white'
              }
            />
          </PaginationItem>

          {/* Page Numbers */}
          {Array.from({ length: last_page }, (_, index) => index + 1).map((page) => {
            return (
              <>
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToProductsList()
                      goToPage(page)
                    }}
                    className={`hover:bg-app-main hover:text-white ${page === current_page && 'bg-app-main text-white'}`}
                    isActive={page === current_page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </>
            )
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault()
                scrollToProductsList()
                if (current_page < last_page) {
                  goToPage(current_page + 1)
                }
              }}
              className={
                current_page === last_page
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'hover:bg-app-main hover:text-white'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default ProductsPagination
