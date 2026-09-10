import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'

export type BreadcrumbItemType = {
  label: string
  href?: string
}

type AppBreadcrumbProps = {
  breadcrumbItems: BreadcrumbItemType[]
}

const AppBreadcrumb = ({ breadcrumbItems }: AppBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1

          return (
            <div key={item.label} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-app-light-blue! text-base font-bold">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <Link
                    to={item.href || ''}
                    className="text-white! text-base font-bold hover:text-app-main"
                  >
                    {item.label}
                  </Link>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator className="text-white! [&>svg]:hidden pl-0.5">
                  /
                </BreadcrumbSeparator>
              )}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
